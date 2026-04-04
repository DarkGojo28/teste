import { motion } from 'motion/react';
import { BookOpen, Globe, Users, Microscope, Sparkles } from 'lucide-react';

export const OriginSection = () => {
  const badges = [
    { icon: <BookOpen className="w-5 h-5" />, text: "Fundamentado em evidências" },
    { icon: <Globe className="w-5 h-5" />, text: "Adaptado para o Brasil" },
    { icon: <Users className="w-5 h-5" />, text: "Testado em campo (200+ pessoas)" }
  ];

  return (
    <section id="origin" className="py-24 relative overflow-hidden bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative z-10 w-64 h-64 md:w-96 md:h-96 rounded-[3rem] bg-slate-950 flex items-center justify-center border-4 border-gold/30 shadow-[0_0_50px_rgba(245,158,11,0.1)]">
              <Microscope className="w-32 h-32 text-gold opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-gold font-display font-bold text-4xl opacity-40 uppercase tracking-widest">Somnia</span>
              </div>
            </div>
            
            {/* Badge Overlay */}
            <div className="absolute -bottom-4 bg-gold text-slate-900 font-black px-8 py-3 rounded-full uppercase tracking-widest text-xs shadow-xl z-20">
              Protocolo Validado
            </div>

            {/* Decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-soft-purple/5 blur-[100px] rounded-full -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-soft-purple/10 border border-soft-purple/20 text-soft-purple text-xs font-bold tracking-widest uppercase mb-6">
              <Sparkles className="w-3 h-3" />
              Não é teoria. É o que funcionou depois de tudo falhar.
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-white">A origem desta descoberta</h2>
            <div className="text-slate-400 text-lg leading-relaxed mb-10 space-y-6">
              <p>
                Esta metodologia nasceu de uma situação extrema: alguém que ficou <strong>grisalho antes dos 25 anos</strong> por causa de insônia crônica. Se alimentava bem, fazia exercício todo dia, não bebia, não fumava — e mesmo assim acordava destruído, vivia com ataques de ansiedade e dependia de calmante para dormir.
              </p>
              <p>
                Ninguém sabia dizer o porquê. Até que a única saída foi investigar por conta própria.
              </p>
              <p>
                Foram anos testando, errando e descartando o que não funcionava. O padrão que surgiu foi claro: soluções genéricas falham porque ignoram o gatilho específico de cada pessoa.
              </p>
              <p>
                Quando os gatilhos certos foram identificados e corrigidos — na hora certa, para o perfil certo — tudo mudou. Não foi com o suplemento mais caro nem com a dieta mais radical. Foi com ajustes específicos, baseados em como o corpo realmente funciona.
              </p>
              <p>
                O Somnia é o atalho que não existia. Tudo que foi descoberto na prática, condensado em um protocolo que começa pelo diagnóstico do seu perfil — e só depois entrega a solução exata para o seu caso.
              </p>
            </div>

            <div className="grid gap-4 mb-12">
              {badges.map((b, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/5 p-5 rounded-2xl border border-white/10 shadow-sm hover:border-gold/40 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                    {b.icon}
                  </div>
                  <span className="font-bold text-slate-300 tracking-wide text-sm md:text-base">{b.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
