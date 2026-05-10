// Single source of truth for contact details across the site.
// Update once here; all components/pages pick it up.

export const CONTACT = {
  email: "admin@valuetechsolution.com",
  emailPretty: "admin@valuetechsolution.com",

  // E.164 without "+" (used for wa.me links)
  whatsappE164: "918287245032",
  // Pretty display
  phone: "+91 82872 45032",

  // Default WhatsApp greeting
  whatsappGreeting:
    "Hi Value Tech Solution, I'd like to talk about a project.",

  // Brand
  brand: "Value Tech Solution",
  domain: "valuetechsolution.com",
  url: "https://valuetechsolution.com",

  // Social
  linkedin: "https://www.linkedin.com/in/valuetech-solution-624528409/",
  twitter: "https://twitter.com/valuetechsoln",
  github: "https://github.com/valuetechsolution",
};

export function whatsappLink(text?: string) {
  return `https://wa.me/${CONTACT.whatsappE164}?text=${encodeURIComponent(
    text ?? CONTACT.whatsappGreeting
  )}`;
}

export function mailtoLink(subject?: string, body?: string) {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const qs = params.toString();
  return `mailto:${CONTACT.email}${qs ? `?${qs}` : ""}`;
}
