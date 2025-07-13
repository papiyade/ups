import React from 'react';
import { Users, Heart, Target, HandHeart } from 'lucide-react';

const StatsSection: React.FC = () => {
  const stats = [
    { icon: Users, number: '200+', label: 'Membres actifs', color: 'blue' },
    { icon: Heart, number: '75+', label: 'Projets réalisés', color: 'green' },
    { icon: Target, number: '10+', label: 'Communes touchées', color: 'blue' },
    { icon: HandHeart, number: '8000+', label: 'Personnes aidées', color: 'green' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-2xl mb-4 group-hover:scale-105 transition-transform duration-300 border border-blue-100">
                <stat.icon className={`h-12 w-12 ${stat.color === 'blue' ? 'text-blue-600' : 'text-green-600'} mx-auto mb-4`} />
                <p className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;