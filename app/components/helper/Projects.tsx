
/*
"use client";
import React from "react";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";



const Projects = () => {
  
const projects = [
  {
    id: 1,
    title: "Travel Website",
    description:
      "A travel website that allows users to explore and book travel destinations.",
    link: "https://tripi-travel-app-ashen.vercel.app/",
    image: "/images/Screenshot (34).png",
    tools: ["React", "Tailwind CSS", "Typescript"],
  },
  {
    id: 2,
    title: "Job Portal",
    description: "A job portal that connects job seekers with employers.",
    link: "https://job-portal-indol-seven.vercel.app/",
    image: "/images/Screenshot (30).png",
    tools: ["React", "Tailwind CSS", "Typescript"],
  },
  {
    id: 3,
    title: "Blog Haven",
    description:
      "A blogging platform that allows users to create and share blog posts.",
    link: "https://generationnow.netlify.app/",
    image: "/images/Screenshot (20).png",
    tools: ["React", "Tailwind CSS", "Typescript", "Firebase"],
  },
  {
    id: 4,
    title: "GD Coding",
    description:
      "A website for a coding bootcamp that offers coding courses and resources.",
    link: "https://gdfrancis.netlify.app",
    image: "/images/Screenshot (14).png",
    tools: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 5,
    title: "Amazon Landing Page",
    description:
      "A landing page for Amazon that showcases its products and services.",
    link: "https://francisamazon.netlify.app/",
    image: "/images/Screenshot (6).png",
    tools: ["React", "CSS"],
  },
  {
    id: 6,
    title: "Car Vibe Perfect Ride",
    description:
      "A motor rental website that allows users to book motorcycles for rent.",
    link: "https://perfectride.netlify.app/",
    image: "/images/Screenshot (42).png",
    tools: ["React", "Tailwind CSS", "Typescript", "Firebase"],
  },
  {
    id: 7,
    title: "TR Road Safety Security & Authority",
    description:
      "A platform focused on road safety and security awareness and reporting.",
    link: "https://tr-road-safety-platform.vercel.app/",
    image: "/images/Screenshot (236).png",
    tools: ["React", "Tailwind CSS", "Typescript", "Firebase"],
  },

  // BACKEND PROJECTS (GitHub links)
  {
    id: 8,
    title: "Contact Manager API",
    description:
      "Backend REST API for managing contacts with authentication, CRUD operations, and error handling using Express.js and MongoDB.",
    link: "https://github.com/Maina-git/Depesh-Malvia.git",
    image: "/images/images (7).png",
    tools: ["Node.js", "Express.js", "MongoDB", "JWT"],
  },
  {
    id: 9,
    title: "Neon Prisma Backend",
    description:
      "Backend project demonstrating Neon PostgreSQL integration with Prisma ORM, including schema design and database operations.",
    link: "images/kuszapro-source-code-583537.jpg",
    image: "/images/kropekk_pl-cloud-1835332.png",
    tools: ["Node.js", "Prisma", "PostgreSQL", "Express.js"],
  },
  {
    id: 10,
    title: "Express Server & Routing System",
    description:
      "Backend project focused on Express.js server setup, routing, controllers, middleware, and structured API architecture.",
    link: "https://github.com/Maina-git/365-Days-of-Backend-Web-Development.git",
    image: "/images/kuszapro-source-code-583537.jpg",
    tools: ["Node.js", "Express.js", "REST API"],
  },

  // FINAL ANIMATED "MORE PROJECTS" CARD
  {
    id: 11,
    title: "More Projects",
    description:
      "Explore more projects, experiments, and open source contributions on my GitHub profile.",
    link: "https://github.com/Maina-git",
    image: "/images/ml.png",
    tools: ["GitHub", "Open Source", "Full Stack"],
    isAnimated: true,
  },
];


  const directions = [
    { x: -100, y: 0 },
    { x: 100, y: 0 },  
    { x: 0, y: 100 },  
    { x: 0, y: -100 }, 
  ];

  return (
    <div className="w-full py-16 bg-gray-50 dark:bg-black">
      <div className="w-[90%] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-purple-700 dark:text-purple-300 text-center mb-12">
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => {
            const direction = directions[index % directions.length]; // cycle through directions
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, ...direction }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="rounded-2xl hover:shadow-md transition flex flex-col overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image}
                    alt={project.title} 
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-2xl"/>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-medium rounded-full border border-purple-300 text-purple-700 dark:border-purple-600 dark:text-purple-300">
                        {tool}
                      </span>
                    ))}
                  </div>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-purple-700 hover:text-purple-900 dark:text-purple-300 dark:hover:text-white transition">
                      View  <FaExternalLinkAlt className="text-xs" />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;

*/


