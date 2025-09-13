"use client";
import React from "react";
import { FaHtml5, FaCss3Alt, FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";
import { ImGithub } from "react-icons/im";
import { motion } from "framer-motion";

const About = () => {
  const Skills = [
    {
      id: 1,
      title: "HTML 5",
      description: "The standard markup language for creating web pages.",
      icon: <FaHtml5 className="text-orange-600 text-5xl" />,
    },
    {
      id: 2,
      title: "CSS 3",
      description: "Used to style and design web pages with layouts, colors, and animations.",
      icon: <FaCss3Alt className="text-blue-600 text-5xl" />,
    },
    {
      id: 3,
      title: "JavaScript",
      description: "The programming language that adds interactivity and logic to websites.",
      icon: <IoLogoJavascript className="text-yellow-500 text-5xl" />,
    },
    {
      id: 4,
      title: "React JS",
      description: "A popular library for building dynamic and reusable user interfaces.",
      icon: <RiReactjsLine className="text-cyan-400 text-5xl" />,
    },
    {
      id: 5,
      title: "Tailwind CSS",
      description: "A utility-first CSS framework for fast and responsive designs.",
      icon: <RiTailwindCssFill className="text-sky-400 text-5xl" />,
    },
    {
      id: 6,
      title: "Bootstrap",
      description: "A component-based CSS framework for quick, responsive UI development.",
      icon: <FaBootstrap className="text-purple-600 text-5xl" />,
    },
    {
      id: 7,
      title: "TypeScript",
      description: "A superset of JavaScript that adds static typing for more robust code.",
      icon: <BiLogoTypescript className="text-blue-500 text-5xl" />,
    },
    {
      id: 8,
      title: "Next JS",
      description: "A React framework for production-ready web apps with SSR and API routes.",
      icon: <SiNextdotjs className="text-black dark:text-white text-5xl" />,
    },
    {
      id: 9,
      title: "Git & GitHub",
      description: "Version control and collaboration platform for code management.",
      icon: <ImGithub className="text-red-400 dark:text-white text-5xl" />,
    },
  ];

  return (
    <div className="flex flex-col items-center py-12">
      {/* Top section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-[90%] text-center space-y-6">
        <h1 className="text-3xl font-bold text-purple-800 dark:text-white">
          About Me
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          I specialize in building modern, responsive, and scalable web
          applications. My focus is on clean code, intuitive design, and
          performance optimization using the latest web technologies.
        </p>
      </motion.div>

      {/* Skills section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-10 w-[90%]">
        <h2 className="text-2xl font-semibold text-center mb-6 text-purple-800 dark:text-purple-300">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {Skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center p-6 rounded-2xl border border-purple-200 dark:border-gray-700 hover:shadow-md transition">
              {skill.icon}
              <h3 className="mt-4 text-lg font-semibold text-gray-800 dark:text-white">
                {skill.title}
              </h3>
              <p className="text-sm text-purple-700 dark:text-gray-400 mt-2 text-center">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;
