"use client";
import React from "react";
import { FaHtml5, FaCss3Alt, FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { SiNextdotjs, SiGithubcopilot } from "react-icons/si";
import { ImGithub } from "react-icons/im";
import { MdSmartToy, MdOutlineSmartToy } from "react-icons/md";
import { motion } from "framer-motion";
import { SiPython } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { SiScikitlearn } from "react-icons/si";
import { SiAngular } from "react-icons/si";
import { SiReact } from "react-icons/si";

const skillCategories = [
  {
    title: "Languages",
    accent: "from-orange-500/10 to-yellow-500/10",
    borderAccent: "border-orange-200/60 dark:border-orange-800/30",
    badgeColor: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
    skills: [
      { id: 1, title: "HTML 5", description: "Standard markup language for creating web pages.", icon: <FaHtml5 className="text-orange-600 text-5xl" /> },
      { id: 2, title: "CSS 3", description: "Used to style and design web pages.", icon: <FaCss3Alt className="text-blue-600 text-5xl" /> },
      { id: 3, title: "JavaScript", description: "Adds interactivity and logic to websites.", icon: <IoLogoJavascript className="text-yellow-500 text-5xl" /> },
      { id: 4, title: "TypeScript", description: "JavaScript with static typing.", icon: <BiLogoTypescript className="text-blue-500 text-5xl" /> },
      { id: 5, title: "Python", description: "Used for backend development and machine learning.", icon: <SiPython className="text-blue-400 text-5xl" /> },
    ],
  },
  {
    title: "Frameworks & Libraries",
    accent: "from-cyan-500/10 to-sky-500/10",
    borderAccent: "border-cyan-200/60 dark:border-cyan-800/30",
    badgeColor: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300",
    skills: [
      { id: 6, title: "React JS", description: "Build dynamic user interfaces.", icon: <RiReactjsLine className="text-cyan-400 text-5xl" /> },
      { id: 7, title: "Next JS", description: "Production-ready React framework.", icon: <SiNextdotjs className="text-black dark:text-white text-5xl" /> },
      { id: 8, title: "Tailwind CSS", description: "Utility-first CSS framework.", icon: <RiTailwindCssFill className="text-sky-400 text-5xl" /> },
      { id: 9, title: "Bootstrap", description: "Component-based UI framework.", icon: <FaBootstrap className="text-purple-600 text-5xl" /> },
      { id: 10, title: "Angular", description: "Frontend framework for building dynamic single-page applications.", icon: <SiAngular className="text-red-600 text-5xl" /> },
      { id: 11, title: "React Native", description: "Framework for building cross-platform mobile applications.", icon: <SiReact className="text-cyan-400 text-5xl" /> },
    ],
  },
  {
    title: "Backend & Databases",
    accent: "from-green-500/10 to-emerald-500/10",
    borderAccent: "border-green-200/60 dark:border-green-800/30",
    badgeColor: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
    skills: [
      { id: 12, title: "Node.js / Express.js", description: "Backend runtime and server framework.", icon: <SiNodedotjs className="text-green-600 text-5xl" /> },
      { id: 13, title: "MongoDB", description: "NoSQL database for scalable applications.", icon: <SiMongodb className="text-green-500 text-5xl" /> },
      { id: 14, title: "PostgreSQL", description: "Powerful relational database system.", icon: <SiPostgresql className="text-blue-500 text-5xl" /> },
      { id: 15, title: "Firebase", description: "Backend-as-a-Service for authentication and storage.", icon: <SiFirebase className="text-yellow-500 text-5xl" /> },
    ],
  },
  {
    title: "Machine Learning",
    accent: "from-violet-500/10 to-purple-500/10",
    borderAccent: "border-violet-200/60 dark:border-violet-800/30",
    badgeColor: "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300",
    skills: [
      { id: 16, title: "TensorFlow", description: "Deep learning and neural networks framework.", icon: <SiTensorflow className="text-orange-500 text-5xl" /> },
      { id: 17, title: "Scikit-learn", description: "Machine learning library for Python.", icon: <SiScikitlearn className="text-yellow-600 text-5xl" /> },
    ],
  },
  {
    title: "AI Tools & Version Control",
    accent: "from-purple-500/10 to-violet-500/10",
    borderAccent: "border-purple-200/60 dark:border-purple-800/30",
    badgeColor: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
    skills: [
      { id: 18, title: "GitHub Copilot", description: "AI coding assistant.", icon: <SiGithubcopilot className="text-green-500 text-5xl" /> },
      { id: 19, title: "ChatGPT", description: "AI for coding, debugging & content.", icon: <MdOutlineSmartToy className="text-green-500 text-5xl" /> },
      { id: 20, title: "Claude AI", description: "AI assistant for problem-solving.", icon: <MdSmartToy className="text-purple-500 text-5xl" /> },
      { id: 21, title: "Git & GitHub", description: "Version control & collaboration.", icon: <ImGithub className="text-gray-800 dark:text-white text-5xl" /> },
    ],
  },
];

const About = () => {
  return (
    <section className="relative w-full py-20 overflow-hidden bg-white dark:bg-[#0a0a0f]">

      {/* ── Background geometry (matches Hero) ── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Dot grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03] dark:opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="about-dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#7c3aed" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#about-dots)" />
        </svg>
        {/* Top-left faint rings */}
        <div className="absolute -top-24 -left-24 w-[400px] h-[400px] rounded-full border border-violet-200/30 dark:border-violet-800/15" />
        <div className="absolute -top-8 -left-8 w-[260px] h-[260px] rounded-full border border-violet-200/20 dark:border-violet-800/10" />
        {/* Bottom-right glow */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-violet-400/5 dark:bg-violet-500/8 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 w-[90%] max-w-6xl mx-auto flex flex-col items-center gap-16">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-center space-y-5 max-w-2xl"
        >
          {/* Eyebrow — matches Hero */}
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300 border border-violet-200/60 dark:border-violet-700/40">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500 dark:bg-violet-400 animate-pulse inline-block" />
              Skills & Expertise
            </span>
          </div>

          {/* Title */}
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-violet-500 dark:text-violet-400 mb-2">
              Who I Am
            </p>
            <h1 className="font-extrabold text-5xl sm:text-6xl text-gray-900 dark:text-white leading-[1.05] tracking-tight">
              About{" "}
              <span className="relative inline-block">
                <span className="text-violet-600 dark:text-violet-400">Me</span>
                <svg aria-hidden="true" className="absolute -bottom-1 left-0 w-full" viewBox="0 0 80 8" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                  <path d="M2 6 Q20 1 40 5 Q60 9 78 3" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" className="dark:[stroke:#a78bfa]" />
                </svg>
              </span>
            </h1>
          </div>

          <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed">
            I specialise in designing and developing modern, scalable, and high-performance
            software applications with clean, maintainable code and seamless user experiences.
            My expertise spans full stack web development, backend architecture, RESTful API
            development, database management, and responsive frontend engineering using modern
            technologies and industry best practices.
          </p>
        </motion.div>

        {/* ── Skill categories ── */}
        <div className="w-full space-y-16">
          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
            >
              {/* Category heading */}
              <div className="flex items-center gap-4 mb-8">
                <span className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase border ${category.badgeColor} ${category.borderAccent}`}>
                  {category.title}
                </span>
                <div className="flex-1 h-px bg-gradient-to-r from-violet-200/60 to-transparent dark:from-violet-800/30" />
              </div>

              {/* Cards grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.id}
                    initial={{ opacity: 0, scale: 0.88, y: 16 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                    whileHover={{ y: -6, transition: { duration: 0.25 } }}
                    className="group relative flex flex-col items-center p-6 rounded-2xl
                      bg-white dark:bg-white/[0.03]
                      border border-gray-100 dark:border-white/[0.06]
                      hover:border-violet-300/70 dark:hover:border-violet-600/50
                      hover:shadow-xl hover:shadow-violet-500/10 dark:hover:shadow-violet-900/30
                      transition-all duration-300 cursor-default overflow-hidden"
                  >
                    {/* Card inner glow on hover */}
                    <div
                      aria-hidden="true"
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    />

                    {/* Icon container */}
                    <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/[0.07] group-hover:border-violet-200/60 dark:group-hover:border-violet-700/40 transition-colors duration-300 mb-4 shadow-sm">
                      {skill.icon}
                    </div>

                    {/* Text */}
                    <h3 className="relative z-10 text-sm font-bold text-gray-800 dark:text-white text-center leading-tight">
                      {skill.title}
                    </h3>
                    <p className="relative z-10 text-xs text-gray-500 dark:text-gray-400 mt-2 text-center leading-relaxed">
                      {skill.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;









