import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Is this a physical book or a digital download?",
    answer: "Somnia is a digital ebook available in PDF and ePub formats. You'll get instant access to download it immediately after purchase, so you can start your journey to better sleep tonight."
  },
  {
    question: "Do I need to buy any expensive supplements or equipment?",
    answer: "No. Our philosophy is built on natural, biological triggers. While we suggest some minor environment optimizations (like blackout curtains), the core of the program requires zero additional purchases."
  },
  {
    question: "How soon can I expect to see results?",
    answer: "Most users report a significant improvement in their ability to fall asleep within the first 3-5 nights of implementing the 10-minute routine. Long-term habits like CBT-I techniques typically take 2-3 weeks to fully solidify."
  },
  {
    question: "Is there a money-back guarantee?",
    answer: "Yes! We're so confident in the Somnia blueprint that we offer a 30-day, no-questions-asked money-back guarantee. If you don't feel more rested, just email our support team for a full refund."
  },
  {
    question: "Can I use these techniques if I work night shifts?",
    answer: "Absolutely. While the guide uses 'night' as the default, the biological principles apply to any sleep-wake cycle. We include a specific section on adjusting the routine for shift workers."
  }
];

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-white/5 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left hover:text-indigo-400 transition-colors group"
      >
        <span className="text-lg font-bold pr-8">{question}</span>
        <ChevronDown className={`w-5 h-5 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-indigo-400' : 'text-slate-500'}`} />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-slate-400 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-[#080A0F]/50">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Common Questions</h2>
          <p className="text-slate-400">Everything you need to know about the Somnia sleep program.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass rounded-[32px] p-8 md:p-12"
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
