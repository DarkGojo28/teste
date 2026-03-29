import { lazy, Suspense } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SectionLoader } from './components/SectionLoader';

// Lazy load below-the-fold components
const Benefits = lazy(() => import('./components/Benefits').then(m => ({ default: m.Benefits })));
const Testimonials = lazy(() => import('./components/Testimonials').then(m => ({ default: m.Testimonials })));
const Author = lazy(() => import('./components/Author').then(m => ({ default: m.Author })));
const Offer = lazy(() => import('./components/Offer').then(m => ({ default: m.Offer })));
const FAQ = lazy(() => import('./components/FAQ').then(m => ({ default: m.FAQ })));
const FinalCTA = lazy(() => import('./components/FinalCTA').then(m => ({ default: m.FinalCTA })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));

export default function App() {
  return (
    <div className="min-h-screen bg-night-blue text-white selection:bg-gold selection:text-night-blue font-sans overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <Benefits />
          <Testimonials />
          <Author />
          <Offer />
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
