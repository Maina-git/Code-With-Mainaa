"use client";
import React from "react";
import Image from "next/image";
import { ImGithub } from "react-icons/im";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-white dark:bg-[#0a0a0f]">

      {/* ── Subtle background geometry ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Large faint circle top-right */}
        <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full border border-violet-200/40 dark:border-violet-800/20" />
        <div className="absolute -top-16 -right-16 w-[380px] h-[380px] rounded-full border border-violet-200/30 dark:border-violet-800/15" />
        {/* Tiny dot grid */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.03] dark:opacity-[0.06]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="dots"
              x="0"
              y="0"
              width="24"
              height="24"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1.5" fill="#7c3aed" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
        {/* Soft violet glow blobs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-400/5 dark:bg-violet-500/8 blur-3xl rounded-full" />
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 w-[90%] max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 py-20">

        {/* LEFT: Text column */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-7 w-full md:w-1/2 text-center md:text-left"
        >
          {/* Eyebrow tag */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex justify-center md:justify-start"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300 border border-violet-200/60 dark:border-violet-700/40">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500 dark:bg-violet-400 animate-pulse inline-block" />
              Available for hire
            </span>
          </motion.div>

          {/* Name */}
          <div>
            <h2 className="font-semibold text-sm tracking-[0.2em] uppercase text-violet-500 dark:text-violet-400 mb-2">
              Francis Mainaa
            </h2>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 dark:text-white leading-[1.05] tracking-tight">
              Software{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-violet-600 dark:text-violet-400">
                  Engineer
                </span>
                {/* Underline accent */}
                <svg
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 w-full"
                  viewBox="0 0 200 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 6 Q50 1 100 5 Q150 9 198 3"
                    stroke="#7c3aed"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    className="dark:[stroke:#a78bfa]"
                  />
                </svg>
              </span>
            </h1>
          </div>

          {/* Bio */}
          <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed max-w-md mx-auto md:mx-0">
            Hey, I'm Francis — a results-driven Full Stack Web Developer with
            a strong foundation in building responsive, user-friendly, and
            performance-optimised web applications. I specialise in developing
            both frontend and backend systems to deliver fast, modern, and
            scalable digital experiences with seamless user interactions.
          </p>

          {/* GitHub + CTA row */}
          <div className="flex items-center justify-center md:justify-start gap-5">
            <Link
              href="https://github.com/Maina-git"
              className="group flex items-center gap-2.5 text-gray-700 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-200"
            >
              <span className="flex items-center justify-center w-11 h-11 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200/80 dark:border-white/10 group-hover:bg-violet-50 dark:group-hover:bg-violet-900/30 group-hover:border-violet-300 dark:group-hover:border-violet-600/50 transition-all duration-200">
                <ImGithub className="text-xl" />
              </span>
              <span className="text-sm font-medium">Explore my Readme</span>
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            {[
              { value: "4", label: "Years of", sub: "Experience" },
              { value: "80+", label: "Projects", sub: "Completed" },
            ].map(({ value, label, sub }) => (
              <div
                key={sub}
                className="relative flex items-center gap-4 px-6 py-4 rounded-2xl bg-violet-600 dark:bg-violet-700 overflow-hidden shadow-lg shadow-violet-500/20 dark:shadow-violet-900/40"
              >
                {/* subtle inner gloss */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none rounded-2xl"
                />
                <span className="relative font-black text-5xl text-white leading-none tracking-tight">
                  {value}
                </span>
                <div className="relative leading-snug">
                  <p className="text-violet-200 text-xs font-medium">{label}</p>
                  <p className="text-white text-sm font-semibold">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT: Image column */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="flex w-full md:w-1/2 justify-center items-center"
        >
          <div className="relative w-[340px] h-[340px] sm:w-[400px] sm:h-[400px]">

            {/* Outer decorative ring */}
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-full border-2 border-dashed border-violet-300/40 dark:border-violet-600/30 animate-[spin_30s_linear_infinite]"
            />

            {/* Orbit dot */}
            <div
              aria-hidden="true"
              className="absolute -top-3 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-violet-500 dark:bg-violet-400 shadow-md shadow-violet-400/50 animate-[spin_30s_linear_infinite]"
            />

            {/* Violet blob behind image */}
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-full bg-violet-600 dark:bg-violet-700"
              style={{
                clipPath: "path('M0,0 H280 Q400,200 280,400 H0 Z')",
              }}
            />

            {/* Second accent shape */}
            <div
              aria-hidden="true"
              className="absolute -bottom-3 -right-3 w-24 h-24 rounded-full bg-violet-200/60 dark:bg-violet-800/40 blur-sm"
            />

            {/* Profile image */}
            <Image
              className="rounded-full object-cover relative z-10 ring-4 ring-white/20 dark:ring-black/20"
              width={400}
              height={400}
              src="/images/Francis.jpg"
              alt="Francis"
              priority
            />

            {/* Floating badge: "Full Stack" */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.4, type: "spring", stiffness: 200 }}
              className="absolute -left-6 top-1/2 -translate-y-1/2 z-20 flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-[#1a1a27] border border-gray-100 dark:border-white/10 shadow-xl shadow-black/10 dark:shadow-black/40"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-semibold text-gray-700 dark:text-gray-200 whitespace-nowrap">
                Full Stack
              </span>
            </motion.div>

            {/* Floating badge: tech icons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1, duration: 0.4, type: "spring", stiffness: 200 }}
              className="absolute -right-6 bottom-12 z-20 flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white dark:bg-[#1a1a27] border border-gray-100 dark:border-white/10 shadow-xl shadow-black/10 dark:shadow-black/40"
            >
              {["⚛️", "🟦", "🟩"].map((icon, i) => (
                <span key={i} className="text-base leading-none">
                  {icon}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;














