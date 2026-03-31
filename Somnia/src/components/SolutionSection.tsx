import { motion } from 'motion/react';
import { Search, Key, Moon, Utensils, Pill, ClipboardList, Sparkles } from 'lucide-react';

export const SolutionSection = () => {
  const cards = [
    { icon: <Search className="w-10 h-10 text-soft-purple" />, title: "Diagnóstico do seu perfil", desc: "Entenda exatamente qual o seu tipo de insônia para atacar a causa raiz." },
    { icon: <Key className="w-10 h-10 text-gold" />, title: "O gatilho que você não vê", desc: "Identifique os sabotadores ocultos que impedem seu cérebro de desligar." },
    { icon: <Moon className="w-10 h-10 text-blue-500" />, title: "O ambiente certo para dormir", desc: "Transforme seu quarto em um santuário de descanso profundo." },
    { icon: <Utensils className="w-10 h-10 text-conversion" />, title: "O nutriente que 'desliga' o cérebro", desc: "Ajuste sua alimentação para favorecer o hormônio do sono profundo." },
    { icon: <Pill className="w-10 h-10 text-red-400" />, title: "O suplemento esquecido", desc: "Saiba o que realmente funciona e o que é desperdício de dinheiro." },
    { icon: <ClipboardList className="w-10 h-10 text-slate-600" />, title: "O protocolo do dia ideal", desc: "Um passo a passo do despertar ao deitar para garantir o sono." }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-soft-purple/10 border border-soft-purple/20 text-soft-purple text-xs font-bold tracking-widest uppercase mb-4"
          >
            <Sparkles className="w-3 h-3" />
            O QUE MUDA COM SOMNIA
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Um guia que começa pelo seu diagnóstico — não por dicas genéricas
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            E ainda: o hábito 'saudável' que provavelmente está sabotando sua noite.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 flex flex-col items-center text-center group hover:bg-white hover:shadow-xl hover:border-soft-purple/20 transition-all"
            >
              <div className="w-20 h-20 rounded-3xl bg-white flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{card.title}</h3>
              <p className="text-slate-500 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
