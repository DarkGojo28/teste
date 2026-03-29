import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById('hero');
      const footer = document.getElementById('footer');
      const pricing = document.getElementById('pricing');

      if (!hero || !footer) return;

      const heroBottom = hero.getBoundingClientRect().bottom;
      const footerTop = footer.getBoundingClientRect().top;
      const pricingTop = pricing?.getBoundingClientRect().top;

      // Show if scrolled past hero AND not yet reached footer
      // Also hide if we are already at the pricing section (optional but good UX)
      const pastHero = heroBottom < 0;
      const beforeFooter = footerTop > window.innerHeight;
      const notAtPricing = pricingTop ? pricingTop > window.innerHeight / 2 : true;

      setIsVisible(pastHero && beforeFooter && notAtPricing);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPricing = () => {
    const pricing = document.getElementById('pricing');
    if (pricing) {
      pricing.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-6 left-0 right-0 z-[60] px-6 pointer-events-none flex justify-center"
        >
          <button
            onClick={scrollToPricing}
            className="pointer-events-auto bg-indigo-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl shadow-indigo-500/40 flex items-center gap-3 hover:bg-indigo-500 transition-all group active:scale-95"
          >
            Get Instant Access Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
