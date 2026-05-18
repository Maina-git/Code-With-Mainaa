
"use client";

import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaWhatsappSquare,
  FaGlobe,
} from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import Link from "next/link";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="w-full py-20 bg-gray-50 dark:bg-black">
      <div className="w-[90%] max-w-6xl mx-auto">

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Contact Me
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold text-purple-700 mb-4">
              Let’s Build Something Great
            </h2>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
           I’m always open to software engineering opportunities, freelance projects, collaborations, and meaningful tech conversations.
            </p>

            <div className="space-y-6">

              <Link
                href="mailto:francismm20236@gmail.com"
                className="flex items-center gap-4 group">
                <GrMail className="text-2xl text-purple-600" />
                <span className="group-hover:text-purple-600 transition">
                  francismm20236@gmail.com
                </span>
              </Link>

              <Link
                href="https://wa.me/254793720578"
                target="_blank"
                className="flex items-center gap-4 group">
                <FaWhatsappSquare className="text-2xl text-green-600" />
                <span className="group-hover:text-green-600 transition">
                  +254 793 720 578
                </span>
              </Link>

            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-700 to-purple-900 
            p-8 rounded-2xl shadow-xl text-white">
            <h2 className="text-2xl font-bold mb-8">
              Connect With Me
            </h2>

            <div className="space-y-5">

              <Link
                href="https://code-with-mainaa-3m5a.vercel.app/"
                target="_blank"
                className="flex items-center gap-4 hover:translate-x-2 transition">
                <FaGlobe className="text-2xl" />
                <span>Portfolio Website</span>
              </Link>

              <Link
                href="https://www.linkedin.com/in/francis-mainaa-2116342b2"
                target="_blank"
                className="flex items-center gap-4 hover:translate-x-2 transition">
                <FaLinkedin className="text-2xl" />
                <span>LinkedIn Profile</span>
              </Link>

              <Link
                href="https://github.com/Maina-git"
                target="_blank"
                className="flex items-center gap-4 hover:translate-x-2 transition">
                <FaGithub className="text-2xl" />
                <span>GitHub Projects</span>
              </Link>
            </div>

            <div className="mt-10 border-t border-purple-400 pt-6">
              <p className="text-sm opacity-90">
               Available for software development, full stack development,
                React, Next.js, UI/UX, and freelance opportunities.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;








