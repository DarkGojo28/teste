import { TestimonialsMarquee, Testimonial } from "@/src/components/ui/testimonials-columns-1";
import { motion } from "motion/react";

const testimonials: Testimonial[] = [
  {
    text: "I used to spend hours staring at the ceiling. Somnia's 10-minute routine changed everything. I'm finally sleeping like a baby.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop",
    name: "Briana Patton",
    role: "Graphic Designer",
  },
  {
    text: "The science-backed approach is what sold me. No gimmicks, just real techniques that work for chronic insomniacs like me.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop",
    name: "Bilal Ahmed",
    role: "Software Engineer",
  },
  {
    text: "Waking up refreshed is a feeling I hadn't experienced in years. This ebook is worth every penny and more.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop",
    name: "Saman Malik",
    role: "Marketing Executive",
  },
  {
    text: "The environment audit was eye-opening. Small changes to my bedroom made a massive difference in my sleep quality.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop",
    name: "Omar Raza",
    role: "Business Owner",
  },
  {
    text: "I was skeptical about CBT-I at home, but the guide makes it so simple to follow. My sleep efficiency has improved by 40%.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop",
    name: "Zainab Hussain",
    role: "Project Manager",
  },
  {
    text: "Finally, a guide that doesn't just tell you to 'relax'. It gives you the biological tools to actually trigger sleep.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop",
    name: "Aliza Khan",
    role: "Data Analyst",
  },
  {
    text: "The dietary hacks were a game changer. I didn't realize my 'healthy' evening snack was keeping me awake!",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=80&h=80&fit=crop",
    name: "Farhan Siddiqui",
    role: "Content Creator",
  },
  {
    text: "Somnia is the first thing that actually worked for my 3 AM wake-ups. The mind-calming techniques are incredible.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop",
    name: "Sana Sheikh",
    role: "Teacher",
  },
  {
    text: "I've tried every pill and tea out there. Nothing compares to the natural, sustainable methods in this guide.",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=80&h=80&fit=crop",
    name: "Hassan Ali",
    role: "Fitness Coach",
  },
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
            <div className="border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 py-1 px-4 rounded-full text-xs font-bold tracking-widest uppercase">
              Testimonials
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight mt-5 text-white">
            What our users say
          </h2>
          <p className="text-center mt-5 text-slate-400">
            Join thousands of people who have reclaimed their nights and transformed their lives with Somnia.
          </p>
        </motion.div>
      </div>

      <div className="relative [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <TestimonialsMarquee testimonials={testimonials} duration={50} />
      </div>
    </section>
  );
};
