import { motion } from 'motion/react';
import { Moon } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="footer" className="py-12 border-t border-white/5">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8"
      >
        <div className="flex items-center gap-2">
          <Moon className="text-indigo-500 w-5 h-5" />
          <span className="font-bold tracking-tight">SOMNIA</span>
        </div>
        
        <div className="flex gap-8 text-sm text-slate-500">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Contact Support</a>
        </div>
        
        <p className="text-sm text-slate-600">
          © {new Date().getFullYear()} Somnia Sleep Labs. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
};
