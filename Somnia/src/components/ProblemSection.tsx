import { motion } from 'motion/react';
import { X } from 'lucide-react';

export const ProblemSection = () => {
  const problems = [
    "Tossing and turning for hours before finally drifting off.",
    "Waking up at 3 AM with a racing mind that won't shut down.",
    "Relying on caffeine just to survive your morning meetings.",
    "Feeling like a ghost in your own life due to chronic fog."
  ];

  return (
    <section id="about" className="py-24 bg-[#080A0F]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Does this sound familiar?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Insomnia isn't just about being tired. It's about the stolen hours, the missed opportunities, and the toll it takes on your health.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {problems.map((p, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: i * 0.1,
                  ease: [0.21, 0.47, 0.32, 0.98] 
                }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 transition-all"
              >
                <div className="mt-1 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                  <X className="text-red-400 w-4 h-4" />
                </div>
                <p className="text-lg text-slate-300">{p}</p>
              </motion.div>
            ))}
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <img 
              src="https://picsum.photos/seed/tired/600/450" 
              alt="Tired person" 
              width={600}
              height={450}
              className="rounded-3xl shadow-2xl grayscale opacity-50"
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080A0F] via-transparent to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="glass p-8 rounded-3xl max-w-xs text-center">
                <p className="text-4xl font-bold text-indigo-400 mb-2">35%</p>
                <p className="text-sm text-slate-400">of adults report getting less than 7 hours of sleep per night.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
