import { motion } from 'motion/react';
import { Zap, ShieldCheck } from 'lucide-react';

export const FinalCTA = () => {
  const scrollToOffer = () => {
    const element = document.getElementById('offer');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-soft-purple/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-night-blue to-[#1E1B4B] rounded-[4rem] p-12 md:p-24 text-center border-2 border-gold/20 shadow-[0_0_100px_rgba(242,125,38,0.1)]"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block mb-8"
          >
            <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center text-gold mx-auto mb-6">
              <Zap className="w-10 h-10 fill-current" />
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-7xl font-display font-black text-white mb-8 tracking-tighter leading-none">
            Imagine acordar amanhã <br />
            <span className="text-gold">com energia total.</span>
          </h2>
          
          <p className="text-slate-400 text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed">
            Não deixe sua vida passar em um nevoeiro de cansaço. Recupere sua clareza mental e sua vitalidade com o protocolo Somnia.
          </p>

          <div className="flex flex-col items-center gap-6">
            <button 
              onClick={scrollToOffer}
              className="bg-conversion hover:bg-conversion/90 text-white font-black py-8 px-16 rounded-3xl text-2xl shadow-2xl shadow-conversion/30 transition-all hover:scale-[1.05] active:scale-95 flex items-center gap-4 group"
            >
              QUERO DORMIR A NOITE TODA
              <Zap className="w-8 h-8 fill-current group-hover:animate-pulse" />
            </button>
            
            <div className="flex items-center gap-3 text-gold/60 text-sm font-bold uppercase tracking-widest">
              <ShieldCheck className="w-5 h-5" />
              Garantia de 7 dias ou seu dinheiro de volta
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