"use client";
import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Travel Website",
    description: "A travel website that allows users to explore and book travel destinations.",
    link: "https://tripi-travel-app-ashen.vercel.app/",
    image: "/images/Screenshot (34).png",
    tools: ["React", "Tailwind CSS", "Typescript"],
  },
  {
    id: 2,
    title: "Job Portal",
    description: "A job portal that connects job seekers with employers.",
    link: "https://job-portal-indol-seven.vercel.app/",
    image: "/images/Screenshot (30).png",
    tools: ["React", "Tailwind CSS", "Typescript"],
  },
  {
    id: 3,
    title: "Blog Haven",
    description: "A blogging platform that allows users to create and share blog posts.",
    link: "https://generationnow.netlify.app/",
    image: "/images/Screenshot (20).png",
    tools: ["React", "Tailwind CSS", "Typescript", "Firebase"],
  },
  {
    id: 4,
    title: "GD Coding",
    description: "A website for a coding bootcamp that offers coding courses and resources.",
    link: "https://gdfrancis.netlify.app",
    image: "/images/Screenshot (14).png",
    tools: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 5,
    title: "Amazon Landing Page",
    description: "A landing page for Amazon that showcases its products and services.",
    link: "https://francisamazon.netlify.app/",
    image: "/images/Screenshot (6).png",
    tools: ["React", "CSS"],
  },
  {
    id: 6,
    title: "Car Vibe Perfect Ride",
    description: "A motor rental website that allows users to book motorcycles for rent.",
    link: "https://perfectride.netlify.app/",
    image: "/images/Screenshot (42).png",
    tools: ["React", "Tailwind CSS", "Typescript", "Firebase"],
  },
  {
    id: 7,
    title: "TR Road Safety Security & Authority",
    description: "A platform focused on road safety and security awareness and reporting.",
    link: "https://tr-road-safety-platform.vercel.app/",
    image: "/images/Screenshot (236).png",
    tools: ["React", "Tailwind CSS", "Typescript", "Firebase"],
  },
  {
    id: 8,
    title: "Contact Manager API",
    description:
      "Backend REST API for managing contacts with authentication, CRUD operations, and error handling using Express.js and MongoDB.",
    link: "https://github.com/Maina-git/Depesh-Malvia.git",
    image: "/images/images (7).png",
    tools: ["Node.js", "Express.js", "MongoDB", "JWT"],
  },
  {
    id: 9,
    title: "Neon Prisma Backend",
    description:
      "Backend project demonstrating Neon PostgreSQL integration with Prisma ORM, including schema design and database operations.",
    link: "https://github.com/Maina-git",
    image: "/images/kropekk_pl-cloud-1835332.png",
    tools: ["Node.js", "Prisma", "PostgreSQL", "Express.js"],
  },
  {
    id: 10,
    title: "Express Server & Routing System",
    description:
      "Backend project focused on Express.js server setup, routing, controllers, middleware, and structured API architecture.",
    link: "https://github.com/Maina-git/365-Days-of-Backend-Web-Development.git",
    image: "/images/kuszapro-source-code-583537.jpg",
    tools: ["Node.js", "Express.js", "REST API"],
  },
  {
    id: 11,
    title: "More Projects",
    description:
      "Explore more projects, experiments, and open source contributions on my GitHub profile.",
    link: "https://github.com/Maina-git",
    image: "/images/ml.png",
    tools: ["GitHub", "Open Source", "Full Stack"],
    isAnimated: true,
  },
];

const CARDS_PER_VIEW = 3; // visible cards at a time

