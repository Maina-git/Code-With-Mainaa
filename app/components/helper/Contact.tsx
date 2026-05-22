"use client";
import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaWhatsappSquare, FaGlobe } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import Link from "next/link";
import { motion } from "framer-motion";
 
const socialLinks = [
  {
    href: "https://code-with-mainaa-3m5a.vercel.app/",
    icon: <FaGlobe className="text-xl" />,
    label: "Portfolio Website",
    sub: "Live portfolio",
    color: "text-violet-600 dark:text-violet-400",
    bg: "bg-violet-100 dark:bg-violet-900/30",
    border: "border-violet-200/60 dark:border-violet-700/40",
  },
  {
    href: "https://www.linkedin.com/in/francis-mainaa-2116342b2",
    icon: <FaLinkedin className="text-xl" />,
    label: "LinkedIn Profile",
    sub: "Professional network",
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-100 dark:bg-blue-900/30",
    border: "border-blue-200/60 dark:border-blue-700/40",
  },
  {
    href: "https://github.com/Maina-git",
    icon: <FaGithub className="text-xl" />,
    label: "GitHub Projects",
    sub: "Open source & code",
    color: "text-gray-700 dark:text-gray-200",
    bg: "bg-gray-100 dark:bg-white/5",
    border: "border-gray-200/60 dark:border-white/10",
  },
];
 
