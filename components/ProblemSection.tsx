
import React from 'react';

export const ProblemSection: React.FC = () => {
  return (
    <section className="bg-black py-20 sm:py-28">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
          Pourquoi 40 ans est la <span className="text-red-500">Zone Rouge.</span>
        </h3>
        <p className="mt-6 text-lg text-gray-400">
          Vous êtes au sommet, mais vous pilotez sans récupérer. Le corps passe du <strong className="text-green-400">stress aigu bénéfique</strong> au <strong className="text-red-500">stress chronique mortel</strong>.
        </p>
        <div className="mt-12 grid md:grid-cols-2 gap-8 text-left">
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <h4 className="font-bold text-xl text-white">Avant la Promotion</h4>
            <p className="mt-2 text-gray-400">Vous poussez, mais n'osez pas ralentir de peur de perdre l'élan.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <h4 className="font-bold text-xl text-white">Après la Promotion</h4>
            <p className="mt-2 text-gray-400">Vous tenez, masquez la fatigue et n'osez pas demander de l'aide par peur de paraître fragile.</p>
          </div>
        </div>
        <blockquote className="mt-12 border-l-4 border-red-500 pl-6 py-2 text-left italic bg-red-900/10">
          <p className="text-xl text-gray-300">
            <span className="font-bold text-red-400">Le Risque :</span> Le cortisol reste élevé, le sommeil se fragmente, la lucidité baisse. <strong className="text-white">Vous ne construisez plus votre longévité. Vous la consommez.</strong>
          </p>
        </blockquote>
      </div>
    </section>
  );
};
