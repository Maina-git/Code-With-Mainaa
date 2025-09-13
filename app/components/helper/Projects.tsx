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
      link: "",
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
  ];

  // Directions for animations (looped through projects)
  const directions = [
    { x: -100, y: 0 }, // left
    { x: 100, y: 0 },  // right
    { x: 0, y: 100 },  // bottom
    { x: 0, y: -100 }, // top
  ];

  return (
    <div className="w-full py-16 bg-gray-50 dark:bg-black">
      <div className="w-[90%] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
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
                className="border border-purple-200 dark:border-gray-700 rounded-2xl hover:shadow-md transition flex flex-col overflow-hidden">
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
                      View Project <FaExternalLinkAlt className="text-xs" />
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
