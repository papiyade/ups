import React from 'react';
import { Heart, Laptop, GraduationCap, Building, Users, Star } from 'lucide-react';

const Actions: React.FC = () => {
  const projects = [
    {
      title: 'Construction de Postes de Santé',
      category: 'Santé',
      image: 'https://tse4.mm.bing.net/th/id/OIP.fAI88W2w5TE87zPWyYtZxQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
      description: 'Construction et équipement de postes de santé dans les zones reculées pour améliorer l\'accès aux soins.'
    },
    {
      title: 'Formation Numérique Inclusive',
      category: 'Numérique',
      image: 'https://i0.wp.com/oecd-development-matters.org/wp-content/uploads/2022/12/digitalisation-west-africa-education-development-matters-1220x675-1.jpg?w=1200&ssl=1',
      description: 'Ateliers de formation numérique pour tous les âges, avec ou sans écran, adaptés aux besoins locaux.'
    },
    {
      title: 'Construction de Daaras',
      category: 'Éducation',
      image: 'https://tse2.mm.bing.net/th/id/OIP.AZWIc-zlERDV29ucUAS3nwHaFj?rs=1&pid=ImgDetMain&o=7&rm=3',
      description: 'Construction et équipement d\'écoles coraniques modernes pour l\'éducation religieuse et morale.'
    },
    {
      title: 'Dons de Matériel Médical',
      category: 'Santé',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Distribution de médicaments et équipements médicaux aux structures de santé existantes.'
    },
    {
      title: 'Entrepreneuriat Jeunes',
      category: 'Économie',
      image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Accompagnement et formation des jeunes entrepreneurs dans l\'économie solidaire.'
    },
    {
      title: 'Ateliers Numériques Enfants',
      category: 'Éducation',
      image: 'https://engage.org.za/wp-content/uploads/2023/07/digital-inclusion-youth-backgrounder-768x512.jpg',
      description: 'Programmes éducatifs numériques adaptés aux enfants et adolescents de la communauté.'
    },
    {
      title: 'Maternités Rurales',
      category: 'Santé',
      image: 'https://assets.lls.fr/pages/7022928/GEO.1re.CH7.Apprendre.maternite_ouganda.jpg',
      description: 'Construction de maternités dans les zones reculées pour améliorer la santé maternelle.'
    },
    {
      title: 'Économie Solidaire',
      category: 'Économie',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Développement de projets d\'économie solidaire pour l\'autonomisation des communautés.'
    }
  ];

  const testimonials = [
    {
      name: 'Fatou Diallo',
      role: 'Bénéficiaire - Formation Numérique',
      content: 'Grâce à l\'U.P.S, j\'ai pu apprendre l\'informatique et créer ma propre entreprise en ligne. Cette formation a changé ma vie.',
      avatar: 'https://thumbs.dreamstime.com/b/belle-femme-africaine-173510.jpg'
    },
    {
      name: 'Mamadou Seck',
      role: 'Responsable Poste de Santé',
      content: 'Le nouveau poste de santé a révolutionné l\'accès aux soins dans notre village. Nous sommes reconnaissants envers l\'U.P.S.',
      avatar: 'https://cdn.pixabay.com/photo/2022/08/20/11/59/african-man-7398921_640.jpg'
    },
    {
      name: 'Aïssatou Mbaye',
      role: 'Jeune Entrepreneur',
      content: 'L\'accompagnement de l\'U.P.S m\'a permis de développer mon projet et de créer des emplois dans ma communauté.',
      avatar: 'https://cdn.pixabay.com/photo/2024/07/24/12/28/girl-8918049_1280.jpg'
    }
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Nos <span className="text-blue-600">Actions</span> Concrètes
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Découvrez les projets que nous menons pour améliorer la vie des communautés 
              sénégalaises à travers la santé, l'éducation, le numérique et l'entrepreneuriat.
            </p>
          </div>
        </div>
      </section>

      {/* Galerie de Projets */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Galerie de nos Projets</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Chaque projet reflète notre engagement envers le développement durable et l'amélioration 
              des conditions de vie de nos communautés.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.category === 'Santé' ? 'bg-red-100 text-red-600' :
                      project.category === 'Numérique' ? 'bg-blue-100 text-blue-600' :
                      project.category === 'Éducation' ? 'bg-green-100 text-green-600' :
                      'bg-purple-100 text-purple-600'
                    }`}>
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domaines d'Action */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Domaines d'Intervention</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              L'U.P.S intervient dans plusieurs secteurs clés pour un développement global et harmonieux.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: 'Santé Communautaire',
                items: ['Construction de postes de santé', 'Dons de matériel médical', 'Campagnes de sensibilisation']
              },
              {
                icon: Laptop,
                title: 'Transformation Numérique',
                items: ['Formations sur mesure', 'Ateliers pour enfants', 'Inclusion numérique']
              },
              {
                icon: GraduationCap,
                title: 'Éducation',
                items: ['Construction de daaras', 'Formation des jeunes', 'Éducation religieuse']
              },
              {
                icon: Users,
                title: 'Entrepreneuriat',
                items: ['Accompagnement startup', 'Économie solidaire', 'Création d\'emplois']
              }
            ].map((domaine, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-br from-blue-50 to-green-50 p-4 rounded-2xl w-fit mx-auto mb-6">
                  <domaine.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{domaine.title}</h3>
                <ul className="space-y-2">
                  {domaine.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-600 text-sm flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Témoignages</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Les voix de ceux qui ont bénéficié de nos actions témoignent de l'impact concret de nos projets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-2xl">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Participez à nos Actions
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Votre soutien nous permet de continuer et d'amplifier nos actions. 
            Rejoignez-nous pour faire la différence dans votre communauté.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg">
              Devenir Bénévole
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              Soutenir un Projet
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Actions;