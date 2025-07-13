import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactInfo: React.FC = () => {
  const contactDetails = [
    {
      icon: MapPin,
      title: 'Adresse',
      content: ['Grand Dakar, Villa N°371', 'Dakar, Sénégal'],
      color: 'blue'
    },
    {
      icon: Phone,
      title: 'Téléphones',
      content: ['(+221) 78 490 29 08', '(+221) 77 658 68 36', '(+221) 76 758 84 68'],
      color: 'green'
    },
    {
      icon: Mail,
      title: 'Email',
      content: ['mubarakbusinesstrading@gmail.com'],
      color: 'blue'
    },
    {
      icon: Clock,
      title: 'Horaires',
      content: ['Lundi - Vendredi : 8h00 - 17h00', 'Samedi : 8h00 - 13h00', 'Dimanche : Fermé'],
      color: 'green'
    }
  ];

  return (
    <div className="space-y-8">
      {contactDetails.map((detail, index) => (
        <div key={index} className="flex items-start space-x-4">
          <div className={`${detail.color === 'blue' ? 'bg-blue-100' : 'bg-green-100'} p-4 rounded-2xl flex-shrink-0`}>
            <detail.icon className={`h-6 w-6 ${detail.color === 'blue' ? 'text-blue-600' : 'text-green-600'}`} />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{detail.title}</h3>
            <div className="space-y-1 text-gray-600">
              {detail.content.map((line, lineIndex) => (
                <p key={lineIndex}>{line}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;