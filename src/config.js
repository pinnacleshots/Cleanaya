// EmailJS - https://www.emailjs.com/
// Set via .env: VITE_EMAILJS_PUBLIC_KEY, VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_CONTACT_TEMPLATE_ID, VITE_EMAILJS_PRICING_TEMPLATE_ID
export const EMAILJS = {
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  contactTemplateId: import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID || '',
  pricingTemplateId: import.meta.env.VITE_EMAILJS_PRICING_TEMPLATE_ID || '',
}
