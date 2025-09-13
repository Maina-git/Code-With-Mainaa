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
        {/** text section */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6 w-full md:w-1/2 text-center md:text-left">
          <h2 className="font-bold text-3xl text-purple-700 dark:text-white">
            Francis Mainaa
          </h2>
          <h1 className="text-5xl text-black font-bold dark:text-purple-500 leading-tight">
            Web & Software <br />
            FrontEnd Engineer
          </h1>
          <p className="text-purple-700 text-sm dark:text-white">
            Hey I am Francis  a result driven Frontend Developer with strong foundation in building
            responsive, user friendly, and performance optimized web applications. My focus is on delivering
            fast, modern and engaging digital experiences that keep users coming back.
          </p>

          <span className="flex justify-center gap-10 items-center md:justify-start mb-4">
            <Link href="https://github.com/Maina-git">
              <ImGithub className="text-5xl text-black dark:text-white animate-pulse" />
            </Link>
            <p className="text-2xl font-bold text-purple-700">Explore my Readme</p>
          </span>

          <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
            <div className="flex items-center justify-center p-4 gap-2 rounded-lg shadow-lg bg-purple-700">
              <h1 className="font-bold text-5xl text-white dark:text-white">3</h1>
              <div>
                <p className="text-white text-sm dark:text-purple-300">
                  Years of
                  <br /> Experience
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center p-4 gap-2 rounded-lg shadow-lg bg-purple-700">
              <h1 className="font-bold text-5xl text-white dark:text-white">71</h1>
              <div>
                <p className="text-white text-sm dark:text-purple-300">
                  Projects <br /> completed
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        {/** image section */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex w-full md:w-1/2 justify-center items-center">
          <Image
            className="rounded-full object-cover"
            width={400}
            height={400}
            src="/images/Francis.jpg"
            alt=""/>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
