/*
"use client";
import React from "react";
import { FaSquareUpwork, FaSchool, FaRProject } from "react-icons/fa6";
import { SiFiverr } from "react-icons/si";
import { motion } from "framer-motion";
import { SiFreelancer } from "react-icons/si";

const Experience = () => {
  const Experiences = [
    {
      id: 1,
      year: "2023",
      position: "Junior Web Developer",
      company: "School Internship Project",
      description:
        "Assisted in developing and maintaining the company website using HTML, CSS, and JavaScript. Gained hands-on experience in web development and teamwork.",
      icon: <FaSchool className="text-7xl text-blue-600" />,
    },
    {
      id: 2,
      year: "2024",
      position: "Frontend Developer",
      company: "VPS Kings",
      description:
        "Worked on various frontend projects using React and Tailwind CSS. Collaborated with backend developers to implement responsive designs and improve user experience.",
      icon: <FaRProject className="text-7xl text-red-600" />,
    },
    {
      id: 3,
      year: "2025",
      position: "Freelance Developer",
      company: "Self-Employed",
      description:
        "Completed multiple freelance projects for small businesses and startups. Developed custom websites and web applications tailored to client needs.",
      icon: <FaSquareUpwork className="text-7xl text-green-600" />,
    },
    {
      id: 4,
      year: "2025 - Present",
      position: "Software Developer",
      company: "Freelancer.com",
      description:
        "Working with global clients to design and build responsive, user-friendly web interfaces using React, Tailwind CSS, and modern frontend tools. Delivering high-quality projects focused on performance, accessibility, and great user experience.",
      icon: <SiFreelancer className="text-7xl text-indigo-600" />,
    },
   {
      id: 5,
      year: "2025 - Present",
      position: "Front-End & Backend Developer",
      company: "Fiverr",
      description:
        "Offering frontend development services through Fiverr gigs, specializing in building modern, responsive, and high-performance web applications. Skilled in React, Next.js, and Tailwind CSS to create visually appealing and user-friendly interfaces. Focused on delivering clean code, fast performance, and client satisfaction across multiple projects.",
      icon: <SiFiverr className="text-7xl text-green-500" />,
    },



  ];

  return (
    <div className="w-full py-20 bg-gray-50 dark:bg-black">
      <div className="w-[90%] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-purple-700 dark:text-purple-300 text-center mb-16">
          Experience
        </motion.h2>

        <div className="flex flex-col gap-12">
          {Experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } justify-between items-center p-10 min-h-[200px] rounded-2xl transition`}>
              <div className="flex flex-col text-center md:text-left max-w-xl space-y-2">
                <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                  {exp.year}
                </span>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {exp.position}
                </h3>
                <h4 className="text-lg font-medium text-gray-600 dark:text-gray-300">
                  {exp.company}
                </h4>
                <p className="text-purple-700 dark:text-gray-400 text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2 + 0.2,
                  type: "spring",
                }}
                viewport={{ once: true }}
                className="mt-6 md:mt-0 md:mx-10 flex-shrink-0">
                {exp.icon}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
*/

"use client";
import React, { useState } from "react";
import { FaSquareUpwork, FaSchool, FaRProject } from "react-icons/fa6";
import { SiFiverr, SiFreelancer } from "react-icons/si";
import { motion } from "framer-motion";

