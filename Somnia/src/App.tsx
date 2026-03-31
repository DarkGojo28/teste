import { lazy, Suspense } from 'react';
import { Hero } from './components/Hero';
import { SectionLoader } from './components/SectionLoader';

// Lazy load below-the-fold components
const ProblemSection = lazy(() => import('./components/ProblemSection').then(m => ({ default: m.ProblemSection })));
const AgitationSection = lazy(() => import('./components/AgitationSection').then(m => ({ default: m.AgitationSection })));
const CuriositySection = lazy(() => import('./components/Benefits').then(m => ({ default: m.CuriositySection })));
const SolutionSection = lazy(() => import('./components/SolutionSection').then(m => ({ default: m.SolutionSection })));
const Testimonials = lazy(() => import('./components/Testimonials').then(m => ({ default: m.Testimonials })));
const Author = lazy(() => import('./components/Author').then(m => ({ default: m.Author })));
const Offer = lazy(() => import('./components/Offer').then(m => ({ default: m.Offer })));
const BenefitsSection = lazy(() => import('./components/BenefitsSection').then(m => ({ default: m.BenefitsSection })));
const PricingSection = lazy(() => import('./components/PricingSection').then(m => ({ default: m.PricingSection })));
const FAQ = lazy(() => import('./components/FAQ').then(m => ({ default: m.FAQ })));
const FinalCTA = lazy(() => import('./components/FinalCTA').then(m => ({ default: m.FinalCTA })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-soft-purple/30 font-sans overflow-x-hidden">
      <main>
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <ProblemSection />
          <AgitationSection />
          <CuriositySection />
          <SolutionSection />
          <Testimonials />
          <Author />
          <Offer />
          <BenefitsSection />
          <PricingSection />
          <FAQ />
          <FinalCTA />
        </Suspense>
      </main>
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </div>
  );
}
