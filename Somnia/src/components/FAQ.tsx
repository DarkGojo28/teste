import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Como recebo o acesso ao ebook?",
      a: "O acesso é imediato! Assim que seu pagamento for confirmado, você receberá um e-mail com o link para download do ebook e todos os bônus exclusivos em formato PDF, compatível com qualquer dispositivo."
    },
    {
      q: "O método funciona para quem tem insônia há anos?",
      a: "Sim! O Somnia foi desenvolvido para atacar a causa biológica que mantém o cérebro em estado de alerta, mesmo em casos crônicos. Ele foca no que a medicina tradicional muitas vezes ignora."
    },
    {
      q: "E se eu não gostar do conteúdo?",
      a: "Você tem 7 dias de garantia incondicional. Se por qualquer motivo você sentir que o Somnia não é para você, basta nos enviar um e-mail e devolveremos 100% do seu investimento, sem perguntas."
    },
    {
      q: "Preciso comprar algum medicamento ou suplemento?",
      a: "Não. O foco do Somnia é o reequilíbrio natural do seu corpo. Embora mencionemos alguns aliados naturais pouco conhecidos, o segredo está no protocolo de comportamento e ambiente."
    }
  ];

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-4">
              <HelpCircle className="w-12 h-12 text-gold opacity-50" />
            </div>
            <h2 className="text-4xl font-display font-bold mb-4">Dúvidas Frequentes</h2>
            <p className="text-slate-400">Tudo o que você precisa saber antes de começar sua jornada.</p>
          </motion.div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-3xl border-white/5 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-all"
              >
                <span className="text-lg font-bold text-white pr-8">{faq.q}</span>
                <div className="shrink-0 w-8 h-8 rounded-full bg-soft-purple/10 flex items-center justify-center text-soft-purple">
                  {openIndex === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-6 text-slate-400 leading-relaxed text-sm">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
