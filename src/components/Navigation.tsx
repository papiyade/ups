import React from 'react';

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  isMobile?: boolean;
  onItemClick?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ 
  currentPage, 
  setCurrentPage, 
  isMobile = false, 
  onItemClick 
}) => {
  const navItems = [
    { id: 'home', label: 'Accueil' },
    { id: 'about', label: 'À propos' },
    { id: 'actions', label: 'Nos actions' },
    { id: 'join', label: 'Nous rejoindre' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    if (onItemClick) onItemClick();
  };

  const baseClasses = isMobile 
    ? "block w-full text-left px-4 py-3 rounded-lg transition-all duration-300"
    : "px-4 py-2 rounded-lg transition-all duration-300";

  const activeClasses = "bg-blue-500 text-white shadow-md";
  const inactiveClasses = isMobile 
    ? "text-gray-700 hover:bg-blue-50"
    : "text-gray-700 hover:bg-blue-50 hover:text-blue-600";

  return (
    <>
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => handleNavClick(item.id)}
          className={`${baseClasses} ${
            currentPage === item.id ? activeClasses : inactiveClasses
          }`}
        >
          {item.label}
        </button>
      ))}
    </>
  );
};

export default Navigation;