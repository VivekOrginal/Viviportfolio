"use client";
import React from "react";
import { motion } from "framer-motion";
import { Cpu, Rocket, Users } from "lucide-react";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { TextAnimate } from "@/components/ui/text-animate";

const stats = [
  { icon: <Rocket size={20} />, value: "3+", label: "Projects Built" },
  { icon: <Cpu size={20} />, value: "AI", label: "Focused" },
  { icon: <Users size={20} />, value: "Open", label: "To Freelance" },
];

const AboutSection = () => {
  return (
    <section id="about" className="w-full py-32 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* label row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-20"
        >
          <div className="h-px w-12 bg-black/20" />
          <span className="text-xs uppercase tracking-[0.4em] text-black/40">About</span>
        </motion.div>

        {/* top — big statement */}
        <div className="mb-20">
          <TypingAnimation
            as="h2"
            duration={80}
            className="text-6xl md:text-9xl font-black text-black leading-none tracking-tight"
          >
            I Build
          </TypingAnimation>
          <TypingAnimation
            as="h2"
            duration={80}
            delay={700}
            className="text-6xl md:text-9xl font-thin italic text-black/20 leading-none tracking-tight"
          >
            Things That Matter
          </TypingAnimation>
        </div>

        {/* middle — two col */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <TextAnimate animation="blurInUp" by="word" className="font-light text-black/80 text-lg md:text-xl leading-relaxed mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
              {"I'm Vivek P S, a BCA student and forward-thinking developer specializing in creating modern applications with the support of AI tools and streamlined development practices."}
            </TextAnimate>
            <TextAnimate animation="blurInUp" by="word" delay={0.2} className="text-black/50 text-base leading-relaxed mb-6" style={{ fontFamily: "var(--font-space)" }}>
              {"I believe in simplicity, performance, and purposeful design — building solutions that are not only visually refined but also reliable and efficient. My focus is on delivering work that balances innovation with real-world usability."}
            </TextAnimate>
            <TextAnimate animation="blurInUp" by="word" delay={0.4} className="text-black/50 text-base leading-relaxed mb-10" style={{ fontFamily: "var(--font-space)" }}>
              {"With a strong mindset for growth and consistency, I'm actively seeking freelance projects and professional opportunities to contribute and evolve."}
            </TextAnimate>

          </motion.div>

          {/* right — stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className={`group p-6 rounded-3xl border transition-all duration-300 cursor-default ${
                  i === 0
                    ? "bg-red-600 border-red-600"
                    : i === 1
                    ? "bg-gray-800 border-gray-800"
                    : "bg-gray-900 border-gray-900"
                }`}
              >
                <div className={`w-10 h-10 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 ${
                  i === 0 ? "bg-white/20 text-white" : "bg-white/10 text-white/60"
                }`}>
                  {stat.icon}
                </div>
                <p className="text-3xl font-black mb-1 text-white">{stat.value}</p>
                <p className="text-xs uppercase tracking-widest text-white/50">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
