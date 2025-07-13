interface EmailData {
  to: string;
  subject: string;
  body: string;
}

export const sendEmail = (emailData: EmailData): void => {
  const mailtoLink = `mailto:${emailData.to}?subject=${encodeURIComponent(emailData.subject)}&body=${encodeURIComponent(emailData.body)}`;
  window.location.href = mailtoLink;
};

export const formatContactEmail = (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): EmailData => {
  return {
    to: 'mubarakbusinesstrading@gmail.com',
    subject: `Contact depuis le site U.P.S - ${formData.subject}`,
    body: `
Nouveau message depuis le site web de l'U.P.S

Informations de contact:
- Nom: ${formData.name}
- Email: ${formData.email}
- Sujet: ${formData.subject}

Message:
${formData.message}

---
Envoyé depuis le formulaire de contact du site web
    `.trim()
  };
};

export const formatJoinEmail = (formData: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  motivation: string;
  skills: string;
  message: string;
}): EmailData => {
  return {
    to: 'mubarakbusinesstrading@gmail.com',
    subject: `Nouvelle candidature d'adhésion - ${formData.firstName} ${formData.lastName}`,
    body: `
Nouvelle demande d'adhésion à l'U.P.S

Informations personnelles:
- Nom: ${formData.lastName}
- Prénom: ${formData.firstName}
- Email: ${formData.email}
- Téléphone: ${formData.phone}

Motivation:
${formData.motivation}

Compétences et domaines d'intérêt:
${formData.skills}

Message libre:
${formData.message}

---
Envoyé depuis le site web de l'U.P.S
    `.trim()
  };
};