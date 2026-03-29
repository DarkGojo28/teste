import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Star, ShieldCheck, Zap, Moon, Brain, Clock } from 'lucide-react';

export const Hero = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-br from-night-blue via-[#1E1B4B] to-[#431407]/20">
      {/* Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-soft-purple/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-gold/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-soft-purple/10 border border-soft-purple/20 text-soft-purple text-xs font-bold tracking-widest uppercase mb-8">
              <Sparkles className="w-3 h-3" />
              Mais de 50.000 Noites Transformadas
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-6 text-white">
              Recupere Suas Noites, <br />
              <span className="text-gold">Transforme</span> Sua Vida.
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl leading-relaxed">
              Pare de lutar contra o travesseiro. Descubra o método científico para adormecer em minutos e acordar verdadeiramente renovado.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToPricing}
                className="bg-conversion text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-400 transition-all flex items-center justify-center gap-2 glow-green group shadow-xl"
              >
                QUERO DORMIR MELHOR HOJE
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="glass text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                Ver Capítulo Grátis
              </button>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200&h=200" 
                  alt="Dra. Elara Vance" 
                  className="w-16 h-16 rounded-full border-2 border-gold object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-2 -right-2 bg-gold text-night-blue text-[8px] font-black px-2 py-1 rounded-full uppercase tracking-tighter shadow-lg">
                  Especialista CBT-I
                </div>
              </div>
              <div>
                <div className="flex text-gold mb-0.5">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-sm text-slate-400">
                  <span className="text-white font-bold">4.9/5</span> baseado em 2.400+ alunos
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            {/* 3D Mockup Placeholder */}
            <div className="relative z-10 aspect-[4/5] max-w-md mx-auto perspective-1000">
              <motion.div 
                animate={{ rotateY: [-5, 5, -5], rotateX: [2, -2, 2] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative h-full w-full bg-gradient-to-br from-[#1E293B] to-night-blue rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl flex flex-col items-center justify-center p-8 text-center"
              >
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511295742364-917e703b1972?auto=format&fit=crop&q=80&w=800')] opacity-20 bg-cover bg-center" />
                <div className="relative z-20">
                  <Moon className="w-20 h-20 text-gold mb-6 mx-auto drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]" />
                  <h2 className="text-5xl font-display font-black mb-2 tracking-tighter text-white">SOMNIA</h2>
                  <p className="text-gold font-bold tracking-[0.3em] uppercase text-[10px] mb-8">A Ciência do Sono</p>
                  <div className="h-1 w-12 bg-gold/30 mx-auto mb-8 rounded-full" />
                  <p className="text-slate-300 text-sm italic leading-relaxed">"O guia definitivo para encerrar o ciclo de exaustão."</p>
                </div>
                <div className="absolute bottom-8 left-0 right-0 text-[10px] text-slate-500 font-bold tracking-widest uppercase">DRA. ELARA VANCE</div>
              </motion.div>
            </div>
            
            {/* Floating Icons */}
            <motion.div 
              animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 right-10 w-16 h-16 glass rounded-2xl flex items-center justify-center shadow-xl z-20"
            >
              <Brain className="text-soft-purple w-8 h-8" />
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/2 -left-10 w-14 h-14 glass rounded-2xl flex items-center justify-center shadow-xl z-20"
            >
              <Clock className="text-gold w-7 h-7" />
            </motion.div>

            <motion.div 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-5 right-20 w-12 h-12 glass rounded-full flex items-center justify-center shadow-xl z-20"
            >
              <Moon className="text-white w-6 h-6" />
            </motion.div>
          </motion.div>
        </div>

        {/* Static Trust Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 pt-12 border-t border-white/5 flex flex-wrap justify-center gap-8 md:gap-16 opacity-60"
        >
          <div className="flex items-center gap-3">
            <ShieldCheck className="text-conversion w-5 h-5" />
            <span className="text-xs font-bold tracking-widest uppercase">Resultados Comprovados</span>
          </div>
          <div className="flex items-center gap-3">
            <Zap className="text-gold w-5 h-5" />
            <span className="text-xs font-bold tracking-widest uppercase">Acesso Imediato</span>
          </div>
          <div className="flex items-center gap-3">
            <Star className="text-white w-5 h-5" />
            <span className="text-xs font-bold tracking-widest uppercase">Método 100% Natural</span>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-night-blue to-transparent" />
    </section>
  );
};
