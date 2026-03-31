import { TestimonialsGrid, Testimonial } from "@/src/components/ui/testimonials-columns-1";
import { motion } from "motion/react";

const testimonials: Testimonial[] = [
  {
    text: "Eu costumava passar horas olhando para o teto. A técnica de 60 segundos do Somnia mudou tudo. Finalmente durmo em menos de 5 minutos.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    name: "Mariana Costa",
    role: "Designer Gráfica",
  },
  {
    text: "Funciona porque ataca a causa biológica, não apenas os sintomas. Minha ansiedade noturna simplesmente desapareceu.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    name: "Ricardo Mendes",
    role: "Engenheiro de Software",
  },
  {
    text: "Acordar às 6h com energia total parecia impossível. O 'reset hormonal' de 3 dias foi a chave que faltava na minha vida.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    name: "Juliana Silva",
    role: "Executiva de Marketing",
  },
  {
    text: "O guia dos chás certos me mostrou por que eu estava errando há anos. Cada tipo de insônia pede uma solução diferente.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    name: "Carlos Eduardo",
    role: "Empresário",
  },
  {
    text: "Finalmente entendi o erro que eu cometia 12 horas antes de deitar. Minha eficiência de sono melhorou 40% em uma semana.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
    name: "Ana Paula",
    role: "Gerente de Projetos",
  },
  {
    text: "Sem remédios, sem efeitos colaterais. Apenas o conhecimento de como o corpo realmente funciona durante a noite.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop",
    name: "Beatriz Oliveira",
    role: "Analista de Dados",
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-transparent py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center mb-16"
        >
          <div className="flex justify-center">
            <div className="border border-soft-purple/30 bg-soft-purple/10 text-soft-purple py-1 px-4 rounded-full text-xs font-bold tracking-widest uppercase">
              Depoimentos
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mt-5 text-white">
            O que dizem nossos alunos
          </h2>
          <p className="text-center mt-5 text-slate-400">
            Junte-se a milhares de pessoas que recuperaram suas noites e transformaram suas vidas com o Somnia.
          </p>
        </motion.div>

        <TestimonialsGrid testimonials={testimonials} />
      </div>
    </section>
  );
};
