import { motion } from 'motion/react';
import { Clock, Battery, Brain, Sparkles } from 'lucide-react';

export const Benefits = () => {
  const benefits = [
    {
      icon: <Clock className="w-10 h-10 text-soft-purple" />,
      title: "Adormeça em Minutos",
      desc: "Técnicas de relaxamento profundo que desligam o ruído mental e preparam seu corpo para o sono imediato."
    },
    {
      icon: <Battery className="w-10 h-10 text-conversion" />,
      title: "Acorde com Energia",
      desc: "Otimize seus ciclos de sono para despertar sentindo-se renovado, sem a necessidade de cafeína excessiva."
    },
    {
      icon: <Brain className="w-10 h-10 text-gold" />,
      title: "Reduza a Ansiedade",
      desc: "Métodos comprovados para acalmar o sistema nervoso e eliminar a preocupação que te mantém acordado."
    }
  ];

  return (
    <section id="benefits" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-soft-purple/10 border border-soft-purple/20 text-soft-purple text-xs font-bold tracking-widest uppercase mb-4"
          >
            <Sparkles className="w-3 h-3" />
            Benefícios Exclusivos
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Por que escolher o Somnia?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Não é apenas um livro, é um sistema completo baseado em neurociência para transformar sua relação com o sono.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -10 }}
              className="glass p-10 rounded-[2.5rem] flex flex-col items-center text-center group transition-all hover:border-soft-purple/30"
            >
              <div className="w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                {b.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{b.title}</h3>
              <p className="text-slate-400 leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
