import { motion } from 'motion/react';
import { CheckCircle2, ShieldCheck, CreditCard, Lock, Zap, Moon } from 'lucide-react';

export const Offer = () => {
  const bonuses = [
    { title: "BÔNUS #1: O Guia dos Chás Certos", value: "R$ 97,00", desc: "10 receitas com modo de preparo, horário ideal e os erros comuns que cortam o efeito." },
    { title: "BÔNUS #2: Checklist da Noite Perfeita", value: "R$ 47,00", desc: "Um guia prático para você imprimir e usar toda noite, garantindo que nada seja esquecido." }
  ];

  return (
    <section id="offer" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold font-bold uppercase tracking-widest text-sm">Oferta Exclusiva</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold mt-4 mb-6">Recupere suas noites (e sua vida) hoje</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Imagine acordar amanhã sentindo-se renovado, com energia total e sem aquele "nevoeiro mental" que te persegue.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Bonuses Column */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Zap className="text-gold w-6 h-6" /> O que você vai receber:
            </h3>
            
            <div className="glass p-6 rounded-3xl border-gold/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 bg-gold text-night-blue font-black px-4 py-1 rounded-bl-2xl text-xs uppercase">Principal</div>
              <div className="flex gap-6 items-center">
                <div className="w-24 h-32 rounded-xl bg-slate-800 flex items-center justify-center text-gold shrink-0 overflow-hidden relative border border-white/10">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511295742364-917e703b1972?auto=format&fit=crop&q=80&w=400')] opacity-30 bg-cover bg-center" />
                  <Moon className="w-10 h-10 relative z-10" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Ebook Somnia: A Ciência do Sono</h4>
                  <p className="text-slate-400 text-sm">O guia definitivo para encerrar o ciclo de exaustão e dominar a arte de dormir profundamente.</p>
                </div>
              </div>
            </div>

            {bonuses.map((b, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-3xl border-white/5 flex gap-6 items-start hover:border-gold/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold shrink-0">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="text-lg font-bold text-white">{b.title}</h4>
                    <span className="text-gold font-mono text-xs line-through opacity-50">{b.value}</span>
                  </div>
                  <p className="text-slate-400 text-sm">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pricing Card */}
          <div className="lg:col-span-5 sticky top-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[3rem] p-10 text-night-blue shadow-[0_0_50px_rgba(242,125,38,0.2)] border-4 border-conversion/20"
            >
              <div className="text-center mb-8">
                <span className="text-slate-500 text-sm font-bold uppercase tracking-widest line-through">De R$ 67,00</span>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <span className="text-2xl font-bold">Por apenas</span>
                  <span className="text-6xl font-black text-conversion tracking-tighter">R$ 37</span>
                </div>
                <p className="text-slate-400 text-xs mt-2 font-bold uppercase tracking-widest">Pagamento único · Acesso imediato · Ebook + 2 bônus</p>
              </div>

              <button className="w-full bg-conversion hover:bg-conversion/90 text-white font-black py-6 rounded-2xl text-xl shadow-xl shadow-conversion/20 transition-all hover:scale-[1.02] active:scale-95 mb-8 flex items-center justify-center gap-3">
                Quero começar hoje à noite →
              </button>

              <div className="space-y-4 border-t border-slate-100 pt-8">
                <div className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                  <ShieldCheck className="w-5 h-5 text-conversion" />
                  <span>Garantia incondicional de 7 dias</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                  <Lock className="w-5 h-5 text-conversion" />
                  <span>Pagamento 100% seguro e criptografado</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                  <CreditCard className="w-5 h-5 text-conversion" />
                  <span>Acesso imediato após a confirmação</span>
                </div>
              </div>

              <div className="mt-8 flex flex-col items-center gap-4">
                <div className="flex justify-center gap-4 opacity-40 grayscale hover:grayscale-0 transition-all">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-5" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/31/Apple_Pay_logo.svg" alt="Apple Pay" className="h-5" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg" alt="Google Pay" className="h-5" />
                </div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest flex items-center gap-2">
                  <Lock className="w-3 h-3" /> Compra 100% Segura • Dados Criptografados
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
