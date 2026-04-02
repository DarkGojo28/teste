import { lazy, Suspense } from 'react';
import { Hero } from './components/Hero';
import { SectionLoader } from './components/SectionLoader';

// Lazy load below-the-fold components
const ProblemSection = lazy(() => import('./components/ProblemSection').then(m => ({ default: m.ProblemSection })));
const AgitationSection = lazy(() => import('./components/AgitationSection').then(m => ({ default: m.AgitationSection })));
const SolutionSection = lazy(() => import('./components/SolutionSection').then(m => ({ default: m.SolutionSection })));
const Testimonials = lazy(() => import('./components/Testimonials').then(m => ({ default: m.Testimonials })));
const Author = lazy(() => import('./components/Author').then(m => ({ default: m.Author })));
const Offer = lazy(() => import('./components/Offer').then(m => ({ default: m.Offer })));
const BenefitsSection = lazy(() => import('./components/BenefitsSection').then(m => ({ default: m.BenefitsSection })));
const PricingSection = lazy(() => import('./components/PricingSection').then(m => ({ default: m.PricingSection })));
const FAQ = lazy(() => import('./components/FAQ').then(m => ({ default: m.FAQ })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-soft-purple/30 font-sans overflow-x-hidden">
      <main>
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <ProblemSection />
          <AgitationSection />
          <SolutionSection />
          <Testimonials />
          <Author />
          <Offer />
          <BenefitsSection />
          <PricingSection />
          <FAQ />
        </Suspense>
      </main>
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </div>
  );
}
