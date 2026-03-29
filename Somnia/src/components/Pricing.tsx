import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            duration: 1, 
            ease: [0.21, 0.47, 0.32, 0.98] 
          }}
          className="glass p-12 rounded-[40px] relative overflow-hidden glow-purple"
        >
          <div className="absolute top-0 right-0 p-4">
            <div className="bg-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              Limited Time Offer
            </div>
          </div>
          
          <h2 className="text-4xl font-serif font-bold mb-6">Ready for your best sleep?</h2>
          <p className="text-slate-400 mb-10">Get the complete Somnia ebook + 3 bonus sleep meditations for a fraction of the cost of a single therapy session.</p>
          
          <div className="flex items-center justify-center gap-4 mb-10">
            <span className="text-slate-500 line-through text-2xl">$49</span>
            <span className="text-6xl font-bold text-white">$19</span>
          </div>

          <button className="w-full bg-white text-black py-5 rounded-2xl font-bold text-xl hover:bg-indigo-50 transition-all mb-6">
            Get Instant Access Now
          </button>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              Lifetime Access
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              30-Day Guarantee
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              PDF & ePub Formats
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
