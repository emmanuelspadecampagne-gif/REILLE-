
import React from 'react';
import { Header } from './components/Header';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { ProofSection } from './components/ProofSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-gray-900 text-gray-200 font-sans leading-relaxed antialiased">
      <Header />
      <main>
        <ProblemSection />
        <SolutionSection />
        <ProofSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
