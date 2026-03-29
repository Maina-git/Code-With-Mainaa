
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
      position: "Frontend Web Developer",
      company: "Freelancer.com",
      description:
        "Working with global clients to design and build responsive, user-friendly web interfaces using React, Tailwind CSS, and modern frontend tools. Delivering high-quality projects focused on performance, accessibility, and great user experience.",
      icon: <SiFreelancer className="text-7xl text-indigo-600" />,
    },
   {
      id: 5,
      year: "2025",
      position: "Frontend Developer",
      company: "Fiverr",
      description:
        "Offering frontend development services through Fiverr gigs, specializing in building modern, responsive, and high-performance web applications. Skilled in React, Next.js, and Tailwind CSS to create visually appealing and user-friendly interfaces. Focused on delivering clean code, fast performance, and client satisfaction across multiple projects.",
      icon: <SiFiverr className="text-7xl text-green-500" />,
    },



  ];

  return (
    <div className="w-full py-20 bg-gray-50 dark:bg-black">
      <div className="w-[90%] mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-purple-700 dark:text-purple-300 text-center mb-16"
        >
          Experience
        </motion.h2>

        {/* Cards */}
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
              } justify-between items-center p-10 min-h-[200px] rounded-2xl transition`}
            >
              {/* Text */}
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

              {/* Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2 + 0.2,
                  type: "spring",
                }}
                viewport={{ once: true }}
                className="mt-6 md:mt-0 md:mx-10 flex-shrink-0"
              >
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

