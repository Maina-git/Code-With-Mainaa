










"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import ThemeToggler from "../../Theme/ThemeToggler";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaFileCode } from "react-icons/fa";

interface Props {
  showNav: () => void;
}

const NavLinks = [
  { id: 1, title: "Overview", page: "#home" },
  { id: 2, title: "About", page: "#about" },
  { id: 3, title: "Experience", page: "#experience" },
  { id: 4, title: "Projects", page: "#projects" },
  { id: 5, title: "Contacts", page: "#contact" },
];

const Navbar = ({ showNav }: Props) => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  // Elevate navbar on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight active section
  useEffect(() => {
    const ids = NavLinks.map((l) => l.page.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { threshold: 0.4 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "mycv/FRANCIS_MAINA_FlowCV_Resume_2026-05-18.pdf";
    link.download = "Francis_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full">
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-2 bg-white/80 dark:bg-[#0a0a0f]/90 backdrop-blur-xl shadow-lg shadow-violet-500/5 border-b border-gray-100/80 dark:border-white/[0.06]"
            : "py-4 bg-white/50 dark:bg-transparent backdrop-blur-md"
        }`}
      >
        <div className="w-[90%] max-w-6xl mx-auto flex items-center justify-between gap-4">

          {/* ── Logo ── */}
          <Link href="#home" className="group flex items-center gap-2 shrink-0">
            <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-violet-600 dark:bg-violet-700 shadow-md shadow-violet-500/30 group-hover:shadow-violet-500/50 transition-shadow duration-300">
              <FaFileCode className="text-white text-lg" />
            </div>
            <div className="hidden sm:block leading-none">
              <span className="font-extrabold text-sm text-gray-900 dark:text-white tracking-tight">
                Dev{" "}
                <span className="text-violet-600 dark:text-violet-400">Francis</span>
              </span>
            </div>
          </Link>

          {/* ── Desktop nav links ── */}
          <nav className="hidden md:flex items-center gap-1">
            {NavLinks.map((item) => {
              const isActive = active === item.page;
              const isContact = item.title === "Contacts";

              if (isContact) {
                return (
                  <Link
                    key={item.id}
                    href={item.page}
                    className="relative ml-1 px-4 py-2 rounded-full text-sm font-bold text-white bg-violet-600 hover:bg-violet-700 dark:bg-violet-600 dark:hover:bg-violet-700 shadow-md shadow-violet-500/25 hover:shadow-violet-500/40 transition-all duration-200"
                  >
                    {item.title}
                  </Link>
                );
              }

              return (
                <Link
                  key={item.id}
                  href={item.page}
                  className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-900/30"
                      : "text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-violet-50/60 dark:hover:bg-violet-900/20"
                  }`}
                >
                  {item.title}
                  {/* Active underline dot */}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-violet-500 dark:bg-violet-400" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* ── Right actions ── */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Download CV */}
            <button
              onClick={handleDownloadCV}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold
                bg-violet-600 text-white hover:bg-violet-700
                dark:bg-violet-600 dark:hover:bg-violet-700
                shadow-md shadow-violet-500/25 hover:shadow-violet-500/40
                hover:scale-[1.03] active:scale-[0.97]
                transition-all duration-200"
            >
              {/* Download icon */}
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M6.5 1v7M4 6l2.5 2.5L9 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M1.5 10.5h10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              </svg>
              Download CV
            </button>

            {/* Theme toggler — desktop only */}
            <div className="hidden md:flex items-center justify-center w-9 h-9 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 hover:border-violet-300 dark:hover:border-violet-600/50 transition-colors duration-200">
              <ThemeToggler />
            </div>

            {/* Hamburger — mobile only */}
            <button
              onClick={showNav}
              aria-label="Open menu"
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 hover:border-violet-300 dark:hover:border-violet-600/50 transition-colors duration-200"
            >
              <GiHamburgerMenu className="text-gray-700 dark:text-gray-200 text-lg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;












