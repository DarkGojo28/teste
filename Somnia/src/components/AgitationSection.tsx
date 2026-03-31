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
    <section className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
            O sono ruim não fica dentro do quarto
          </h2>
          <div className="w-20 h-1.5 bg-soft-purple mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {points.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100"
            >
              <div className="shrink-0">{point.icon}</div>
              <p className="text-lg font-medium text-slate-700">{point.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
