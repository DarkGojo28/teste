import { motion } from 'motion/react';
import { ShieldCheck, CreditCard, Lock, Zap, ArrowRight } from 'lucide-react';

export const PricingSection = () => {
  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-[3rem] p-10 md:p-20 text-center shadow-2xl relative overflow-hidden border border-white/10"
        >
          {/* Background Glow */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-soft-purple/20 to-gold/10 pointer-events-none" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/20 border border-gold/30 text-gold text-xs font-bold tracking-widest uppercase mb-8">
              <Zap className="w-3 h-3 fill-current" />
              Preço promocional por tempo limitado
            </div>

            <div className="mb-10">
              <span className="text-slate-500 text-xl font-bold uppercase tracking-widest line-through mb-2 block">De R$ 67,00</span>
              <div className="flex items-center justify-center gap-3">
                <span className="text-3xl font-bold text-white">Por apenas</span>
                <span className="text-7xl md:text-8xl font-black text-gold tracking-tighter">R$ 37</span>
              </div>
              <p className="text-slate-400 text-sm mt-4 font-bold uppercase tracking-widest">Pagamento único · Acesso imediato</p>
            </div>

            <button 
              onClick={scrollToOffer}
              className="w-full bg-gold hover:bg-amber-400 text-slate-900 font-black py-8 rounded-3xl text-2xl shadow-[0_4px_14px_rgba(245,158,11,0.4)] transition-all hover:translate-y-[-2px] active:scale-95 mb-10 flex items-center justify-center gap-4 group"
            >
              Quero começar hoje à noite →
            </button>

            <div className="flex flex-wrap items-center justify-center gap-8 py-6 border-y border-white/10 mb-12">
              <div className="flex items-center gap-2 text-slate-300 text-xs font-bold uppercase tracking-widest">
                <Lock className="w-4 h-4 text-gold" />
                🔒 Compra Segura
              </div>
              <div className="flex items-center gap-2 text-slate-300 text-xs font-bold uppercase tracking-widest">
                <CreditCard className="w-4 h-4 text-gold" />
                💳 Pix
              </div>
              <div className="flex items-center gap-2 text-slate-300 text-xs font-bold uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4 text-gold" />
                🛡️ Acesso Imediato
              </div>
            </div>

            <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
              <div className="flex items-center justify-center gap-4 mb-4">
                <ShieldCheck className="w-10 h-10 text-gold" />
                <h4 className="text-2xl font-bold text-white">Garantia Incondicional</h4>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Se você aplicar o que está no guia e não perceber nenhuma diferença, devolvemos 100% do valor — sem burocracia e sem pergunta.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