const Experiences = [
  {
    id: 1,
    year: "2023",
    tag: "Internship",
    position: "Junior Web Developer",
    company: "School Internship Project",
    description:
      "Assisted in developing and maintaining the company website using HTML, CSS, and JavaScript. Gained hands-on experience in web development and teamwork.",
    icon: <FaSchool className="text-4xl text-blue-600" />,
    skills: ["HTML", "CSS", "JavaScript"],
    color: "blue",
  },
  {
    id: 2,
    year: "2024",
    tag: "Full-Time",
    position: "Frontend Developer",
    company: "VPS Kings",
    description:
      "Worked on various frontend projects using React and Tailwind CSS. Collaborated with backend developers to implement responsive designs and improve user experience.",
    icon: <FaRProject className="text-4xl text-red-600" />,
    skills: ["React", "Tailwind CSS", "UI/UX"],
    color: "red",
  },
  {
    id: 3,
    year: "2025",
    tag: "Freelance",
    position: "Freelance Developer",
    company: "Self-Employed",
    description:
      "Completed multiple freelance projects for small businesses and startups. Developed custom websites and web applications tailored to client needs.",
    icon: <FaSquareUpwork className="text-4xl text-green-600" />,
    skills: ["Next.js", "React", "Node.js"],
    color: "green",
  },
  {
    id: 4,
    year: "2025 – Present",
    tag: "Active",
    position: "Software Developer",
    company: "Freelancer.com",
    description:
      "Working with global clients to design and build responsive, user-friendly web interfaces using React, Tailwind CSS, and modern frontend tools. Delivering high-quality projects focused on performance, accessibility, and great user experience.",
    icon: <SiFreelancer className="text-4xl text-indigo-600" />,
    skills: ["React", "Tailwind CSS", "Performance"],
    color: "indigo",
  },
  {
    id: 5,
    year: "2025 – Present",
    tag: "Active",
    position: "Full-Stack Developer",
    company: "Fiverr",
    description:
      "Offering full-stack development services through Fiverr, specialising in building modern, responsive, and high-performance web applications with React, Next.js, and Tailwind CSS. Focused on clean code, fast performance, and client satisfaction.",
    icon: <SiFiverr className="text-4xl text-green-500" />,
    skills: ["Next.js", "Full-Stack", "API Development"],
    color: "emerald",
  },
];

const tagColors: Record<string, string> = {
  Internship: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200/60 dark:border-blue-700/40",
  "Full-Time": "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300 border-red-200/60 dark:border-red-700/40",
  Freelance: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 border-green-200/60 dark:border-green-700/40",
  Active: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300 border-violet-200/60 dark:border-violet-700/40",
};

const skillColors = [
  "bg-gray-100 text-gray-600 dark:bg-white/5 dark:text-gray-400",
  "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300",
  "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300",
];

