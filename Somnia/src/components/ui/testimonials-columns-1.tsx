"use client";
import React from "react";
import { motion } from "motion/react";

export interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
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
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-lg shadow-indigo-500/5 min-w-[320px] max-w-sm" key={i}>
                  <div className="text-slate-300 leading-relaxed text-sm">{text}</div>
                  <div className="flex items-center gap-2 mt-5">
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
                      <div className="font-medium tracking-tight leading-5 text-white text-sm">{name}</div>
                      <div className="leading-5 opacity-60 tracking-tight text-slate-400 text-xs">{role}</div>
                    </div>
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
