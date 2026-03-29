import { motion } from 'motion/react';
import { Award, BookOpen, Microscope, GraduationCap } from 'lucide-react';

export const Author = () => {
  const badges = [
    { icon: <GraduationCap className="w-5 h-5" />, text: "PhD em Neurociência" },
    { icon: <Microscope className="w-5 h-5" />, text: "10+ Anos de Pesquisa" },
    { icon: <Award className="w-5 h-5" />, text: "Método CBT-I Certificado" }
  ];

  return (
    <section id="author" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden border-2 border-gold/20 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800&h=1000" 
                alt="Dra. Elara Vance" 
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night-blue via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 glass p-6 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-1">Dra. Elara Vance</h3>
                <p className="text-gold text-sm font-bold uppercase tracking-widest">Fundadora do Somnia Sleep Labs</p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-soft-purple/20 blur-[80px] rounded-full" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gold/10 blur-[80px] rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Conheça a mente por trás do método</h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              A Dra. Elara Vance dedicou a última década a entender os mecanismos biológicos do sono. Após anos de pesquisa clínica em Harvard, ela desenvolveu o protocolo Somnia para ajudar pessoas a recuperarem sua saúde mental através do descanso profundo.
            </p>

            <div className="grid sm:grid-cols-1 gap-4 mb-10">
              {badges.map((b, i) => (
                <div key={i} className="flex items-center gap-4 glass p-4 rounded-2xl border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                    {b.icon}
                  </div>
                  <span className="font-bold text-white tracking-wide">{b.text}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all">
              <BookOpen className="w-12 h-12" />
              <div className="h-8 w-px bg-white/20" />
              <span className="text-sm font-bold uppercase tracking-widest">Publicada em Nature & Science</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
