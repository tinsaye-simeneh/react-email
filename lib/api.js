export const sendContactForm = async () =>
  await fetch("/api/contact", {
    method: "POST",
  });
