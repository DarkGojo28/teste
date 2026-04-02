import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export const BenefitsSection = () => {
  const benefits = [
    "Entender por que o seu sono falha",
    "Dormir do início ao fim sem acordar no meio",
    "Levantar com disposição, não no limite",
    "Desligar a cabeça mais rápido ao deitar",
    "Ter energia ao longo do dia sem depender de café",
    "Ter paciência e foco de volta"
  ];

  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            O que você vai conquistar
          </h2>
          <p className="text-slate-400 text-lg">
            A transformação que você sente no corpo e na mente quando o sono volta a ser seu aliado.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 p-6 bg-white/5 rounded-2xl shadow-sm border border-white/10"
            >
              <CheckCircle2 className="w-6 h-6 text-gold shrink-0" />
              <p className="text-lg font-medium text-slate-300">{benefit}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
