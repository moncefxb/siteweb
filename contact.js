const ALLOWED_SUBJECTS = new Set([
  "civil",
  "commercial",
  "property",
  "family",
  "dispute",
  "other",
]);

const JSON_HEADERS = {
  "Content-Type": "application/json; charset=utf-8",
  "Cache-Control": "no-store",
  "X-Content-Type-Options": "nosniff",
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: JSON_HEADERS,
  });
}

async function hashIp(ip) {
  const bytes = new TextEncoder().encode(ip);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest), (b) =>
    b.toString(16).padStart(2, "0"),
  ).join("");
}

export async function onRequestPost({ request, env }) {
  if (!env.DB) {
    return json({ error: "database_unavailable" }, 503);
  }

  // Accept submissions only from this Pages origin.
  const origin = request.headers.get("Origin");
  if (origin && origin !== new URL(request.url).origin) {
    return json({ error: "origin_not_allowed" }, 403);
  }

  const contentType = request.headers.get("Content-Type") || "";
  if (!contentType.toLowerCase().includes("application/json")) {
    return json({ error: "content_type_required" }, 415);
  }

  const rawBody = await request.text();
  if (new TextEncoder().encode(rawBody).byteLength > 4096) {
    return json({ error: "payload_too_large" }, 413);
  }

  let body;
  try {
    body = JSON.parse(rawBody);
  } catch {
    return json({ error: "invalid_json" }, 400);
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return json({ error: "invalid_payload" }, 400);
  }

  // Honeypot: bots that fill this hidden field receive a success-shaped reply.
  if (typeof body.website === "string" && body.website.trim()) {
    return json({ ok: true });
  }

  const fullName = typeof body.name === "string" ? body.name.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const subject = typeof body.subject === "string" ? body.subject : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";
  const consent = body.consent === true;

  if (fullName.length < 2 || fullName.length > 80 || /[\u0000-\u001F\u007F]/.test(fullName)) {
    return json({ error: "invalid_name" }, 400);
  }

  const phoneDigits = phone.replace(/\D/g, "");
  if (
    phone.length < 8 ||
    phone.length > 24 ||
    !/^[0-9+().\-\s]+$/.test(phone) ||
    phoneDigits.length < 8 ||
    phoneDigits.length > 15
  ) {
    return json({ error: "invalid_phone" }, 400);
  }

  if (!ALLOWED_SUBJECTS.has(subject)) {
    return json({ error: "invalid_subject" }, 400);
  }

  if (message.length > 500 || /[\u0000\u0008\u000B\u000C\u000E-\u001F\u007F]/.test(message)) {
    return json({ error: "invalid_message" }, 400);
  }

  if (!consent) {
    return json({ error: "consent_required" }, 400);
  }

  try {
    const clientIp = request.headers.get("CF-Connecting-IP") || "unknown";
    const ipHash = await hashIp(clientIp);
    const now = Math.floor(Date.now() / 1000);

    // Maximum 5 submissions per IP per rolling one-hour window.
    const limit = await env.DB.prepare(`
      INSERT INTO contact_request_limits (ip_hash, window_start, request_count)
      VALUES (?, ?, 1)
      ON CONFLICT(ip_hash) DO UPDATE SET
        window_start = CASE
          WHEN (? - window_start) >= 3600 THEN ?
          ELSE window_start
        END,
        request_count = CASE
          WHEN (? - window_start) >= 3600 THEN 1
          ELSE request_count + 1
        END
      RETURNING request_count
    `)
      .bind(ipHash, now, now, now, now)
      .first();

    if (!limit || Number(limit.request_count) > 5) {
      return json({ error: "rate_limited" }, 429);
    }

    await env.DB.prepare(`
      INSERT INTO contact_requests (full_name, phone, subject, message)
      VALUES (?, ?, ?, ?)
    `)
      .bind(fullName, phone, subject, message || null)
      .run();

    return json({ ok: true }, 201);
  } catch (error) {
    // Do not log names, phone numbers, message contents, or raw IP addresses.
    console.error("Contact request could not be stored:", error?.message || "unknown error");
    return json({ error: "storage_failed" }, 500);
  }
}
