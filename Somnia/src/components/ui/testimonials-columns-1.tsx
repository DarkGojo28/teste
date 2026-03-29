"use client";
import React from "react";
import { motion } from "motion/react";
import { Star, CheckCircle2 } from "lucide-react";

export interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
  rating?: number;
}

export const TestimonialsGrid = (props: {
  className?: string;
  testimonials: Testimonial[];
}) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${props.className}`}>
      {props.testimonials.map(({ text, image, name, role, rating = 5 }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          viewport={{ once: true }}
          className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-lg shadow-indigo-500/5 relative flex flex-col h-full"
        >
          <div className="flex text-gold mb-4">
            {[...Array(rating)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
          </div>
          <div className="text-slate-300 leading-relaxed text-sm italic mb-6 flex-grow">"{text}"</div>
          <div className="flex items-center gap-3 mt-auto">
            <img
              width={48}
              height={48}
              src={`${image}&fm=webp&q=60`}
              alt={name}
              className="h-12 w-12 rounded-full object-cover border-2 border-white/10"
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
            />
            <div className="flex flex-col">
              <div className="font-bold tracking-tight leading-5 text-white text-sm flex items-center gap-1.5">
                {name}
                <CheckCircle2 className="w-3.5 h-3.5 text-conversion" />
              </div>
              <div className="leading-5 opacity-60 tracking-tight text-slate-400 text-[10px] uppercase font-bold">{role}</div>
            </div>
          </div>
          <div className="absolute top-8 right-8 bg-conversion/10 text-conversion text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-tighter">
            Compra Verificada
          </div>
        </motion.div>
      ))}
    </div>
  );
};
