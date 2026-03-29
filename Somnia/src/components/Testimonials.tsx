import { TestimonialsMarquee, Testimonial } from "@/src/components/ui/testimonials-columns-1";
import { motion } from "motion/react";

const testimonials: Testimonial[] = [
  {
    text: "Eu costumava passar horas olhando para o teto. A rotina de 10 minutos do Somnia mudou tudo. Finalmente durmo como um bebê.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    name: "Mariana Costa",
    role: "Designer Gráfica",
  },
  {
    text: "A abordagem baseada em ciência foi o que me convenceu. Sem truques, apenas técnicas reais que funcionam para insônia crônica.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    name: "Ricardo Mendes",
    role: "Engenheiro de Software",
  },
  {
    text: "Acordar revigorada é uma sensação que eu não experimentava há anos. Este ebook vale cada centavo e muito mais.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    name: "Juliana Silva",
    role: "Executiva de Marketing",
  },
  {
    text: "A auditoria do ambiente foi reveladora. Pequenas mudanças no meu quarto fizeram uma diferença enorme na qualidade do sono.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    name: "Carlos Eduardo",
    role: "Empresário",
  },
  {
    text: "Eu era cético sobre o TCC-I em casa, mas o guia torna tudo simples de seguir. Minha eficiência de sono melhorou 40%.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
    name: "Ana Paula",
    role: "Gerente de Projetos",
  },
  {
    text: "Finalmente, um guia que não diz apenas para 'relaxar'. Ele te dá as ferramentas biológicas para realmente disparar o sono.",
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
      </div>

      <div className="relative [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <TestimonialsMarquee testimonials={testimonials} duration={50} />
      </div>
    </section>
  );
};
