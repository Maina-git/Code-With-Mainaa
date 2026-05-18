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
// Programming Languages
import { SiPython } from "react-icons/si";

// Frameworks & Libraries


// Backend & Databases
import { SiNodedotjs } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiFirebase } from "react-icons/si";

// Machine Learning
import { SiTensorflow } from "react-icons/si";
import { SiScikitlearn } from "react-icons/si";





const About = () => {





/*
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        {
          id: 1,
          title: "HTML 5",
          description: "The standard markup language for creating web pages.",
          icon: <FaHtml5 className="text-orange-600 text-5xl" />,
        },
        {
          id: 2,
          title: "CSS 3",
          description: "Used to style and design web pages.",
          icon: <FaCss3Alt className="text-blue-600 text-5xl" />,
        },
        {
          id: 3,
          title: "JavaScript",
          description: "Adds interactivity and logic to websites.",
          icon: <IoLogoJavascript className="text-yellow-500 text-5xl" />,
        },
        {
          id: 4,
          title: "TypeScript",
          description: "JavaScript with static typing.",
          icon: <BiLogoTypescript className="text-blue-500 text-5xl" />,
        },
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        {
          id: 5,
          title: "React JS",
          description: "Build dynamic user interfaces.",
          icon: <RiReactjsLine className="text-cyan-400 text-5xl" />,
        },
        {
          id: 6,
          title: "Next JS",
          description: "Production-ready React framework.",
          icon: <SiNextdotjs className="text-black dark:text-white text-5xl" />,
        },
        {
          id: 7,
          title: "Tailwind CSS",
          description: "Utility-first CSS framework.",
          icon: <RiTailwindCssFill className="text-sky-400 text-5xl" />,
        },
        {
          id: 8,
          title: "Bootstrap",
          description: "Component-based UI framework.",
          icon: <FaBootstrap className="text-purple-600 text-5xl" />,
        },
      ],
    },
    {
      title: "AI Tools",
      skills: [
        {
          id: 9,
          title: "GitHub Copilot",
          description: "AI coding assistant.",
          icon: <SiGithubcopilot className="text-green-500 text-5xl" />,
        },
        {
          id: 10,
          title: "ChatGPT",
          description: "AI for coding, debugging & content.",
          icon: <MdOutlineSmartToy className="text-green-500 text-5xl" />,
        },
        {
          id: 11,
          title: "Claude AI",
          description: "AI assistant for problem-solving.",
          icon: <MdSmartToy className="text-purple-500 text-5xl" />,
        },
        {
          id: 12,
          title: "Git & GitHub",
          description: "Version control & collaboration.",
          icon: <ImGithub className="text-gray-800 dark:text-white text-5xl" />,
        },
      ],
    },
  ];
  */

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      {
        id: 1,
        title: "HTML 5",
        description: "The standard markup language for creating web pages.",
        icon: <FaHtml5 className="text-orange-600 text-5xl" />,
      },
      {
        id: 2,
        title: "CSS 3",
        description: "Used to style and design web pages.",
        icon: <FaCss3Alt className="text-blue-600 text-5xl" />,
      },
      {
        id: 3,
        title: "JavaScript",
        description: "Adds interactivity and logic to websites.",
        icon: <IoLogoJavascript className="text-yellow-500 text-5xl" />,
      },
      {
        id: 4,
        title: "TypeScript",
        description: "JavaScript with static typing.",
        icon: <BiLogoTypescript className="text-blue-500 text-5xl" />,
      },
      {
        id: 5,
        title: "Python",
        description: "Used for backend development and machine learning.",
        icon: <SiPython className="text-blue-400 text-5xl" />,
      },
    ],
  },

  {
    title: "Frameworks & Libraries",
    skills: [
      {
        id: 6,
        title: "React JS",
        description: "Build dynamic user interfaces.",
        icon: <RiReactjsLine className="text-cyan-400 text-5xl" />,
      },
      {
        id: 7,
        title: "Next JS",
        description: "Production-ready React framework.",
        icon: <SiNextdotjs className="text-black dark:text-white text-5xl" />,
      },
      {
        id: 8,
        title: "Tailwind CSS",
        description: "Utility-first CSS framework.",
        icon: <RiTailwindCssFill className="text-sky-400 text-5xl" />,
      },
      {
        id: 9,
        title: "Bootstrap",
        description: "Component-based UI framework.",
        icon: <FaBootstrap className="text-purple-600 text-5xl" />,
      },
    ],
  },

  {
    title: "Backend & Databases",
    skills: [
      {
        id: 10,
        title: "Node.js / Express.js",
        description: "Backend runtime and server framework.",
        icon: <SiNodedotjs className="text-green-600 text-5xl" />,
      },
      {
        id: 11,
        title: "MongoDB",
        description: "NoSQL database for scalable applications.",
        icon: <SiMongodb className="text-green-500 text-5xl" />,
      },
      {
        id: 12,
        title: "PostgreSQL",
        description: "Powerful relational database system.",
        icon: <SiPostgresql className="text-blue-500 text-5xl" />,
      },
      {
        id: 13,
        title: "Firebase",
        description: "Backend-as-a-Service for authentication and storage.",
        icon: <SiFirebase className="text-yellow-500 text-5xl" />,
      },
    ],
  },

  {
    title: "Machine Learning",
    skills: [
      {
        id: 14,
        title: "TensorFlow",
        description: "Deep learning and neural networks framework.",
        icon: <SiTensorflow className="text-orange-500 text-5xl" />,
      },
      {
        id: 15,
        title: "Scikit-learn",
        description: "Machine learning library for Python.",
        icon: <SiScikitlearn className="text-yellow-600 text-5xl" />,
      },
    ],
  },

  {
    title: "AI Tools",
    skills: [
      {
        id: 16,
        title: "GitHub Copilot",
        description: "AI coding assistant.",
        icon: <SiGithubcopilot className="text-green-500 text-5xl" />,
      },
      {
        id: 17,
        title: "ChatGPT",
        description: "AI for coding, debugging & content.",
        icon: <MdOutlineSmartToy className="text-green-500 text-5xl" />,
      },
      {
        id: 18,
        title: "Claude AI",
        description: "AI assistant for problem-solving.",
        icon: <MdSmartToy className="text-purple-500 text-5xl" />,
      },
      {
        id: 19,
        title: "Git & GitHub",
        description: "Version control & collaboration.",
        icon: <ImGithub className="text-gray-800 dark:text-white text-5xl" />,
      },
    ],
  },
];






  return (
    <div className="flex flex-col items-center py-12">
      
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-[90%] text-center space-y-6"
      >
        <h1 className="text-3xl font-bold text-purple-800 dark:text-white">
          About Me
        </h1>

        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          I specialize in building modern, responsive, and scalable web
          applications with clean code and great user experience.
        </p>
      </motion.div>

      {/* SKILLS */}
      <div className="mt-10 w-[90%] space-y-12">
        {skillCategories.map((category, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}>
            <h2 className="text-2xl font-semibold text-center mb-6 text-purple-800 dark:text-purple-300">
              {category.title}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center p-6 rounded-2xl border border-purple-200 dark:border-gray-700 hover:shadow-md transition hover:-translate-y-2">
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
        ))}
      </div>
    </div>
  );
};

export default About;













