import emailjs from "@emailjs/browser";


export const sendContactEmail = async (form) => {
  const serviceId = "service_4gkuz4q";
  const templateId = "template_pis4x69";
  const publicKey = "0_KrpHk0qNLI9XuNH";

  const templateParams = {
    user_name: form.name,
    user_email: form.email,
    user_message: form.message,
  };

  return emailjs.send(serviceId, templateId, templateParams, publicKey); 
};