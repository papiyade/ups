import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Préparer les données pour l'email
    const emailData = {
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

    // Créer le lien mailto
    const mailtoLink = `mailto:${emailData.to}?subject=${encodeURIComponent(emailData.subject)}&body=${encodeURIComponent(emailData.body)}`;
    
    // Ouvrir le client email
    window.location.href = mailtoLink;
    
    // Afficher le message de confirmation et réinitialiser le formulaire
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-blue-600">Contactez</span> l'U.P.S
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Nous sommes à votre écoute pour répondre à toutes vos questions, 
              recevoir vos suggestions ou discuter de partenariats potentiels.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Nos Coordonnées</h2>
              
              <div className="space-y-8">
                {/* Adresse */}
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-4 rounded-2xl flex-shrink-0">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Adresse</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Grand Dakar, Villa N°371<br />
                      Dakar, Sénégal
                    </p>
                  </div>
                </div>

                {/* Téléphones */}
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-4 rounded-2xl flex-shrink-0">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Téléphones</h3>
                    <div className="space-y-2 text-gray-600">
                      <p>(+221) 78 490 29 08</p>
                      <p>(+221) 77 658 68 36</p>
                      <p>(+221) 76 758 84 68</p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-4 rounded-2xl flex-shrink-0">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-600">mubarakbusinesstrading@gmail.com</p>
                  </div>
                </div>

                {/* Horaires */}
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-4 rounded-2xl flex-shrink-0">
                    <Clock className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Horaires</h3>
                    <div className="space-y-1 text-gray-600">
                      <p>Lundi - Vendredi : 8h00 - 17h00</p>
                      <p>Samedi : 8h00 - 13h00</p>
                      <p>Dimanche : Fermé</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Localisation</h3>
                <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 text-center">
                  <MapPin className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <p className="text-gray-600">
                    Carte interactive disponible sur demande.<br />
                    Contactez-nous pour plus d'informations sur l'accès.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 md:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Envoyez-nous un Message</h2>
                
                {isSubmitted && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <p className="text-green-700">Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white"
                      placeholder="Votre nom complet"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white"
                      placeholder="votre.email@exemple.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sujet <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="adhesion">Demande d'adhésion</option>
                      <option value="partenariat">Proposition de partenariat</option>
                      <option value="benevolat">Bénévolat</option>
                      <option value="don">Don ou soutien</option>
                      <option value="information">Demande d'information</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white"
                      placeholder="Votre message..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl"
                  >
                    <Send className="h-5 w-5" />
                    <span>Envoyer le Message</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Informations Légales */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Informations Légales</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">MUBARACK BUSINESS TRADING</h3>
                <div className="space-y-3 text-gray-600">
                  <p><span className="font-medium">Siège social :</span> Grand Dakar, Villa N°371, Dakar - Sénégal</p>
                  <p><span className="font-medium">RC :</span> SN DKR 2019-A-17037</p>
                  <p><span className="font-medium">NINEA :</span> 004161759</p>
                  <p><span className="font-medium">Compte Cofina :</span> 251020004697</p>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Statut Juridique</h3>
                <div className="space-y-3 text-gray-600">
                  <p><span className="font-medium">Type :</span> Association</p>
                  <p><span className="font-medium">Nature :</span> Apolitique et non syndicale</p>
                  <p><span className="font-medium">But :</span> Exclusivement social et communautaire</p>
                  <p><span className="font-medium">Domaine :</span> Développement communautaire</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Prêt à Nous Rejoindre ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Que ce soit pour devenir membre, bénévole ou partenaire, 
            nous avons hâte de collaborer avec vous pour créer un impact positif.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg">
              Rejoindre l'Association
            </button>
            <a
              href="tel:+221784902908"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Appeler Maintenant
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;