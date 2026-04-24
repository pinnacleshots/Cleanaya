// EmailJS - https://www.emailjs.com/
// Env vars override these defaults (use .env locally, Vercel env for other projects).
// Public key + service + template IDs are client-side by design; never put your private key here.
const defaults = {
  publicKey: 'cnpihMgcYWgso4sY6',
  serviceId: 'service_mi6n282',
  contactTemplateId: 'template_3x7gkwp',
  pricingTemplateId: 'template_0v1y2bf',
}

export const EMAILJS = {
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || defaults.publicKey,
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || defaults.serviceId,
  contactTemplateId:
    import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID || defaults.contactTemplateId,
  pricingTemplateId:
    import.meta.env.VITE_EMAILJS_PRICING_TEMPLATE_ID || defaults.pricingTemplateId,
}
