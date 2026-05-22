/*
"use client";

import React from "react";
import Link from "next/link";
import {
  FaLinkedin,
  FaGithub,
  FaWhatsappSquare,
  FaGlobe,
} from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 dark:bg-black border-t border-purple-200 dark:border-gray-700 py-10">
      <div className="w-[90%] max-w-6xl mx-auto">

        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <h1 className="text-2xl font-bold text-purple-700 dark:text-purple-400 mb-3">
              Dev Francis
            </h1>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Software Engineer focused on building scalable, responsive, and
              modern web applications with exceptional user experiences.
            </p>
          </div>

        
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Contact
            </h2>

            <div className="space-y-4">

              <Link
                href="mailto:francismm20236@gmail.com"
                className="flex items-center gap-3 hover:text-purple-600 transition">
                <GrMail className="text-xl" />
                <span className="text-sm">
                  francismm20236@gmail.com
                </span>
              </Link>

              <Link
                href="https://wa.me/254793720578"
                target="_blank"
                className="flex items-center gap-3 hover:text-green-600 transition">
                <FaWhatsappSquare className="text-2xl" />
                <span className="text-sm">
                  +254 793 720 578
                </span>
              </Link>

            </div>
          </div>

      
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Connect
            </h2>

            <div className="flex items-center gap-5">

              <Link
                href="https://code-with-mainaa-3m5a.vercel.app/"
                target="_blank"
                className="hover:scale-110 transition">
                <FaGlobe className="text-2xl text-purple-600" />
              </Link>

              <Link
                href="https://www.linkedin.com/in/francis-mainaa-2116342b2"
                target="_blank"
                className="hover:scale-110 transition">
                <FaLinkedin className="text-2xl text-blue-600" />
              </Link>

              <Link
                href="https://github.com/Maina-git"
                target="_blank"
                className="hover:scale-110 transition">
                <FaGithub className="text-2xl text-gray-800 dark:text-white" />
              </Link>

            </div>
          </div>
        </div>

        <div className="border-t border-purple-200 dark:border-gray-700 mt-10 pt-6">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Dev Francis. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

*/

"use client";

