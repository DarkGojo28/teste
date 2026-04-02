import { motion } from 'motion/react';
import { BookOpen, Globe, Users, CheckCircle } from 'lucide-react';

export const Author = () => {
  const badges = [
    { icon: <BookOpen className="w-5 h-5" />, text: "Fundamentado em evidências" },
    { icon: <Globe className="w-5 h-5" />, text: "Realidade brasileira" },
    { icon: <Users className="w-5 h-5" />, text: "Testado em 200+ pessoas" }
  ];

  return (
    <section id="author" className="py-24 relative overflow-hidden bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative z-10 w-64 h-64 md:w-96 md:h-96 rounded-[3rem] bg-slate-950 flex items-center justify-center border-4 border-gold/30 shadow-[0_0_50px_rgba(245,158,11,0.1)]">
              <CheckCircle className="w-32 h-32 text-gold opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-gold font-display font-bold text-4xl opacity-40">SOMNIA</span>
              </div>
            </div>
            
            {/* Badge Overlay */}
            <div className="absolute -bottom-4 bg-gold text-slate-900 font-black px-8 py-3 rounded-full uppercase tracking-widest text-xs shadow-xl z-20">
              O autor — Somnia
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
            <span className="text-soft-purple font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Escrito por quem viveu o problema</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-white">O autor — Somnia</h2>
            <div className="text-slate-400 text-lg leading-relaxed mb-10 space-y-6">
              <p>
                <strong>Escrito por quem viveu o problema — não por quem só estudou o assunto.</strong>
              </p>
              <p>
                Fiquei grisalho antes dos 25 anos por causa da insônia crônica. Tentei todos os remédios controlados, chás "milagrosos" e técnicas de higiene do sono que você possa imaginar. Nada funcionava a longo prazo.
              </p>
              <p>
                Foi quando decidi investigar o que a medicina tradicional estava ignorando. O resultado foi a descoberta de um padrão que regula o sono profundo — e que se tornou a base do que você vai encontrar no Somnia.
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
