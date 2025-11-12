
import React from 'react';

const GuaranteeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-green-400 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);

export const ProofSection: React.FC = () => {
    return (
        <section className="bg-black py-20 sm:py-28">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 md:p-12 shadow-2xl">
                    <h4 className="text-2xl font-bold text-center text-yellow-400 mb-6">Paroles de l'Expert</h4>
                    <blockquote className="text-center">
                        <p className="text-2xl md:text-3xl italic text-white leading-snug">
                            "Votre ambition ne devrait pas coûter votre santé. Ma mission est de vous donner les mécanismes pour tenir votre poste sans vous consumer. <strong className="text-yellow-300">L'impact est visible. La méthode est invisible.</strong>"
                        </p>
                        <footer className="mt-6 text-lg font-semibold text-gray-400">— Emmanuel Reille</footer>
                    </blockquote>
                </div>

                <div className="mt-16">
                    <h4 className="text-2xl font-bold text-center text-white mb-8">Garantie Fondamentale</h4>
                    <ul className="space-y-4 max-w-md mx-auto">
                        <li className="flex items-center text-lg bg-gray-900 p-4 rounded-md border border-gray-800">
                            <GuaranteeIcon />
                            <span className="text-gray-300">Confidentialité Totale.</span>
                        </li>
                        <li className="flex items-center text-lg bg-gray-900 p-4 rounded-md border border-gray-800">
                            <GuaranteeIcon />
                            <span className="text-gray-300">Aucune trace dans votre agenda public.</span>
                        </li>
                        <li className="flex items-center text-lg bg-gray-900 p-4 rounded-md border border-gray-800">
                            <GuaranteeIcon />
                            <span className="text-gray-300">Intervention rapide, axée sur la lucidité et la puissance décisionnelle.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};
