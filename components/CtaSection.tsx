
import React from 'react';
import { Button } from './Button';

export const CtaSection: React.FC = () => {
  return (
    <section className="bg-gray-900 py-20 sm:py-28">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
          L'Offre : <span className="text-yellow-400">Factorisation de Carrière</span> (Audit Express)
        </h3>

        <ol className="mt-12 flex flex-col md:flex-row justify-center items-center gap-4 text-white text-lg">
          <li className="font-semibold">Phase 1 : Audit Discret (2h)</li>
          <li className="text-gray-500 hidden md:block">&rarr;</li>
          <li className="font-semibold">Phase 2 : Protocole Personnalisé (3-6 mois)</li>
          <li className="text-gray-500 hidden md:block">&rarr;</li>
          <li className="font-semibold">Phase 3 : Autonomie Totale</li>
        </ol>

        <p className="mt-12 text-xl text-gray-300 font-medium">
          C'est le moment d'investir sur l'actif le plus critique de votre entreprise : vous.
        </p>

        <div className="mt-12">
          <Button className="text-xl">
            JE DEMANDE MON AUDIT CONFIDENTIEL
          </Button>
        </div>
      </div>
    </section>
  );
};