const Contact = () => {
  const [copied, setCopied] = useState(false);
 
  const copyEmail = () => {
    navigator.clipboard.writeText("francismm20236@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
 
  return (
    <section className="relative w-full py-20 overflow-hidden bg-gray-50 dark:bg-[#0a0a0f]">
 
      {/* ── Background geometry (matches site) ── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-[0.03] dark:opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="contact-dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#7c3aed" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contact-dots)" />
        </svg>
        <div className="absolute -bottom-24 -left-24 w-[420px] h-[420px] rounded-full border border-violet-200/30 dark:border-violet-800/15" />
        <div className="absolute -bottom-8 -left-8 w-[260px] h-[260px] rounded-full border border-violet-200/20 dark:border-violet-800/10" />
        <div className="absolute top-0 right-0 w-[500px] h-[260px] bg-violet-400/5 dark:bg-violet-500/8 blur-3xl rounded-full" />
      </div>
 
      <div className="relative z-10 w-[90%] max-w-5xl mx-auto flex flex-col items-center gap-14">
 
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
              Open to opportunities
            </span>
          </div>
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-violet-500 dark:text-violet-400 mb-2">
              Get In Touch
            </p>
            <h1 className="font-extrabold text-5xl sm:text-6xl text-gray-900 dark:text-white leading-[1.05] tracking-tight">
              Contact{" "}
              <span className="relative inline-block">
                <span className="text-violet-600 dark:text-violet-400">Me</span>
                <svg aria-hidden="true" className="absolute -bottom-1 left-0 w-full" viewBox="0 0 60 8" fill="none" preserveAspectRatio="none">
                  <path d="M2 6 Q15 1 30 5 Q45 9 58 3" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed">
            I'm always open to software engineering opportunities, freelance projects, collaborations, and meaningful tech conversations.
          </p>
        </motion.div>
 
        {/* ── Two-column grid ── */}
        <div className="grid md:grid-cols-2 gap-6 w-full">
 
          {/* LEFT — Direct contact */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="flex flex-col gap-5"
          >
            {/* Intro card */}
            <div className="rounded-2xl p-7 bg-white dark:bg-white/[0.03] border border-gray-100 dark:border-white/[0.07]">
              <h2 className="font-extrabold text-2xl text-gray-900 dark:text-white mb-2 tracking-tight">
                Let's Build Something <span className="text-violet-600 dark:text-violet-400">Great</span>
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                Available for full stack development, React, Next.js, UI/UX, and freelance opportunities worldwide.
              </p>
            </div>
 
            {/* Email card */}
            <div className="group relative rounded-2xl p-6 bg-white dark:bg-white/[0.03] border border-gray-100 dark:border-white/[0.07] hover:border-violet-300/70 dark:hover:border-violet-600/50 hover:shadow-lg hover:shadow-violet-500/10 dark:hover:shadow-violet-900/25 transition-all duration-300 overflow-hidden">
              <div aria-hidden="true" className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-violet-100 dark:bg-violet-900/30 border border-violet-200/60 dark:border-violet-700/40 shrink-0">
                  <GrMail className="text-violet-600 dark:text-violet-400 text-lg" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold tracking-widest uppercase text-violet-500 dark:text-violet-400 mb-1">Email</p>
                  <Link
                    href="mailto:francismm20236@gmail.com"
                    className="text-sm font-semibold text-gray-800 dark:text-gray-100 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-200 truncate block"
                  >
                    francismm20236@gmail.com
                  </Link>
                </div>
                {/* Copy button */}
                <button
                  onClick={copyEmail}
                  title="Copy email"
                  className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-gray-300 hover:border-violet-400 hover:text-violet-600 dark:hover:text-violet-400 transition-all duration-200"
                >
                  {copied ? (
                    <>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l2.5 2.5L10 3" stroke="#22c55e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      <span className="text-green-500">Copied!</span>
                    </>
                  ) : (
                    <>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect x="4" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4"/><path d="M1 8V2a1 1 0 0 1 1-1h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
                      Copy
                    </>
                  )}
                </button>
              </div>
            </div>
 
            {/* WhatsApp card */}
            <div className="group relative rounded-2xl p-6 bg-white dark:bg-white/[0.03] border border-gray-100 dark:border-white/[0.07] hover:border-green-300/70 dark:hover:border-green-600/50 hover:shadow-lg hover:shadow-green-500/10 dark:hover:shadow-green-900/25 transition-all duration-300 overflow-hidden">
              <div aria-hidden="true" className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-green-100 dark:bg-green-900/30 border border-green-200/60 dark:border-green-700/40 shrink-0">
                  <FaWhatsappSquare className="text-green-600 dark:text-green-400 text-lg" />
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-green-600 dark:text-green-400 mb-1">WhatsApp</p>
                  <Link
                    href="https://wa.me/254793720578"
                    target="_blank"
                    className="text-sm font-semibold text-gray-800 dark:text-gray-100 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
                  >
                    +254 793 720 578
                  </Link>
                </div>
                <div className="ml-auto">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border border-green-200/60 dark:border-green-700/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    Online
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
 
          {/* RIGHT — Social links + CTA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-5"
          >
            {/* Social heading */}
            <div className="rounded-2xl p-7 bg-white dark:bg-white/[0.03] border border-gray-100 dark:border-white/[0.07]">
              <div className="flex items-center gap-3 mb-5">
                <p className="font-extrabold text-xl text-gray-900 dark:text-white tracking-tight">Connect With Me</p>
                <div className="flex-1 h-px bg-gradient-to-r from-violet-200/60 to-transparent dark:from-violet-800/30" />
              </div>
 
              <div className="flex flex-col gap-3">
                {socialLinks.map(({ href, icon, label, sub, color, bg, border }) => (
                  <Link
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-4 rounded-xl border border-gray-100 dark:border-white/[0.06] hover:border-violet-300/70 dark:hover:border-violet-600/50 bg-gray-50/50 dark:bg-white/[0.02] hover:bg-white dark:hover:bg-white/[0.04] hover:shadow-md hover:shadow-violet-500/8 transition-all duration-250"
                  >
                    <div className={`flex items-center justify-center w-10 h-10 rounded-xl ${bg} border ${border} ${color} shrink-0 transition-transform duration-200 group-hover:scale-110`}>
                      {icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-800 dark:text-gray-100 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-200">
                        {label}
                      </p>
                      <p className="text-xs text-gray-400 dark:text-gray-500">{sub}</p>
                    </div>
                    <svg
                      className="w-4 h-4 text-gray-300 dark:text-gray-600 group-hover:text-violet-500 dark:group-hover:text-violet-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0"
                      fill="none" viewBox="0 0 16 16"
                    >
                      <path d="M3 13L13 3M13 3H7M13 3v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
 
            {/* Bottom CTA */}
            <div className="relative rounded-2xl p-7 bg-violet-600 dark:bg-violet-700 overflow-hidden shadow-xl shadow-violet-500/20 dark:shadow-violet-900/40">
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none rounded-2xl" />
              {/* Decorative ring */}
              <div aria-hidden="true" className="absolute -top-10 -right-10 w-40 h-40 rounded-full border border-white/10" />
              <div aria-hidden="true" className="absolute -top-4 -right-4 w-24 h-24 rounded-full border border-white/10" />
 
              <p className="relative text-violet-200 text-sm font-medium mb-1">Ready to work together?</p>
              <p className="relative font-extrabold text-xl text-white mb-5 leading-snug tracking-tight">
                Let's bring your <br className="hidden sm:block" /> idea to life.
              </p>
              <Link
                href="mailto:francismm20236@gmail.com"
                className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-violet-700 font-bold text-sm hover:bg-violet-50 transition-colors duration-200 shadow-md"
              >
                <GrMail className="text-base" />
                Send me an email
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
 
export default Contact;





