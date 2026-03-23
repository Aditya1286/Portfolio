"use client";

import React, { useRef, ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, FaJava,
  FaPhp, FaServer, FaDatabase, FaGitAlt, FaLinux, FaDocker,
  FaFigma, FaBrain, FaLightbulb, FaMobileAlt, FaGlobe, FaCode
} from "react-icons/fa";
import {
  SiTailwindcss, SiCplusplus, SiGnubash,
  SiIntellijidea, SiPostman, SiJavascript
} from "react-icons/si";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Skill {
  name: string;
  icon: ReactNode;
  color: string;
}

interface Category {
  category: string;
  tag: string;
  accent: string;
  border: string;
  skills: Skill[];
}

// ─── Data — colors from your purple/slate palette ─────────────────────────────

const skillsData: Category[] = [
  {
    category: "Frontend",
    tag: "01",
    accent: "#a78bfa",
    border: "rgba(167,139,250,0.25)",
    skills: [
      { name: "React", icon: <FaReact />, color: "#93c5fd" },
      { name: "JavaScript", icon: <SiJavascript />, color: "#c4b5fd" },
      { name: "HTML5", icon: <FaHtml5 />, color: "#f9a8d4" },
      { name: "CSS3", icon: <FaCss3Alt />, color: "#93c5fd" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#a5f3fc" },
      { name: "Responsive", icon: <FaMobileAlt />, color: "#c4b5fd" },
      { name: "Modern Web", icon: <FaGlobe />, color: "#a78bfa" },
    ],
  },
  {
    category: "Backend",
    tag: "02",
    accent: "#818cf8",
    border: "rgba(129,140,248,0.25)",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, color: "#a5f3fc" },
      { name: "Python", icon: <FaPython />, color: "#93c5fd" },
      { name: "Java", icon: <FaJava />, color: "#fca5a5" },
      { name: "C++", icon: <SiCplusplus />, color: "#93c5fd" },
      { name: "PHP", icon: <FaPhp />, color: "#c4b5fd" },
      { name: "Server-side", icon: <FaServer />, color: "#94a3b8" },
      { name: "Databases", icon: <FaDatabase />, color: "#818cf8" },
    ],
  },
  {
    category: "DevOps & Tools",
    tag: "03",
    accent: "#c4b5fd",
    border: "rgba(196,181,253,0.2)",
    skills: [
      { name: "Git", icon: <FaGitAlt />, color: "#fca5a5" },
      { name: "Linux", icon: <FaLinux />, color: "#e2e8f0" },
      { name: "Bash", icon: <SiGnubash />, color: "#94a3b8" },
      { name: "Docker", icon: <FaDocker />, color: "#93c5fd" },
      { name: "VS Code", icon: <FaCode />, color: "#93c5fd" },
      { name: "IntelliJ", icon: <SiIntellijidea />, color: "#fca5a5" },
      { name: "Figma", icon: <FaFigma />, color: "#f9a8d4" },
      { name: "Postman", icon: <SiPostman />, color: "#fdba74" },
      { name: "Critical Thinking", icon: <FaBrain />, color: "#f0abfc" },
      { name: "Problem Solving", icon: <FaLightbulb />, color: "#fde68a" },
    ],
  },
];

// ─── SkillPill ────────────────────────────────────────────────────────────────

interface SkillPillProps {
  skill: Skill;
  index: number;
  accent: string;
}

const SkillPill = ({ skill, index, accent }: SkillPillProps) => (
  <motion.span
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.25, delay: index * 0.035 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05, y: -1 }}
    className="group relative flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-mono cursor-default select-none"
    style={{
      background: "rgba(139,92,246,0.08)",
      border: "1px solid rgba(139,92,246,0.18)",
      color: "#cbd5e1",
    }}
  >
    <span className="text-base shrink-0" style={{ color: skill.color }}>
      {skill.icon}
    </span>
    <span className="group-hover:text-white transition-colors duration-150">
      {skill.name}
    </span>
    <span
      className="absolute inset-x-0 bottom-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
      style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
    />
  </motion.span>
);

