import React from 'react';
import { ArrowRight, Users, Heart, Target, HandHeart } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Union Pour la{' '}
                <span className="text-blue-600">Solidarité</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Association apolitique et non syndicale, œuvrant pour créer des liens 
                d'entente, promouvoir l'entrepreneuriat et améliorer la vie communautaire 
                au Sénégal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => window.location.href = '#actions'}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <span>Découvrir nos actions</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
                <button 
                  onClick={() => window.location.href = '#join'}
                  className="border-2 border-green-500 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-all duration-300"
                >
                  Nous rejoindre
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Solidarité communautaire"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Users className="h-8 w-8 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-2xl text-gray-900">500+</p>
                    <p className="text-gray-600">Bénéficiaires</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Users, number: '200+', label: 'Membres actifs' },
              { icon: Heart, number: '75+', label: 'Projets réalisés' },
              { icon: Target, number: '10+', label: 'Communes touchées' },
              { icon: HandHeart, number: '8000+', label: 'Personnes aidées' },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-2xl mb-4 group-hover:scale-105 transition-transform duration-300">
                  <stat.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <p className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</p>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Notre Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Créer des liens d'entente et de solidarité, promouvoir l'entrepreneuriat, 
              accompagner les jeunes, améliorer la santé communautaire et l'inclusion numérique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Solidaritée',
                description: 'Unir les membres autour d\'un idéal commun de partage et d\'entraide',
                image: 'https://tse1.mm.bing.net/th/id/OIP.vz2XsBNZOLb7K1pj0wY_EwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
                color: 'blue'
              },
              {
                title: 'Entrepreneuriat',
                description: 'Développer les compétences par l\'économie solidaire et l\'innovation',
                image: 'https://tse3.mm.bing.net/th/id/OIP.kGRuNmh1QgJAGWp0145f1wHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
                color: 'green'
              },
              {
                title: 'Éducation',
                description: 'Accompagner la formation des jeunes et la transformation numérique',
                image: 'https://www.entreprenanteafrique.com/wp-content/uploads/2019/09/Enko-John-Wesley_Abidjan-1024x630.jpg',
                color: 'blue'
              }
            ].map((mission, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                <div className="h-48 overflow-hidden">
                  <img
                    src={mission.image}
                    alt={mission.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className={`text-2xl font-bold mb-4 ${mission.color === 'blue' ? 'text-blue-600' : 'text-green-600'}`}>
                    {mission.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{mission.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Rejoignez notre mission de solidarité
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Ensemble, nous pouvons créer un impact positif durable dans nos communautés. 
            Votre contribution, quelle qu'elle soit, fait la différence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = '#join'}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              Devenir bénévole
            </button>
            <button 
              onClick={() => window.location.href = '#contact'}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Faire un don
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;