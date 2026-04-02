import { motion } from 'motion/react';
import { XCircle, Coffee, Briefcase, AlertCircle } from 'lucide-react';

export const AgitationSection = () => {
  const points = [
    { icon: <XCircle className="w-6 h-6 text-red-500" />, text: "Perde paciência sem motivo" },
    { icon: <Briefcase className="w-6 h-6 text-blue-500" />, text: "Seu trabalho está sofrendo" },
    { icon: <Coffee className="w-6 h-6 text-amber-600" />, text: "O café virou combustível obrigatório" },
    { icon: <AlertCircle className="w-6 h-6 text-orange-500" />, text: "Você está cansado de estar cansado" }
  ];

  return (
    <section className="py-24 bg-soft-purple/5">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            O custo invisível de uma noite mal dormida
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            O sono ruim não fica apenas dentro do quarto. Ele transborda para todas as áreas da sua vida, cobrando um preço alto demais.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {points.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-6 p-8 bg-white rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="shrink-0 w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center">{point.icon}</div>
              <div>
                <p className="text-xl font-bold text-slate-800 mb-2">{point.text}</p>
                <p className="text-slate-500 text-sm leading-relaxed">Impacto direto na sua qualidade de vida e longevidade.</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
