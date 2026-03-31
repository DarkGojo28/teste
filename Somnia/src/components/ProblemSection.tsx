import { motion } from 'motion/react';
import { X } from 'lucide-react';

export const ProblemSection = () => {
  const problems = [
    "A frustração de ver o relógio marcar 3:15 da manhã e saber que o dia seguinte será um pesadelo.",
    "O cansaço que não passa, mesmo quando você consegue 'dormir' por algumas horas.",
    "A sensação de que sua mente liga um motor barulhento assim que você encosta a cabeça no travesseiro.",
    "O medo constante de que sua saúde e produtividade estejam escorrendo pelo ralo."
  ];

  return (
    <section id="about" className="py-24 bg-[#080A0F]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Eu sei exatamente como é...</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Você já tentou de tudo: chás, meditação, desligar as telas, até remédios pesados que te deixam "grogue" no dia seguinte. 
            A verdade é que a insônia não é apenas sobre estar cansado. É sobre as horas roubadas, as oportunidades perdidas e o peso de se sentir um fantasma na própria vida.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {problems.map((p, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: i * 0.1,
                  ease: [0.21, 0.47, 0.32, 0.98] 
                }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-gold/30 transition-all"
              >
                <div className="mt-1 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                  <X className="text-red-400 w-4 h-4" />
                </div>
                <p className="text-lg text-slate-300">{p}</p>
              </motion.div>
            ))}
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1511295742364-917e703b1972?auto=format&fit=crop&q=80&w=800" 
              alt="Pessoa exausta tentando dormir" 
              width={600}
              height={450}
              className="rounded-3xl shadow-2xl grayscale opacity-60"
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080A0F] via-transparent to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="glass p-8 rounded-3xl max-w-xs text-center border-gold/20">
                <p className="text-4xl font-bold text-gold mb-2">90%</p>
                <p className="text-sm text-slate-400">das pessoas que sofrem de insônia cometem um erro fatal que impede o cérebro de desligar.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
