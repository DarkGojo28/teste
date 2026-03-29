import { lazy, Suspense } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SectionLoader } from './components/SectionLoader';

// Lazy load below-the-fold components
const ProblemSection = lazy(() => import('./components/ProblemSection').then(m => ({ default: m.ProblemSection })));
const Features = lazy(() => import('./components/Features').then(m => ({ default: m.Features })));
const Testimonials = lazy(() => import('./components/Testimonials').then(m => ({ default: m.Testimonials })));
const FAQ = lazy(() => import('./components/FAQ').then(m => ({ default: m.FAQ })));
const Pricing = lazy(() => import('./components/Pricing').then(m => ({ default: m.Pricing })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <Hero />
      <Suspense fallback={<SectionLoader />}>
        <ProblemSection />
        <Features />
        <Testimonials />
        <FAQ />
        <Pricing />
        <Footer />
      </Suspense>
    </div>
  );
}
