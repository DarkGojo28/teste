import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Star, ShieldCheck, Zap, Moon } from 'lucide-react';

export const Hero = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Elements - Reduced blur for performance */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[80px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[80px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold tracking-widest uppercase mb-6">
              <Sparkles className="w-3 h-3" />
              Over 50,000+ Rested Souls
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-[1.1] mb-6 text-gradient">
              Reclaim Your Night, <br />
              <span className="italic text-indigo-400">Transform</span> Your Life.
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-xl leading-relaxed">
              Stop fighting the pillow. Discover the science-backed blueprint to falling asleep in minutes and waking up truly refreshed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToPricing}
                className="bg-indigo-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-indigo-500 transition-all flex items-center justify-center gap-2 glow-blue group"
              >
                Download the Ebook
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="glass text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                View Sample Chapter
              </button>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://picsum.photos/seed/user${i}/80/80`} 
                    alt="User" 
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full border-2 border-[#05070A]"
                    referrerPolicy="no-referrer"
                    decoding="async"
                  />
                ))}
              </div>
              <div className="text-sm">
                <div className="flex text-amber-400 mb-0.5">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-slate-500">4.9/5 from 2,400+ reviews</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 aspect-[3/4] max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-3xl blur-2xl opacity-20 animate-pulse" />
              <div className="relative h-full w-full bg-[#1A1D23] rounded-3xl border border-white/10 overflow-hidden shadow-2xl flex flex-col items-center justify-center p-12 text-center group">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
                <Moon className="w-24 h-24 text-indigo-400 mb-8" />
                <h2 className="text-4xl font-serif font-bold mb-4">SOMNIA</h2>
                <p className="text-indigo-300 font-medium tracking-[0.2em] uppercase text-xs mb-8">The Science of Sleep</p>
                <div className="h-px w-24 bg-white/20 mb-8" />
                <p className="text-slate-400 italic">"The definitive guide to ending the cycle of exhaustion."</p>
                <div className="absolute bottom-8 left-0 right-0 text-xs text-slate-500 font-mono">BY DR. ELARA VANCE</div>
              </div>
            </div>
            
          </motion.div>
        </div>

        {/* Static Trust Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 pt-10 border-t border-white/5 flex flex-wrap justify-center gap-8 md:gap-16 opacity-50"
        >
          <div className="flex items-center gap-3">
            <ShieldCheck className="text-green-400 w-5 h-5" />
            <span className="text-sm font-medium tracking-wide uppercase">Verified Results • 100% Natural</span>
          </div>
          <div className="flex items-center gap-3">
            <Zap className="text-amber-400 w-5 h-5" />
            <span className="text-sm font-medium tracking-wide uppercase">Instant Access • Digital Download</span>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#05070A] to-transparent" />
    </section>
  );
};
