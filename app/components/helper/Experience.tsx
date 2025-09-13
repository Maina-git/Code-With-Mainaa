"use client";
import React from "react";
import { FaSquareUpwork, FaSchool, FaRProject } from "react-icons/fa6";
import { motion } from "framer-motion";

const Experience = () => {
  const Experiences = [
    {
      id: 1,
      year: "2023",
      position: "Junior Web Developer",
      company: "School Internship Project",
      description:
        "Assisted in developing and maintaining the company website using HTML, CSS, and JavaScript. Gained hands-on experience in web development and teamwork.",
      icon: <FaSchool className="text-5xl text-blue-600" />,
    },
    {
      id: 2,
      year: "2024",
      position: "Frontend Developer",
      company: "VPS Kings",
      description:
        "Worked on various frontend projects using React and Tailwind CSS. Collaborated with backend developers to implement responsive designs and improve user experience.",
      icon: <FaRProject className="text-5xl text-red-600" />,
    },
    {
      id: 3,
      year: "2025",
      position: "Freelance Developer",
      company: "Self-Employed",
      description:
        "Completed multiple freelance projects for small businesses and startups. Developed custom websites and web applications tailored to client needs.",
      icon: <FaSquareUpwork className="text-5xl text-green-600" />,
    },
  ];

  return (
    <div className="w-full py-16 bg-gray-50 dark:bg-black">
      <div className="w-[90%] mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-purple-700 dark:text-purple-300 text-center mb-12">
          Experience
        </motion.h2>

        {/* Cards */}
        <div className="flex flex-col gap-8">
          {Experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row justify-between items-center p-6 border border-purple-200 dark:border-gray-700 rounded-2xl hover:shadow-md transition">
              {/* Left - text */}
              <div className="flex flex-col text-center md:text-left max-w-xl">
                <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                  {exp.year}
                </span>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {exp.position}
                </h3>
                <h4 className="text-md font-medium text-gray-600 dark:text-gray-300 mb-2">
                  {exp.company}
                </h4>
                <p className="text-purple-700 dark:text-gray-400 text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>

              {/* Right - icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.2, type: "spring" }}
                viewport={{ once: true }}
                className="mt-4 md:mt-0 md:ml-6 flex-shrink-0">
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