// ─── CategoryCard ─────────────────────────────────────────────────────────────

interface CategoryCardProps {
  category: Category;
  index: number;
}

const CategoryCard = ({ category, index }: CategoryCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (

    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="relative rounded-2xl overflow-hidden mt-4"
      style={{
        background: "linear-gradient(145deg, rgba(30,20,60,0.7) 0%, rgba(20,15,45,0.85) 100%)",
        border: `1px solid ${category.border}`,
        backdropFilter: "blur(12px)",
        boxShadow: `0 0 30px rgba(139,92,246,0.07), inset 0 1px 0 rgba(167,139,250,0.08)`,
      }}
    >
      {/* Top shimmer */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${category.accent}, transparent)`,
          opacity: 0.55,
        }}
      />

      {/* Corner tag */}
      <div
        className="absolute top-4 right-5 font-mono text-xs opacity-20 tracking-widest"
        style={{ color: category.accent }}
      >
        /{category.tag}
      </div>

      <div className="p-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <div
            className="w-1 h-5 rounded-full shrink-0"
            style={{ background: category.accent, opacity: 0.85 }}
          />
          <h3
            className="text-sm font-mono font-bold tracking-[0.2em] uppercase"
            style={{ color: category.accent }}
          >
            {category.category}
          </h3>
        </div>

        {/* Pills — tightly packed, no excess bottom space */}
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill: Skill, i: number) => (
            <SkillPill key={i} skill={skill} index={i} accent={category.accent} />
          ))}
        </div>
      </div>

      {/* Inner glow */}
      <div
        className="absolute inset-0 pointer-events-none rounded-2xl"
        style={{
          background: `radial-gradient(ellipse at 15% 0%, rgba(139,92,246,0.06) 0%, transparent 55%)`,
        }}
      />
    </motion.div>
  );
};

// ─── Skills ───────────────────────────────────────────────────────────────────

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative pt-20 lg:pt-32 pb-24 lg:pb-32"
    >
      {/* Dot grid — blends with your site bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(139,92,246,0.1) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">

        {/* ── Header ── */}
        <div className="mb-12 lg:mb-14">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="h-px w-8 bg-purple-400 opacity-50" />
            <span className="font-mono text-xs tracking-[0.3em] text-purple-400 uppercase opacity-60">
              capabilities
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            viewport={{ once: true }}
            className="font-black leading-none mb-3"
            style={{
              fontFamily: "'Courier New', monospace",
              fontSize: "clamp(2.8rem, 7vw, 6rem)",
              color: "#f1f5f9",
              letterSpacing: "-0.02em",
            }}
          >
            My Stack
            <span style={{ color: "#a78bfa" }}>.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="font-mono text-xs tracking-widest"
            style={{ color: "#475569", letterSpacing: "0.14em" }}
          >
            tools i actually use &mdash; no filler, no buzzwords
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="mt-6 h-px origin-left"
            style={{
              background: "linear-gradient(90deg, #a78bfa 0%, #818cf8 50%, transparent 100%)",
              maxWidth: "280px",
            }}
          />
        </div>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {skillsData.map((category: Category, idx: number) => (
            <CategoryCard key={idx} category={category} index={idx} />
          ))}
        </div>

        {/* ── Footer ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 flex items-center justify-center gap-4"
        >
          <div
            className="h-px flex-1 max-w-[100px]"
            style={{ background: "linear-gradient(90deg, transparent, rgba(167,139,250,0.15))" }}
          />
          <span
            className="font-mono text-xs tracking-[0.22em] uppercase"
            style={{ color: "#334155" }}
          >
            built with consistency, focus &amp; craft
          </span>
          <div
            className="h-px flex-1 max-w-[100px]"
            style={{ background: "linear-gradient(90deg, rgba(167,139,250,0.15), transparent)" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;