const Experience = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section className="relative w-full py-20 overflow-hidden bg-white dark:bg-[#0a0a0f]">

      {/* ── Background (matches Hero / About) ── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-[0.03] dark:opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="exp-dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#7c3aed" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#exp-dots)" />
        </svg>
        <div className="absolute -bottom-24 -right-24 w-[420px] h-[420px] rounded-full border border-violet-200/30 dark:border-violet-800/15" />
        <div className="absolute -bottom-8 -right-8 w-[260px] h-[260px] rounded-full border border-violet-200/20 dark:border-violet-800/10" />
        <div className="absolute top-0 left-0 w-[500px] h-[240px] bg-violet-400/5 dark:bg-violet-500/8 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 w-[90%] max-w-4xl mx-auto flex flex-col items-center gap-16">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-center space-y-5 max-w-xl"
        >
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300 border border-violet-200/60 dark:border-violet-700/40">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500 dark:bg-violet-400 animate-pulse inline-block" />
              Career Journey
            </span>
          </div>
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-violet-500 dark:text-violet-400 mb-2">
              My Story
            </p>
            <h1 className="font-extrabold text-5xl sm:text-6xl text-gray-900 dark:text-white leading-[1.05] tracking-tight">
              Work{" "}
              <span className="relative inline-block">
                <span className="text-violet-600 dark:text-violet-400">Experience</span>
                <svg aria-hidden="true" className="absolute -bottom-1 left-0 w-full" viewBox="0 0 240 8" fill="none" preserveAspectRatio="none">
                  <path d="M2 6 Q60 1 120 5 Q180 9 238 3" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed">
            A timeline of the roles, projects, and milestones that have shaped my journey as a software engineer — from internships to global freelance work.
          </p>
        </motion.div>

        {/* ── Timeline ── */}
        <div className="relative w-full">

          {/* Vertical line */}
          <div
            aria-hidden="true"
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-300/60 via-violet-400/40 to-transparent dark:from-violet-700/50 dark:via-violet-800/30 -translate-x-1/2"
          />

          <div className="flex flex-col gap-12">
            {Experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              const isOpen = expanded === exp.id;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true }}
                  className={`relative flex items-start md:items-center gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-row`}
                >
                  {/* ── Content card ── */}
                  <div className={`w-full md:w-[calc(50%-2.5rem)] ml-14 md:ml-0 ${isLeft ? "md:mr-10" : "md:ml-10"}`}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.25 }}
                      onClick={() => setExpanded(isOpen ? null : exp.id)}
                      className="group relative cursor-pointer rounded-2xl p-6
                        bg-white dark:bg-white/[0.03]
                        border border-gray-100 dark:border-white/[0.07]
                        hover:border-violet-300/70 dark:hover:border-violet-600/50
                        hover:shadow-xl hover:shadow-violet-500/10 dark:hover:shadow-violet-900/30
                        transition-all duration-300 overflow-hidden"
                    >
                      {/* Inner hover glow */}
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      />

                      {/* Card top row */}
                      <div className="relative z-10 flex items-start justify-between gap-3 mb-4">
                        <div className="flex items-center gap-3">
                          {/* Icon bubble */}
                          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/[0.07] group-hover:border-violet-200/60 dark:group-hover:border-violet-700/40 transition-colors duration-300 shrink-0">
                            {exp.icon}
                          </div>
                          <div>
                            <span className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wider uppercase border ${tagColors[exp.tag] ?? tagColors["Active"]}`}>
                              {exp.tag}
                            </span>
                            {exp.tag === "Active" && (
                              <span className="ml-1.5 inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse align-middle" />
                            )}
                          </div>
                        </div>
                        {/* Expand toggle */}
                        <motion.span
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.25 }}
                          className="text-gray-400 dark:text-gray-500 shrink-0 mt-1"
                        >
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </motion.span>
                      </div>

                      {/* Year + position */}
                      <div className="relative z-10 mb-1">
                        <span className="text-xs font-semibold tracking-widest uppercase text-violet-500 dark:text-violet-400">
                          {exp.year}
                        </span>
                      </div>
                      <h3 className="relative z-10 text-lg font-bold text-gray-900 dark:text-white leading-snug mb-0.5">
                        {exp.position}
                      </h3>
                      <h4 className="relative z-10 text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
                        {exp.company}
                      </h4>

                      {/* Expandable description */}
                      <motion.div
                        initial={false}
                        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="relative z-10 text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                          {exp.description}
                        </p>
                      </motion.div>

                      {/* Skill pills */}
                      <div className="relative z-10 flex flex-wrap gap-2 mt-1">
                        {exp.skills.map((skill, i) => (
                          <span
                            key={skill}
                            className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${skillColors[i % skillColors.length]}`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* ── Timeline node (centre dot) ── */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
                      viewport={{ once: true }}
                      className="w-5 h-5 rounded-full bg-violet-600 dark:bg-violet-500 border-4 border-white dark:border-[#0a0a0f] shadow-md shadow-violet-500/30 z-10"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── Bottom CTA strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center gap-6 w-full rounded-2xl p-8
            bg-violet-600 dark:bg-violet-700
            shadow-xl shadow-violet-500/20 dark:shadow-violet-900/40
            relative overflow-hidden"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none rounded-2xl"
          />
          <div className="relative text-center sm:text-left">
            <p className="text-violet-200 text-sm font-medium mb-1">Ready to collaborate?</p>
            <p className="text-white font-bold text-xl">Let's build something great together.</p>
          </div>
          <div className="relative sm:ml-auto shrink-0">
            <a
              href="mailto:francis@example.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-violet-700 font-bold text-sm hover:bg-violet-50 transition-colors duration-200 shadow-md"
            >
              Get in touch
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;






