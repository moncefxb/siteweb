
(() => {
  "use strict";

  const form = document.getElementById("consultationForm");
  if (!form) return;

  const status = document.getElementById("formStatus");
  const submitButton = form.querySelector('button[type="submit"]');

  const messages = {
    ar: {
      sending: "جارٍ إرسال طلبك...",
      success: "تم استلام طلبك وحفظه بنجاح.",
      failed: "تعذر إرسال الطلب. حاول مرة أخرى.",
      limit: "لقد تجاوزت عدد المحاولات. حاول بعد ساعة."
    },
    fr: {
      sending: "Envoi en cours...",
      success: "Votre demande a été enregistrée.",
      failed: "Échec de l'envoi. Veuillez réessayer.",
      limit: "Limite atteinte. Réessayez dans une heure."
    },
    en: {
      sending: "Submitting...",
      success: "Your request has been saved successfully.",
      failed: "Submission failed. Please try again.",
      limit: "Request limit reached. Try again in one hour."
    }
  };

  function copy() {
    return messages[document.documentElement.lang] || messages.ar;
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    event.stopImmediatePropagation();

    if (!form.reportValidity()) return;

    const data = new FormData(form);

    const payload = {
      name: String(data.get("name") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      subject: String(data.get("subject") || ""),
      message: String(data.get("message") || "").trim(),
      consent: data.get("consent") === "on",
      website: String(data.get("website") || "")
    };

    const t = copy();
    const oldText = submitButton?.textContent;

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = t.sending;
    }

    if (status) status.textContent = t.sending;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin",
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (response.status === 429) {
        if (status) status.textContent = t.limit;
        return;
      }

      if (!response.ok || !result.ok) {
        throw new Error("Submission failed");
      }

      form.reset();
      if (status) status.textContent = t.success;

    } catch (error) {
      if (status) status.textContent = t.failed;

    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = oldText;
      }
    }
  }, true);
})();