import React from "react";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaWhatsappSquare, FaGlobe } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    href: "https://code-with-mainaa-3m5a.vercel.app/",
    icon: <FaGlobe className="text-base" />,
    label: "Portfolio",
    color: "text-violet-600 dark:text-violet-400",
    bg: "bg-violet-100 dark:bg-violet-900/30",
    border: "border-violet-200/60 dark:border-violet-700/40",
    hoverBorder: "hover:border-violet-400 dark:hover:border-violet-500",
  },
  {
    href: "https://www.linkedin.com/in/francis-mainaa-2116342b2",
    icon: <FaLinkedin className="text-base" />,
    label: "LinkedIn",
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-100 dark:bg-blue-900/30",
    border: "border-blue-200/60 dark:border-blue-700/40",
    hoverBorder: "hover:border-blue-400 dark:hover:border-blue-500",
  },
  {
    href: "https://github.com/Maina-git",
    icon: <FaGithub className="text-base" />,
    label: "GitHub",
    color: "text-gray-700 dark:text-gray-200",
    bg: "bg-gray-100 dark:bg-white/5",
    border: "border-gray-200/60 dark:border-white/10",
    hoverBorder: "hover:border-gray-400 dark:hover:border-gray-500",
  },
  {
    href: "https://wa.me/254793720578",
    icon: <FaWhatsappSquare className="text-base" />,
    label: "WhatsApp",
    color: "text-green-600 dark:text-green-400",
    bg: "bg-green-100 dark:bg-green-900/30",
    border: "border-green-200/60 dark:border-green-700/40",
    hoverBorder: "hover:border-green-400 dark:hover:border-green-500",
  },
];

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden bg-gray-50 dark:bg-[#0a0a0f] border-t border-gray-100 dark:border-white/[0.06]">

      {/* ── Background geometry ── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-[0.025] dark:opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="footer-dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#7c3aed" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-dots)" />
        </svg>
        {/* Violet glow centre-bottom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[160px] bg-violet-500/8 dark:bg-violet-500/10 blur-3xl rounded-full" />
        {/* Faint ring top-right */}
        <div className="absolute -top-16 -right-16 w-[260px] h-[260px] rounded-full border border-violet-200/20 dark:border-violet-800/10" />
      </div>

      <div className="relative z-10 w-[90%] max-w-6xl mx-auto pt-14 pb-8">

        {/* ── Top grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div className="flex flex-col gap-5">
            {/* Logo wordmark */}
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-violet-500 dark:text-violet-400 mb-1">
                Portfolio
              </p>
              <h1 className="font-extrabold text-2xl text-gray-900 dark:text-white tracking-tight leading-none">
                Dev{" "}
                <span className="relative inline-block">
                  <span className="text-violet-600 dark:text-violet-400">Francis</span>
                  <svg aria-hidden="true" className="absolute -bottom-0.5 left-0 w-full" viewBox="0 0 80 6" fill="none" preserveAspectRatio="none">
                    <path d="M1 4.5 Q20 1 40 3.5 Q60 6 79 2" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-xs">
              Software Engineer focused on building scalable, responsive, and modern web applications with exceptional user experiences.
            </p>

            {/* Availability badge */}
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold w-fit bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300 border border-violet-200/60 dark:border-violet-700/40">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500 dark:bg-violet-400 animate-pulse inline-block" />
              Available for hire
            </span>
          </div>

          {/* Contact */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-sm font-bold tracking-widest uppercase text-gray-900 dark:text-white whitespace-nowrap">
                Contact
              </h2>
              <div className="flex-1 h-px bg-gradient-to-r from-violet-200/60 to-transparent dark:from-violet-800/30" />
            </div>

            <div className="flex flex-col gap-3">
              <Link
                href="mailto:francismm20236@gmail.com"
                className="group flex items-center gap-3 px-4 py-3 rounded-xl bg-white dark:bg-white/[0.03] border border-gray-100 dark:border-white/[0.06] hover:border-violet-300/70 dark:hover:border-violet-600/50 hover:shadow-md hover:shadow-violet-500/8 transition-all duration-250"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-violet-100 dark:bg-violet-900/30 border border-violet-200/60 dark:border-violet-700/40 text-violet-600 dark:text-violet-400 shrink-0">
                  <GrMail className="text-sm" />
                </div>
                <span className="text-xs font-medium text-gray-600 dark:text-gray-300 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-200 truncate">
                  francismm20236@gmail.com
                </span>
              </Link>

              <Link
                href="https://wa.me/254793720578"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-4 py-3 rounded-xl bg-white dark:bg-white/[0.03] border border-gray-100 dark:border-white/[0.06] hover:border-green-300/70 dark:hover:border-green-600/50 hover:shadow-md hover:shadow-green-500/8 transition-all duration-250"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900/30 border border-green-200/60 dark:border-green-700/40 text-green-600 dark:text-green-400 shrink-0">
                  <FaWhatsappSquare className="text-sm" />
                </div>
                <span className="text-xs font-medium text-gray-600 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-200">
                  +254 793 720 578
                </span>
                <span className="ml-auto flex items-center gap-1 text-[10px] font-bold text-green-600 dark:text-green-400 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  Online
                </span>
              </Link>
            </div>
          </div>

          {/* Quick links + Social */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-sm font-bold tracking-widest uppercase text-gray-900 dark:text-white whitespace-nowrap">
                Connect
              </h2>
              <div className="flex-1 h-px bg-gradient-to-r from-violet-200/60 to-transparent dark:from-violet-800/30" />
            </div>

            {/* Social icon grid */}
            <div className="grid grid-cols-2 gap-2 mb-6">
              {socialLinks.map(({ href, icon, label, color, bg, border, hoverBorder }) => (
                <Link
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-white dark:bg-white/[0.03] border ${border} ${hoverBorder} hover:shadow-sm transition-all duration-250`}
                >
                  <div className={`flex items-center justify-center w-7 h-7 rounded-lg ${bg} border ${border} ${color} shrink-0 group-hover:scale-110 transition-transform duration-200`}>
                    {icon}
                  </div>
                  <span className={`text-xs font-semibold ${color} leading-none`}>{label}</span>
                </Link>
              ))}
            </div>

            {/* Quick nav */}
            <div className="flex flex-wrap gap-x-4 gap-y-1.5">
              {navLinks.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-xs font-medium text-gray-400 dark:text-gray-500 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-200"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="h-px bg-gradient-to-r from-transparent via-violet-200/60 dark:via-violet-800/30 to-transparent mb-6" />

        {/* ── Bottom bar ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-400 dark:text-gray-500">
            &copy; {new Date().getFullYear()}{" "}
            <span className="font-semibold text-violet-600 dark:text-violet-400">Dev Francis</span>.
            All rights reserved.
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500">
            Built with{" "}
            <span className="font-semibold text-gray-600 dark:text-gray-300">Next.js</span>
            {" · "}
            <span className="font-semibold text-gray-600 dark:text-gray-300">Tailwind CSS</span>
            {" · "}
            <span className="font-semibold text-violet-500 dark:text-violet-400">❤</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;



