import { motion } from 'motion/react';
import { Clock, Battery, Brain, Sparkles } from 'lucide-react';

export const CuriositySection = () => {
  const curiosities = [
    {
      icon: <Brain className="w-10 h-10 text-soft-purple" />,
      title: "O Interruptor do Sono",
      desc: "Existe um hormônio que, quando desregulado, mantém você acordado mesmo morto de cansaço. O protocolo de 3 dias para resetá-lo."
    },
    {
      icon: <Clock className="w-10 h-10 text-conversion" />,
      title: "A Respiração de 60 Segundos",
      desc: "Uma técnica usada por atletas de elite para 'desligar' a mente e forçar o corpo a entrar em estado de repouso imediato."
    },
    {
      icon: <Battery className="w-10 h-10 text-gold" />,
      title: "Nutrientes das 3h da Manhã",
      desc: "Os 3 nutrientes que seu corpo pede quando você acorda no meio da noite (e como repor sem tomar 10 comprimidos)."
    }
  ];

  return (
    <section id="curiosity" className="py-24 relative overflow-hidden bg-night-blue">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-bold tracking-widest uppercase mb-4"
          >
            <Sparkles className="w-3 h-3" />
            O QUE VOCÊ VAI DESCOBRIR
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Muito Além de Simples Dicas</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Você não vai apenas ler sobre o sono. Você vai ter acesso a revelações que a indústria farmacêutica prefere manter em segredo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {curiosities.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -10 }}
              className="glass p-10 rounded-[2.5rem] flex flex-col items-center text-center group transition-all hover:border-gold/30"
            >
              <div className="w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                {b.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{b.title}</h3>
              <p className="text-slate-400 leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 glass p-8 md:p-12 rounded-[3rem] border-gold/10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">O Erro #3 que 90% cometem</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                A maioria das pessoas tenta resolver a insônia focando no que fazer <strong>antes</strong> de deitar. Mas o segredo para uma noite perfeita começa 12 horas antes.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                  O suplemento que quase ninguém menciona — e que faz mais diferença que a melatonina
                </li>
                <li className="flex items-center gap-3 text-slate-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                  Por que chás comuns podem estar PIORANDO sua situação
                </li>
                <li className="flex items-center gap-3 text-slate-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                  O ritual de 5 minutos que "limpa" o estresse do dia
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1445510861639-5651173bc5d5?auto=format&fit=crop&q=80&w=800" 
                  alt="Mistério e Sono" 
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl border-gold/20">
                <p className="text-gold font-bold text-xl">Revelação Exclusiva</p>
                <p className="text-xs text-slate-400 uppercase tracking-widest">Módulo 5 do Ebook</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
