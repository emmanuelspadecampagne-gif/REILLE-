
import React from 'react';
import { Button } from './Button';
import { Graph } from './Graph';

export const Header: React.FC = () => {
  return (
    <header className="min-h-screen flex items-center bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tighter">
              <span className="block text-yellow-400">Le Piège du Dirigeant :</span>
              <span className="block text-white mt-2">Votre carrière gagne. Votre corps perd 20 ans.</span>
            </h1>
            <h2 className="mt-6 text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
              <span className="font-bold">La vérité :</span> Le stress continu vous consume. Le stress maîtrisé vous allonge la vie de 20 ans.
            </h2>
            <div className="mt-10">
              <Button>AUDIT CONFIDENTIEL GRATUIT</Button>
              <p className="mt-4 text-sm text-gray-500">
                🔒 Discrétion Absolue. Sans engagement.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Graph />
          </div>
        </div>
      </div>
    </header>
  );
};
