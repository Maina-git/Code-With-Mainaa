import React from "react";
import Link from "next/link";
import { IoCloseCircleSharp } from "react-icons/io5";
import ThemeToggler from "../../Theme/ThemeToggler";

interface Props {
  showNav: () => void;
  openNav: boolean;
}

const NavLinks = [
  { id: 1, title: "Overview", page: "#home", emoji: "🏠" },
  { id: 2, title: "About", page: "#about", emoji: "👤" },
  { id: 3, title: "Experience", page: "#experience", emoji: "💼" },
  { id: 4, title: "Projects", page: "#projects", emoji: "🚀" },
  { id: 5, title: "Contacts", page: "#contacts", emoji: "✉️" },
];

const Mobile = ({ showNav, openNav }: Props) => {
  return (
    <>
      {/* ── Backdrop ── */}
      {openNav && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={showNav}
          aria-hidden="true"
        />
      )}

      {/* ── Drawer ── */}
      <div
        className={`fixed top-0 right-0 h-screen w-[78%] sm:w-[60%] md:w-[40%]
          bg-white dark:bg-[#0a0a0f]
          border-l border-gray-100 dark:border-white/[0.06]
          shadow-2xl shadow-violet-500/10 dark:shadow-violet-900/30
          z-50 flex flex-col
          transform transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${openNav ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Background dot grid */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden rounded-none">
          <svg className="absolute inset-0 w-full h-full opacity-[0.025] dark:opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="mob-dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="#7c3aed" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#mob-dots)" />
          </svg>
          {/* Violet glow bottom */}
          <div className="absolute bottom-0 left-0 w-full h-48 bg-violet-500/5 dark:bg-violet-500/8 blur-3xl" />
        </div>

        {/* ── Header ── */}
        <div className="relative z-10 flex items-center justify-between px-6 py-5 border-b border-gray-100 dark:border-white/[0.06]">
          {/* Logo wordmark */}
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-violet-600 shadow-md shadow-violet-500/30">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M5 11l-3-3 3-3M11 5l3 3-3 3M9.5 3l-3 10" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="font-extrabold text-sm text-gray-900 dark:text-white tracking-tight">
              Dev <span className="text-violet-600 dark:text-violet-400">Francis</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Theme toggler */}
            <div className="flex items-center justify-center w-9 h-9 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5">
              <ThemeToggler />
            </div>
            {/* Close */}
            <button
              onClick={showNav}
              aria-label="Close menu"
              className="flex items-center justify-center w-9 h-9 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 hover:border-violet-300 dark:hover:border-violet-600/50 hover:bg-violet-50 dark:hover:bg-violet-900/20 transition-all duration-200"
            >
              <IoCloseCircleSharp className="text-xl text-gray-600 dark:text-gray-300" />
            </button>
          </div>
        </div>

        {/* ── Availability badge ── */}
        <div className="relative z-10 px-6 pt-5 pb-1">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300 border border-violet-200/60 dark:border-violet-700/40">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-500 dark:bg-violet-400 animate-pulse inline-block" />
            Available for hire
          </span>
        </div>

        {/* ── Nav links ── */}
        <nav className="relative z-10 flex flex-col gap-1.5 px-4 pt-4 flex-1">
          {NavLinks.map((item, i) => (
            <Link
              key={item.id}
              href={item.page}
              onClick={showNav}
              style={{ animationDelay: `${i * 55}ms` }}
              className={`group flex items-center gap-3 px-4 py-3.5 rounded-2xl
                border border-transparent
                hover:border-violet-200/70 dark:hover:border-violet-700/40
                hover:bg-violet-50/70 dark:hover:bg-violet-900/20
                ${item.title === "Contacts"
                  ? "bg-violet-600 dark:bg-violet-700 border-transparent! shadow-md shadow-violet-500/20"
                  : "bg-gray-50/60 dark:bg-white/[0.025]"
                }
                transition-all duration-200`}
            >
              {/* Icon bubble */}
              <div className={`flex items-center justify-center w-9 h-9 rounded-xl text-base shrink-0 transition-transform duration-200 group-hover:scale-110
                ${item.title === "Contacts"
                  ? "bg-white/20"
                  : "bg-white dark:bg-white/[0.05] border border-gray-100 dark:border-white/[0.07]"
                }`}
              >
                {item.emoji}
              </div>

              {/* Label */}
              <span className={`text-sm font-semibold transition-colors duration-200
                ${item.title === "Contacts"
                  ? "text-white"
                  : "text-gray-700 dark:text-gray-200 group-hover:text-violet-600 dark:group-hover:text-violet-400"
                }`}
              >
                {item.title}
              </span>

              {/* Arrow */}
              <svg
                className={`w-4 h-4 ml-auto transition-all duration-200 group-hover:translate-x-0.5
                  ${item.title === "Contacts"
                    ? "text-white/70"
                    : "text-gray-300 dark:text-gray-600 group-hover:text-violet-500 dark:group-hover:text-violet-400"
                  }`}
                fill="none" viewBox="0 0 16 16"
              >
                <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          ))}
        </nav>

        {/* ── Footer CTA ── */}
        <div className="relative z-10 px-4 pb-8 pt-4">
          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-violet-200/60 dark:via-violet-800/30 to-transparent mb-5" />

          {/* CTA card */}
          <div className="relative rounded-2xl p-5 bg-violet-600 dark:bg-violet-700 overflow-hidden shadow-xl shadow-violet-500/20 dark:shadow-violet-900/40">
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl pointer-events-none" />
            <div aria-hidden="true" className="absolute -top-6 -right-6 w-20 h-20 rounded-full border border-white/10" />
            <p className="relative text-violet-200 text-xs font-medium mb-0.5">Ready to collaborate?</p>
            <p className="relative font-extrabold text-white text-base mb-3 leading-tight">
              Let's build something great.
            </p>
            <Link
              href="#contacts"
              onClick={showNav}
              className="relative inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-violet-700 font-bold text-sm hover:bg-violet-50 transition-colors duration-200 shadow-md w-full justify-center"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <rect x="1" y="3" width="12" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
                <path d="M1 5l6 3.5L13 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mobile;



