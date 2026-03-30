"use client";
import React from "react";
import Image from "next/image";
import { ImGithub } from "react-icons/im";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="w-full pt-20 pb-16">
      <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        
        {/* TEXT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6 w-full md:w-1/2 text-center md:text-left">
          <h2 className="font-bold text-3xl text-purple-700 dark:text-white">
            Francis Mainaa
          </h2>

          <h1 className="text-5xl text-black font-bold dark:text-purple-500 leading-tight">
            Web & Mobile <br />
            FrontEnd Engineer
          </h1>

          <p className="text-purple-700 text-sm dark:text-white">
            Hey I am Francis a result driven Frontend Developer with strong foundation in building
            responsive, user friendly, and performance optimized web applications. My focus is on delivering
            fast, modern and engaging digital experiences that keep users coming back.
          </p>

          <span className="flex justify-center gap-10 items-center md:justify-start mb-4">
            <Link href="https://github.com/Maina-git">
              <ImGithub className="text-5xl text-black dark:text-white animate-pulse" />
            </Link>
            <p className="text-2xl font-bold text-purple-700">
              Explore my Readme
            </p>
          </span>

          <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
            <div className="flex items-center justify-center p-4 gap-2 rounded-lg shadow-lg bg-purple-700">
              <h1 className="font-bold text-5xl text-white">4</h1>
              <div>
                <p className="text-white text-sm">
                  Years of <br /> Experience
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center p-4 gap-2 rounded-lg shadow-lg bg-purple-700">
              <h1 className="font-bold text-5xl text-white">80+</h1>
              <div>
                <p className="text-white text-sm">
                  Projects <br /> completed
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* IMAGE SECTION WITH WAVY BORDER */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex w-full md:w-1/2 justify-center items-center"
        >
          <div className="relative w-[400px] h-[400px]">

            {/* Wavy Shape Background */}
            <div
              className="absolute inset-0 bg-purple-700 rounded-full"
              style={{
                clipPath: "path('M0,0 H280 Q400,200 280,400 H0 Z')",
              }}
            ></div>

            {/* Image */}
            <Image
              className="rounded-full object-cover relative z-10"
              width={400}
              height={400}
              src="/images/Francis.jpg"
              alt="Francis"
            />
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Hero;











