import React from 'react';
import { Heart, Mail, Phone, MapPin, Users } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  return (
    <footer className="bg-gradient-to-br from-blue-50 to-green-50 border-t border-blue-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-white p-3 rounded-xl shadow-md border border-blue-100">
                <img 
                  src="/logo-ups.png" 
                  alt="Logo U.P.S" 
                  className="h-8 w-8 object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'block';
                  }}
                />
                <Heart className="h-8 w-8 text-blue-600 hidden" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-600">U.P.S</h3>
                <p className="text-sm text-gray-600">Union Pour la Solidarité</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Association apolitique, non syndicale, à but exclusivement social et communautaire, 
              œuvrant pour la solidarité et le développement communautaire au Sénégal.
            </p>
          </div>

          {/* Navigation rapide */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-600">Navigation</h4>
            <ul className="space-y-2">
              {[
                { id: 'home', label: 'Accueil' },
                { id: 'about', label: 'À propos' },
                { id: 'actions', label: 'Nos actions' },
                { id: 'join', label: 'Nous rejoindre' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => setCurrentPage(item.id)}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-sm"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-green-600">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-500" />
                <span className="text-gray-600 text-sm">
                  Grand Dakar, Villa N°371<br />Dakar, Sénégal
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-500" />
                <div className="text-gray-600 text-sm">
                  <p>(+221) 78 490 29 08</p>
                  <p>(+221) 77 658 68 36</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-500" />
                <span className="text-gray-600 text-sm">mubarakbusinesstrading@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Informations légales */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-green-600">Informations légales</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <p><span className="font-semibold">RC:</span> SN DKR 2019-A-17037</p>
              <p><span className="font-semibold">NINEA:</span> 004161759</p>
              <p><span className="font-semibold">Cofina:</span> 251020004697</p>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-200 mt-8 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            © 2024 Union Pour la Solidarité (U.P.S). Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;