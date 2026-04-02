import { motion } from 'motion/react';
import { X } from 'lucide-react';

export const ProblemSection = () => {
  const problems = [
    { icon: "🌙", title: "Insonia Crônica", desc: "A frustração de ver o relógio marcar 3:15 da manhã e saber que o dia seguinte será um pesadelo." },
    { icon: "⏰", title: "Despertar Precoce", desc: "O cansaço que não passa, mesmo quando você consegue 'dormir' por algumas horas." },
    { icon: "😶", title: "Névoa Mental", desc: "A sensação de que sua mente liga um motor barulhento assim que você encosta a cabeça no travesseiro." },
    { icon: "☕", title: "Dependência de Cafeína", desc: "O medo constante de que sua saúde e produtividade estejam escorrendo pelo ralo." },
    { icon: "😤", title: "Irritabilidade", desc: "Pequenos problemas se tornam grandes explosões de estresse por falta de descanso." },
    { icon: "🔄", title: "Ciclo Vicioso", desc: "Tentar de tudo e falhar, sentindo que o sono profundo é um privilégio que você perdeu." }
  ];

  return (
    <section id="about" className="py-24 bg-[#080A0F]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white">Eu sei exatamente como é...</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Você já tentou de tudo: chás, meditação, desligar as telas, até remédios pesados que te deixam "grogue" no dia seguinte. 
            A verdade é que a insônia não é apenas sobre estar cansado. É sobre as horas roubadas, as oportunidades perdidas e o peso de se sentir um fantasma na própria vida.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
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
              className="flex flex-col items-center text-center p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-gold/30 transition-all group"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{p.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{p.title}</h3>
              <p className="text-slate-400 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
