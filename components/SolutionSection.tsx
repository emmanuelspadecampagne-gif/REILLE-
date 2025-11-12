
import React from 'react';

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);


export const SolutionSection: React.FC = () => {
  return (
    <section className="bg-gray-900 py-20 sm:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white">Je ne travaille pas sur le stress. <span className="text-yellow-400">Je factorise la puissance.</span></h3>
          <p className="mt-4 text-lg text-gray-400">
            Je suis <strong>Emmanuel Reille</strong>. Mon approche n'est pas du coaching, c'est de la <strong>Maintenance Préventive de Dirigeants.</strong>
          </p>
          <p className="mt-4 text-gray-400">
            J'ai réparé et renforcé ceux qui ne peuvent pas craquer : <em>Opérateurs GIGN, Pilotes Dakar, Dirigeants en crise majeure.</em>
          </p>
          <p className="mt-6 text-xl font-semibold text-white">
            Mon objectif : Sécuriser votre carrière avant la rupture.
          </p>
        </div>

        <div className="mt-16 max-w-5xl mx-auto">
          <h4 className="text-2xl font-bold text-center text-white mb-8">Mon Protocole Discret</h4>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg text-center border border-gray-700">
              <div className="text-3xl font-extrabold text-yellow-400 mb-4">1.</div>
              <h5 className="text-xl font-bold text-white mb-2">Audit de l'État Réel</h5>
              <p className="text-gray-400">Un examen physique et corporel pour mesurer ce que vous cachez. (Pas de questionnaire RH.)</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg text-center border border-gray-700">
              <div className="text-3xl font-extrabold text-yellow-400 mb-4">2.</div>
              <h5 className="text-xl font-bold text-white mb-2">Récupération Invisible</h5>
              <p className="text-gray-400">Protocole personnalisé. Personne ne sait que vous récupérez. Vous revenez plus clair, plus rapide.</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg text-center border border-gray-700">
              <div className="text-3xl font-extrabold text-yellow-400 mb-4">3.</div>
              <h5 className="text-xl font-bold text-white mb-2">Autonomie Garantie</h5>
              <p className="text-gray-400">Entraînement au reset nerveux pour récupérer en 3 à 10 minutes n'importe où.</p>
            </div>
          </div>
        </div>

        <blockquote className="mt-20 border-l-4 border-yellow-400 pl-6 py-4 text-left italic bg-yellow-900/10 max-w-4xl mx-auto">
          <div className="flex items-start">
            <CheckIcon />
            <p className="ml-4 text-xl text-gray-300">
              <span className="font-bold text-yellow-300">Le Résultat Mesuré :</span> Retrouvez la capacité de <strong className="text-white">piloter votre poste</strong> en mode excellence, et non en mode survie. Gagnez <strong className="text-white">15 à 20 ans</strong> de puissance prolongée.
            </p>
          </div>
        </blockquote>
      </div>
    </section>
  );
};
