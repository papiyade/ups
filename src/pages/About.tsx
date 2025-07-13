import React from 'react';
import { Shield, Users, Heart, Target, Award, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              À propos de l'<span className="text-blue-600">U.P.S</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Union Pour la Solidarité est une association sénégalaise apolitique et non syndicale, 
              dédiée exclusivement au développement social et communautaire depuis sa création.
            </p>
          </div>
        </div>
      </section>

      {/* Mission et Valeurs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Notre Mission</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Créer des liens d'entente</h3>
                    <p className="text-gray-600">Rassembler les communautés autour de valeurs communes de solidarité et d'entraide mutuelle.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                    <Target className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Promouvoir l'entrepreneuriat</h3>
                    <p className="text-gray-600">Encourager l'innovation et l'économie solidaire pour un développement durable.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                    <Heart className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Accompagner les jeunes</h3>
                    <p className="text-gray-600">Offrir formation, mentorat et opportunités aux nouvelles générations.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://watv.org/wp-content/uploads/2020/07/mission.jpg"
                alt="Mission de l'association"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Engagement et Principes */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Principes Fondamentaux</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              L'U.P.S s'engage fermement dans un cadre apolitique et non révolutionnaire, 
              concentrée exclusivement sur l'action sociale et communautaire.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Apolitique',
                description: 'Nous maintenons une stricte neutralité politique, nous concentrant uniquement sur l\'action sociale.'
              },
              {
                icon: Users,
                title: 'Non Syndicale',
                description: 'Notre mission est exclusivement communautaire, sans affiliation syndicale ou corporatiste.'
              },
              {
                icon: Heart,
                title: 'But Social',
                description: 'Toutes nos actions visent l\'amélioration des conditions de vie et le bien-être communautaire.'
              }
            ].map((principe, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-br from-blue-50 to-green-50 p-4 rounded-2xl w-fit mx-auto mb-6">
                  <principe.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{principe.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{principe.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Informations Légales */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/5427644/pexels-photo-5427644.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Siège social"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Informations Légales</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Siège Social</h3>
                  <p className="text-gray-600">Grand Dakar, Villa N°371<br />Dakar, Sénégal</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Statut Juridique</h3>
                  <p className="text-gray-600">Association apolitique, non syndicale, à but exclusivement social et communautaire</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Références</h3>
                  <div className="space-y-2 text-gray-600">
                    <p><span className="font-medium">RC:</span> SN DKR 2019-A-17037</p>
                    <p><span className="font-medium">NINEA:</span> 004161759</p>
                    <p><span className="font-medium">Compte Cofina:</span> 251020004697</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision et Impact */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre Vision</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
              Devenir une référence en matière de développement communautaire au Sénégal, 
              en créant un modèle d'entraide et de solidarité qui inspire et transforme 
              positivement la vie des communautés, tout en préservant nos valeurs 
              d'intégrité, de transparence et d'engagement social.
            </p>
            
            {/* Objectifs détaillés */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
              {[
                {
                  title: 'Unir les membres',
                  description: 'Autour d\'un idéal commun de solidarité et d\'entraide',
                  icon: '🤝'
                },
                {
                  title: 'Développer les compétences',
                  description: 'Par l\'entrepreneuriat et l\'économie solidaire',
                  icon: '💼'
                },
                {
                  title: 'Améliorer la commune',
                  description: 'Œuvrer pour la bonne marche de la commune',
                  icon: '🏘️'
                },
                {
                  title: 'Santé communautaire',
                  description: 'Appuyer la réalisation de maternités et postes de santé',
                  icon: '🏥'
                },
                {
                  title: 'Dons médicaux',
                  description: 'Remettre des dons de médicaments et matériel médical',
                  icon: '💊'
                },
                {
                  title: 'Formation des jeunes',
                  description: 'Accompagner la formation et l\'insertion des jeunes',
                  icon: '🎓'
                },
                {
                  title: 'Transformation numérique',
                  description: 'Promouvoir l\'inclusion numérique avec formations sur mesure',
                  icon: '💻'
                },
                {
                  title: 'Ateliers numériques',
                  description: 'Organiser des ateliers pour enfants/adolescents',
                  icon: '👨‍💻'
                },
                {
                  title: 'Éducation religieuse',
                  description: 'Construire et équiper des daaras (écoles coraniques)',
                  icon: '🕌'
                }
              ].map((objectif, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl mb-4">{objectif.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{objectif.title}</h3>
                  <p className="text-gray-600 text-sm">{objectif.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Rejoignez Notre Mission
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Ensemble, nous pouvons créer un impact positif durable dans nos communautés.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = '#join'}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              Devenir Membre
            </button>
            <button 
              onClick={() => window.location.href = '#contact'}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Nous Contacter
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;