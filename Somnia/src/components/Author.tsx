import { motion } from 'motion/react';
import { Award, BookOpen, Microscope, GraduationCap } from 'lucide-react';

export const Author = () => {
  const badges = [
    { icon: <GraduationCap className="w-5 h-5" />, text: "PhD em Neurociência" },
    { icon: <Microscope className="w-5 h-5" />, text: "10+ Anos de Pesquisa" },
    { icon: <Award className="w-5 h-5" />, text: "CBT-I Certificado" }
  ];

  return (
    <section id="author" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative z-10 w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-gold/30 shadow-[0_0_50px_rgba(245,158,11,0.2)]">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800&h=800" 
                alt="Dra. Elara Vance" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Badge Overlay */}
            <div className="absolute -bottom-4 bg-gold text-night-blue font-black px-6 py-2 rounded-full uppercase tracking-widest text-xs shadow-xl z-20">
              Especialista em CBT-I
            </div>

            {/* Decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-soft-purple/10 blur-[100px] rounded-full -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <span className="text-gold font-bold uppercase tracking-[0.3em] text-xs mb-4 block">A Mente por Trás do Método</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-white">Eu também já estive no seu lugar...</h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-10">
              A Dra. Elara Vance não é apenas uma PhD em Neurociência. Ela foi uma vítima da insônia crônica por 7 anos. 
              Após tentar todos os remédios e técnicas convencionais sem sucesso, ela decidiu usar sua base científica para investigar o que a medicina tradicional estava ignorando. 
              O resultado foi a descoberta de um "padrão oculto" que regula o sono profundo — e que se tornou a base do protocolo Somnia.
            </p>

            <div className="grid sm:grid-cols-1 gap-4 mb-12">
              {badges.map((b, i) => (
                <div key={i} className="flex items-center gap-4 glass p-5 rounded-2xl border-white/5 hover:border-gold/20 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                    {b.icon}
                  </div>
                  <span className="font-bold text-white tracking-wide text-sm md:text-base">{b.text}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-8 opacity-40 grayscale hover:grayscale-0 transition-all">
              <BookOpen className="w-10 h-10 text-white" />
              <div className="h-8 w-px bg-white/20" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">Publicada em Nature & Science</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
