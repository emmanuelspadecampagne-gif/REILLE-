
import React from 'react';

export const Graph: React.FC = () => {
  return (
    <div className="relative p-4 md:p-6 border border-gray-700 rounded-lg bg-gray-800/50 shadow-2xl">
      <svg viewBox="0 0 300 150" className="w-full h-auto" aria-labelledby="graphTitle graphDesc">
        <title id="graphTitle">Graphique Carrière vs. Santé</title>
        <desc id="graphDesc">Un graphique montrant une ligne verte ascendante représentant la carrière et une ligne rouge descendante représentant l'énergie et la santé.</desc>
        
        {/* Axes */}
        <line x1="20" y1="130" x2="280" y2="130" stroke="currentColor" strokeWidth="1" className="text-gray-600"/>
        <line x1="20" y1="20" x2="20" y2="130" stroke="currentColor" strokeWidth="1" className="text-gray-600"/>

        {/* Career Path */}
        <path d="M 30 120 Q 150 100 270 30" stroke="#4ade80" fill="none" strokeWidth="4" strokeLinecap="round"/>
        
        {/* Health Path */}
        <path d="M 30 40 Q 150 60 270 125" stroke="#f87171" fill="none" strokeWidth="4" strokeLinecap="round"/>

        {/* Labels */}
        <text x="275" y="30" fill="#4ade80" fontSize="12" textAnchor="start" className="font-bold">Carrière</text>
        <text x="275" y="130" fill="#f87171" fontSize="12" textAnchor="start" className="font-bold">Santé</text>
      </svg>
    </div>
  );
};
