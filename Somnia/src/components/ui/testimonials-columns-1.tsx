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

export const TestimonialsMarquee = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
  reverse?: boolean;
}) => {
  return (
    <div className={`flex overflow-hidden ${props.className}`}>
      <motion.div
        style={{ willChange: "transform" }}
        animate={{
          translateX: props.reverse ? "0%" : "-50%",
        }}
        initial={{
          translateX: props.reverse ? "-50%" : "0%",
        }}
        transition={{
          duration: props.duration || 20,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex gap-6 py-4"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <div key={index} className="flex gap-6">
              {props.testimonials.map(({ text, image, name, role, rating = 5 }, i) => (
                <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-lg shadow-indigo-500/5 min-w-[320px] max-w-sm relative" key={i}>
                  <div className="flex text-gold mb-3">
                    {[...Array(rating)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                  </div>
                  <div className="text-slate-300 leading-relaxed text-sm italic">"{text}"</div>
                  <div className="flex items-center gap-3 mt-5">
                    <img
                      width={40}
                      height={40}
                      src={`${image}&fm=webp&q=60`}
                      alt={name}
                      className="h-10 w-10 rounded-full object-cover border border-white/10"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="flex flex-col">
                      <div className="font-bold tracking-tight leading-5 text-white text-sm flex items-center gap-1.5">
                        {name}
                        <CheckCircle2 className="w-3 h-3 text-conversion" />
                      </div>
                      <div className="leading-5 opacity-60 tracking-tight text-slate-400 text-xs uppercase font-medium">{role}</div>
                    </div>
                  </div>
                  <div className="absolute bottom-6 right-8 bg-conversion/10 text-conversion text-[8px] font-black px-2 py-0.5 rounded-full uppercase tracking-tighter">
                    Compra Verificada
                  </div>
                </div>
              ))}
            </div>
          )),
        ]}
      </motion.div>
    </div>
  );
};
