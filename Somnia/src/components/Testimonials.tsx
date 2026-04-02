import { TestimonialsGrid, Testimonial } from "@/src/components/ui/testimonials-columns-1";
import { motion } from "motion/react";

const testimonials: Testimonial[] = [
  {
    text: "Na terceira noite depois de aplicar o protocolo, dormi do início ao fim pela primeira vez em anos. O que mais me impressionou foi acordar sem aquela sensação de 'ressaca' que os remédios deixavam. Minha produtividade no trabalho dobrou.\n\nFunciona porque: Ataca a causa biológica que mantém o cérebro em estado de alerta, não apenas os sintomas.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    name: "Marcos T.",
    role: "Engenheiro, 38 anos — São Paulo",
  },
  {
    text: "Eu achei que já sabia tudo sobre higiene do sono. O guia me mostrou dois erros que eu cometia 12 horas antes de deitar e que estavam arruinando meu descanso. Hoje, deito e apago em menos de 10 minutos.\n\nFunciona porque: Reequilibra o ciclo natural do corpo através de ajustes simples mas poderosos na rotina diária.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    name: "Fernanda C.",
    role: "Professora, 44 anos — Belo Horizonte",
  },
  {
    text: "O diagnóstico do início foi o que mudou tudo pra mim. Eu descobri que meu tipo de insônia não era o que eu pensava. O suplemento sugerido (que custa centavos) fez mais por mim do que anos de terapia e remédios caros.\n\nFunciona porque: Identifica o perfil específico de cada pessoa e entrega a solução exata para aquele metabolismo.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    name: "Ricardo M.",
    role: "Empreendedor, 51 anos — Curitiba",
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-slate-950 py-24 relative overflow-hidden">
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