const Projects = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const touchStartX = useRef<number | null>(null);

  const total = projects.length;
  const maxIndex = total - CARDS_PER_VIEW;

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => Math.max(0, c - 1));
  }, []);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => Math.min(maxIndex, c + 1));
  }, [maxIndex]);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  // Touch / swipe support
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 40) next();
    else if (diff < -40) prev();
    touchStartX.current = null;
  };

  const visibleProjects = projects.slice(current, current + CARDS_PER_VIEW);

  const toolColors = [
    "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300 border-violet-200/60 dark:border-violet-700/40",
    "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300 border-sky-200/60 dark:border-sky-700/40",
    "bg-gray-100 text-gray-600 dark:bg-white/5 dark:text-gray-400 border-gray-200/60 dark:border-white/10",
  ];

  return (
    <section className="relative w-full py-20 overflow-hidden bg-gray-50 dark:bg-[#0a0a0f]">

      {/* ── Background geometry (matches site) ── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-[0.03] dark:opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="proj-dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#7c3aed" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#proj-dots)" />
        </svg>
        <div className="absolute -top-20 -left-20 w-[400px] h-[400px] rounded-full border border-violet-200/30 dark:border-violet-800/15" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[280px] bg-violet-400/5 dark:bg-violet-500/8 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 w-[90%] max-w-6xl mx-auto flex flex-col items-center gap-14">

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
              Portfolio
            </span>
          </div>
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-violet-500 dark:text-violet-400 mb-2">
              What I've Built
            </p>
            <h1 className="font-extrabold text-5xl sm:text-6xl text-gray-900 dark:text-white leading-[1.05] tracking-tight">
              My{" "}
              <span className="relative inline-block">
                <span className="text-violet-600 dark:text-violet-400">Projects</span>
                <svg aria-hidden="true" className="absolute -bottom-1 left-0 w-full" viewBox="0 0 140 8" fill="none" preserveAspectRatio="none">
                  <path d="M2 6 Q35 1 70 5 Q105 9 138 3" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed">
            A curated collection of web apps, platforms, and APIs — built with modern tools and a focus on clean code, great UX, and real-world impact.
          </p>
        </motion.div>

        {/* ── Slider ── */}
        <div className="w-full">
          {/* Counter */}
          <div className="flex items-center justify-between mb-6 px-1">
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
              Showing{" "}
              <span className="text-violet-600 dark:text-violet-400 font-bold">
                {current + 1}–{Math.min(current + CARDS_PER_VIEW, total)}
              </span>{" "}
              of <span className="font-bold text-gray-700 dark:text-gray-200">{total}</span> projects
            </p>
            {/* Arrow controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                disabled={current === 0}
                aria-label="Previous projects"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5
                  hover:border-violet-400 dark:hover:border-violet-500 hover:bg-violet-50 dark:hover:bg-violet-900/30
                  disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600 dark:text-gray-300" />
                </svg>
              </button>
              <button
                onClick={next}
                disabled={current >= maxIndex}
                aria-label="Next projects"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5
                  hover:border-violet-400 dark:hover:border-violet-500 hover:bg-violet-50 dark:hover:bg-violet-900/30
                  disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600 dark:text-gray-300" />
                </svg>
              </button>
            </div>
          </div>

          {/* Cards track */}
          <div
            className="overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={current}
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -60 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {visibleProjects.map((project, i) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    className="group flex flex-col rounded-2xl overflow-hidden
                      bg-white dark:bg-white/[0.03]
                      border border-gray-100 dark:border-white/[0.07]
                      hover:border-violet-300/70 dark:hover:border-violet-600/50
                      hover:shadow-xl hover:shadow-violet-500/10 dark:hover:shadow-violet-900/30
                      transition-all duration-300"
                  >
                    {/* Image */}
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Image overlay on hover */}
                      <div className="absolute inset-0 bg-violet-900/0 group-hover:bg-violet-900/20 transition-all duration-300" />
                      {/* Live badge */}
                      {project.isAnimated && (
                        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-violet-600 text-white text-[11px] font-bold">
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                          GitHub
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-grow p-5">
                      {/* Title */}
                      <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2 leading-snug group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-200">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-grow mb-4">
                        {project.description}
                      </p>

                      {/* Tool pills */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tools.map((tool, idx) => (
                          <span
                            key={idx}
                            className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${toolColors[idx % toolColors.length]}`}
                          >
                            {tool}
                          </span>
                        ))}
                      </div>

                      {/* Link */}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-violet-600 dark:text-violet-400
                            hover:text-violet-800 dark:hover:text-violet-200 transition-colors duration-200 group/link w-fit"
                        >
                          View Project
                          <FaExternalLinkAlt className="text-xs transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── Dot indicators ── */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-6 h-2 bg-violet-600 dark:bg-violet-400"
                    : "w-2 h-2 bg-gray-300 dark:bg-white/20 hover:bg-violet-400 dark:hover:bg-violet-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;





