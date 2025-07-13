import React, { useState } from 'react';
import { Send, Users, Heart, Target, CheckCircle, ArrowRight } from 'lucide-react';

const JoinUs: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    motivation: '',
    skills: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Préparer les données pour l'email
    const emailData = {
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

    // Créer le lien mailto
    const mailtoLink = `mailto:${emailData.to}?subject=${encodeURIComponent(emailData.subject)}&body=${encodeURIComponent(emailData.body)}`;
    
    // Ouvrir le client email
    window.location.href = mailtoLink;
    
    // Afficher le message de confirmation
    setTimeout(() => {
      setIsSubmitted(true);
    }, 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white p-12 rounded-3xl shadow-2xl">
              <div className="bg-green-100 p-6 rounded-full w-fit mx-auto mb-8">
                <CheckCircle className="h-16 w-16 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Merci pour votre candidature !</h1>
              <p className="text-lg text-gray-600 mb-8">
                Nous avons bien reçu votre demande d'adhésion. Notre équipe examinera votre candidature 
                et vous contactera dans les plus brefs délais.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
              >
                Retour au formulaire
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-blue-600">Rejoignez</span> Notre Mission
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Ensemble, nous pouvons créer un impact positif durable dans nos communautés. 
              Votre engagement, vos compétences et votre passion peuvent faire la différence.
            </p>
          </div>
        </div>
      </section>

      {/* Pourquoi Nous Rejoindre */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pourquoi Nous Rejoindre ?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              En rejoignant l'U.P.S, vous intégrez une communauté engagée qui œuvre 
              concrètement pour le développement social et communautaire.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Créer du Lien Social',
                description: 'Participez à la construction d\'une société plus solidaire et unie autour de valeurs communes.',
                benefits: ['Rencontrer des personnes engagées', 'Développer votre réseau', 'Partager vos valeurs']
              },
              {
                icon: Heart,
                title: 'Impact Concret',
                description: 'Contribuez directement à l\'amélioration des conditions de vie dans vos communautés.',
                benefits: ['Projets concrets et mesurables', 'Résultats visibles', 'Changement positif']
              },
              {
                icon: Target,
                title: 'Développement Personnel',
                description: 'Développez vos compétences tout en contribuant à une cause qui vous tient à cœur.',
                benefits: ['Nouvelles compétences', 'Expérience enrichissante', 'Leadership communautaire']
              }
            ].map((reason, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="bg-white p-4 rounded-2xl w-fit mx-auto mb-6 shadow-md">
                  <reason.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{reason.title}</h3>
                <p className="text-gray-600 text-center mb-6">{reason.description}</p>
                <ul className="space-y-2">
                  {reason.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="text-gray-600 text-sm flex items-center">
                      <ArrowRight className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire d'Adhésion */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Formulaire d'Adhésion</h2>
              <p className="text-lg text-gray-600">
                Remplissez ce formulaire pour rejoindre notre association et commencer votre engagement.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Informations Personnelles */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Informations Personnelles</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Prénom <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Votre prénom"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nom <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Votre nom"
                      />
                    </div>
                  </div>
                </div>

                {/* Contact */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Coordonnées</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="votre.email@exemple.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="+221 XX XXX XX XX"
                      />
                    </div>
                  </div>
                </div>

                {/* Motivation et Compétences */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Votre Engagement</h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Motivation <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="motivation"
                        value={formData.motivation}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Pourquoi souhaitez-vous rejoindre l'U.P.S ? Quelles sont vos motivations ?"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Compétences et Domaines d'Intérêt
                      </label>
                      <textarea
                        name="skills"
                        value={formData.skills}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Quelles compétences pouvez-vous apporter ? Dans quels domaines souhaitez-vous vous investir ?"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message Libre
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Avez-vous des questions ou des commentaires particuliers ?"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-8">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-12 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-300 flex items-center space-x-3 mx-auto shadow-lg hover:shadow-xl"
                  >
                    <Send className="h-5 w-5" />
                    <span>Envoyer ma Candidature</span>
                  </button>
                  <p className="text-sm text-gray-500 mt-4">
                    En soumettant ce formulaire, vous acceptez d'être contacté par l'équipe de l'U.P.S.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Direct */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ou Contactez-nous Directement
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Vous préférez nous contacter directement ? 
            N'hésitez pas à nous appeler ou nous écrire.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+221784902908"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              Appeler : (+221) 78 490 29 08
            </a>
            <a
              href="mailto:mubarakbusinesstrading@gmail.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Écrire un Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinUs;