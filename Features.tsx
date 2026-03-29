import { motion } from 'motion/react';
import { Clock, CloudMoon, BookOpen, Sparkles, ChevronDown } from 'lucide-react';

export const Features = () => {
  const features = [
    {
      icon: <Clock className="w-6 h-6 text-indigo-400" />,
      title: "The 10-Minute Routine",
      desc: "A specific sequence of actions that triggers your brain's natural sleep switch."
    },
    {
      icon: <CloudMoon className="w-6 h-6 text-purple-400" />,
      title: "CBT-I Techniques",
      desc: "Cognitive Behavioral Therapy for Insomnia, simplified for home use."
    },
    {
      icon: <BookOpen className="w-6 h-6 text-blue-400" />,
      title: "Dietary Sleep Hacks",
      desc: "The surprising foods that help (and the 'healthy' ones that keep you awake)."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-amber-400" />,
      title: "Environment Audit",
      desc: "How to turn your bedroom into a sanctuary of rest with minimal cost."
    }
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">What's inside the guide?</h2>
            <p className="text-slate-400">Somnia combines ancient wisdom with modern neuroscience to provide a holistic solution to sleep deprivation.</p>
          </div>
          <button className="text-indigo-400 font-bold flex items-center gap-2 hover:text-indigo-300 transition-colors">
            See full table of contents <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8, 
                delay: i * 0.15,
                ease: [0.21, 0.47, 0.32, 0.98]
              }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="glass p-8 rounded-3xl flex flex-col h-full"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
