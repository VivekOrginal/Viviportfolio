"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";
import Link from "next/link";
import projects, { Project } from "@/data/projects";
import { ArrowUpRight, Github, X, ExternalLink, MoveRight } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";

/* ── animated counter ── */
const Counter = ({ value }: { value: number }) => (
  <motion.span
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.3 }}
  >
    {value}
  </motion.span>
);

/* ── single project card ── */
const ProjectCard = ({ project, index, onClick }: { project: Project; index: number; onClick: () => void }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={onClick}
      className="group relative cursor-pointer"
    >
      {/* card */}
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative rounded-2xl overflow-hidden bg-white dark:bg-zinc-900 border border-black/8 dark:border-white/8 shadow-sm hover:shadow-2xl transition-shadow duration-500"
      >
        {/* image */}
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
          <motion.div
            animate={{ scale: hovered ? 1.07 : 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full h-full"
          >
            <Image src={project.src} alt={project.title} fill className="object-cover" />
          </motion.div>

          {/* overlay */}
          <motion.div
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/50 flex items-center justify-center"
          >
            <motion.div
              animate={{ scale: hovered ? 1 : 0.7, opacity: hovered ? 1 : 0 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="w-14 h-14 rounded-full bg-white flex items-center justify-center"
            >
              <ArrowUpRight size={22} className="text-black" />
            </motion.div>
          </motion.div>

          {/* index badge */}
          <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-black/70 backdrop-blur-sm flex items-center justify-center">
            <span className="text-white text-xs font-mono">{String(index + 1).padStart(2, "0")}</span>
          </div>
        </div>

        {/* content */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-3 mb-3">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-black/40 dark:text-white/40 font-medium">
                {project.category}
              </span>
              <h3 className="text-lg font-bold text-black dark:text-white mt-0.5 leading-snug">
                {project.title}
              </h3>
            </div>
            <motion.div
              animate={{ rotate: hovered ? 45 : 0, scale: hovered ? 1.1 : 1 }}
              transition={{ duration: 0.3 }}
              className="shrink-0 w-9 h-9 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center mt-1"
            >
              <ArrowUpRight size={15} className="text-black/50 dark:text-white/50" />
            </motion.div>
          </div>

          {/* tech pills */}
          <div className="flex flex-wrap gap-1.5 mt-4">
            {[...project.skills.frontend, ...project.skills.backend].map((s, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.05 }}
                className="flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-full bg-black/5 dark:bg-white/8 text-black/60 dark:text-white/60"
              >
                <span className="text-sm">{s.icon}</span>
                {s.title}
              </motion.span>
            ))}
          </div>
        </div>

        {/* bottom bar */}
        <motion.div
          animate={{ scaleX: hovered ? 1 : 0 }}
          initial={{ scaleX: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{ originX: 0 }}
          className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-black via-black/60 to-transparent dark:from-white dark:via-white/60"
        />
      </motion.div>
    </motion.div>
  );
};

/* ── main section ── */
const ProjectsSection = () => {
  const [selected, setSelected] = useState<Project | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const headingX = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const smoothX = useSpring(headingX, { stiffness: 60, damping: 20 });

  const openModal = (project: Project) => {
    setSelected(project);
    document.body.style.overflow = "hidden";
    window.dispatchEvent(new CustomEvent("lenis:stop"));
  };

  const closeModal = () => {
    setSelected(null);
    document.body.style.overflow = "";
    window.dispatchEvent(new CustomEvent("lenis:start"));
  };

  return (
    <section id="projects" ref={sectionRef} className="w-full py-28 px-6 md:px-16 overflow-hidden">

      {/* ── header ── */}
      <div className="max-w-7xl mx-auto mb-16">
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs uppercase tracking-[0.3em] text-black/40 dark:text-white/40 mb-3"
        >
          Selected Works
        </motion.p>

        <div className="flex items-end justify-between">
          <motion.h2
            style={{ x: smoothX }}
            className="text-5xl md:text-8xl font-black text-black dark:text-white leading-none tracking-tight"
          >
            Projects
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex flex-col items-end"
          >
            <span className="text-6xl font-black text-black/10 dark:text-white/10">
              <Counter value={projects.length} />
            </span>
            <span className="text-xs text-black/30 dark:text-white/30 uppercase tracking-widest">works</span>
          </motion.div>
        </div>

        {/* animated divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
          style={{ originX: 0 }}
          className="h-px bg-gradient-to-r from-black/30 via-black/10 to-transparent dark:from-white/30 dark:via-white/10 mt-6"
        />
      </div>

      {/* ── cards grid ── */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} onClick={() => openModal(project)} />
        ))}
      </div>

      {/* ── modal ── */}
      <AnimatePresence>
        {selected && (
          <>
            {/* backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[998] bg-black/70 backdrop-blur-lg"
              onClick={closeModal}
            />

            {/* modal panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 40 }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="fixed z-[999] inset-4 md:inset-10 lg:inset-16 bg-white dark:bg-[#0f0f0f] rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden"
            >
              {/* close btn */}
              <motion.button
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                onClick={closeModal}
                className="absolute top-5 right-5 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 transition"
              >
                <X size={16} />
              </motion.button>

              {/* left — image */}
              <div className="relative md:w-1/2 h-56 md:h-auto shrink-0 overflow-hidden">
                <motion.div
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-full h-full"
                >
                  <Image src={selected.src} alt={selected.title} fill className="object-cover" />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 dark:to-black/20" />
              </div>

              {/* right — content */}
              <div
                data-lenis-prevent
                className="flex-1 overflow-y-scroll overscroll-contain p-8 md:p-12 flex flex-col"
                style={{ WebkitOverflowScrolling: "touch" }}
              >
                <div>
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="inline-block text-[10px] uppercase tracking-[0.25em] text-black/40 dark:text-white/40 mb-3"
                  >
                    {selected.category}
                  </motion.span>

                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="text-2xl md:text-4xl font-black text-black dark:text-white leading-tight mb-6"
                  >
                    {selected.title}
                  </motion.h2>

                  {/* tech stack */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-wrap gap-2 mb-6"
                  >
                    {[...selected.skills.frontend, ...selected.skills.backend].map((s, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + idx * 0.05 }}
                        className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border border-black/10 dark:border-white/10 text-black/60 dark:text-white/60"
                      >
                        <span className="text-sm">{s.icon}</span>
                        {s.title}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* description */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="text-sm text-black/60 dark:text-white/50 leading-relaxed"
                  >
                    {selected.content}
                  </motion.div>
                </div>

                {/* actions */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex gap-3 mt-8 pt-6 border-t border-black/8 dark:border-white/8"
                >
                  <Link href={selected.live} target="_blank" className="flex-1">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full flex items-center justify-center gap-2 bg-black dark:bg-white text-white dark:text-black py-3.5 rounded-2xl text-sm font-bold hover:opacity-85 transition"
                    >
                      Live Demo <ExternalLink size={14} />
                    </motion.button>
                  </Link>
                  {selected.github && (
                    <Link href={selected.github} target="_blank" className="flex-1">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                        className="w-full flex items-center justify-center gap-2 border border-black/15 dark:border-white/15 py-3.5 rounded-2xl text-sm font-bold hover:bg-black/5 dark:hover:bg-white/5 transition text-black dark:text-white"
                      >
                        GitHub <Github size={14} />
                      </motion.button>
                    </Link>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
