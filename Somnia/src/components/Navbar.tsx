import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Moon, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center glow-blue">
            <Moon className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">SOMNIA</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <a href="#about" className="hover:text-white transition-colors">The Problem</a>
          <a href="#features" className="hover:text-white transition-colors">What's Inside</a>
          <a href="#testimonials" className="hover:text-white transition-colors">Success Stories</a>
          <button 
            onClick={scrollToPricing}
            className="bg-white text-black px-5 py-2.5 rounded-full hover:bg-indigo-50 transition-all font-semibold"
          >
            Get the Ebook
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass border-t border-white/10 p-6 flex flex-col gap-4 md:hidden"
          >
            <a href="#about" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>The Problem</a>
            <a href="#features" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>What's Inside</a>
            <a href="#testimonials" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Success Stories</a>
            <button 
              onClick={scrollToPricing}
              className="bg-white text-black px-5 py-3 rounded-xl font-bold w-full"
            >
              Get the Ebook
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
