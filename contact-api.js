(() => {
  "use strict";

  const form = document.getElementById("consultationForm");
  if (!form) return;

  const status = document.getElementById("formStatus");
  const submitButton = form.querySelector('button[type="submit"]');
  const disclaimer = form.querySelector(".form-disclaimer");

  const copy = {
    ar: {
      disclaimer: "سيُحفظ طلب التواصل في قاعدة بيانات المكتب للرد عليك. لا ترسل تفاصيل قضية سرية أو وثائق عبر هذا النموذج. إرسال الطلب لا ينشئ علاقة محامٍ وموكل ولا يُعد استشارة قانونية.",
      invalid: "يرجى التحقق من الحقول المطلوبة والموافقة على استخدام بيانات التواصل.",
      sending: "جارٍ إرسال الطلب…",
      success: "تم استلام طلبك وحفظه بنجاح. سيتواصل المكتب معك عند مراجعة الطلب.",
      rate: "وصلت إلى الحد المؤقت للطلبات. يرجى المحاولة بعد ساعة.",
      failed: "تعذر إرسال الطلب الآن. يرجى المحاولة لاحقًا أو التواصل مع المكتب مباشرة.",
    },
    fr: {
      disclaimer: "Votre demande sera enregistrée dans la base de données du cabinet afin de vous répondre. N’envoyez aucun détail confidentiel ni document via ce formulaire. L’envoi ne crée pas de relation avocat-client et ne constitue pas un conseil juridique.",
      invalid: "Veuillez vérifier les champs obligatoires et votre consentement.",
      sending: "Envoi de la demande…",
      success: "Votre demande a été reçue et enregistrée. Le cabinet vous contactera après examen.",
      rate: "La limite temporaire de demandes est atteinte. Veuillez réessayer dans une heure.",
      failed: "La demande n’a pas pu être envoyée. Veuillez réessayer plus tard ou contacter directement le cabinet.",
    },
    en: {
      disclaimer: "Your request will be stored in the office database so the office can respond. Do not submit confidential case details or documents through this form. Submission does not create a lawyer-client relationship or constitute legal advice.",
      invalid: "Please check the required fields and confirm your consent.",
      sending: "Submitting your request…",
      success: "Your request was received and saved. The office will contact you after reviewing it.",
      rate: "The temporary request limit has been reached. Please try again in one hour.",
      failed: "Your request could not be submitted. Please try again later or contact the office directly.",
    },
  };

  function currentCopy() {
    const language = document.documentElement.lang || "ar";
    return copy[language] || copy.ar;
  }

  function updateDisclaimer() {
    if (disclaimer) disclaimer.textContent = currentCopy().disclaimer;
  }

  updateDisclaimer();
  new MutationObserver(updateDisclaimer).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["lang"],
  });

  // Capture-phase handler prevents the old demo WhatsApp/mailto handler in app.js.
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    event.stopImmediatePropagation();

    const t = currentCopy();
    if (!form.reportValidity()) {
      status.textContent = t.invalid;
      return;
    }

    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      subject: String(data.get("subject") || ""),
      message: String(data.get("message") || "").trim(),
      consent: data.get("consent") === "on",
      website: String(data.get("website") || ""),
    };

    const wasDisabled = submitButton.disabled;
    submitButton.disabled = true;
    status.textContent = t.sending;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        cache: "no-store",
        body: JSON.stringify(payload),
      });

      if (response.status === 429) {
        status.textContent = t.rate;
        return;
      }

      if (!response.ok) {
        status.textContent = t.failed;
        return;
      }

      const result = await response.json().catch(() => null);
      if (!result || result.ok !== true) {
        status.textContent = t.failed;
        return;
      }

      form.reset();
      status.textContent = t.success;
    } catch {
      status.textContent = t.failed;
    } finally {
      submitButton.disabled = wasDisabled;
    }
  }, true);
})();
