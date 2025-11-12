
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-6 text-center text-gray-500">
        <p className="font-bold text-lg text-gray-400">Stress Break Lab</p>
        <p className="text-sm mt-2">Dormelles</p>
        <p className="text-sm mt-1">Contactez-moi directement : (Numéro ou Email Confidentiel)</p>
        <p className="text-xs mt-8">&copy; {new Date().getFullYear()} Stress Break Lab. Tous droits réservés.</p>
      </div>
    </footer>
  );
};
