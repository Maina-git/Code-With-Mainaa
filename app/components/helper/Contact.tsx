"use client";
import React from "react";
import { GrMail } from "react-icons/gr";
import { AiFillLike } from "react-icons/ai";
import { FaInstagramSquare, FaLinkedin, FaGithub, FaWhatsappSquare } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="w-full py-16 bg-gray-50 dark:bg-black flex flex-col gap-8">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center text-gray-900 dark:text-white">
        Contact Me
      </motion.h1>

      <div className="w-[90%] mx-auto flex flex-col md:flex-row items-center justify-center p-10 bg-white dark:bg-purple-900 rounded-xl shadow-lg gap-10">
        {/* Left Section - Text + Socials */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex flex-col items-start gap-6 text-gray-700 dark:text-gray-300">
          <h2 className="text-5xl font-bold text-purple-700 dark:text-purple-400">
            Get in Touch
          </h2>
          <p className="text-lg">I'd love to hear from you!</p>
          <p className="text-sm leading-relaxed">
            If you have any queries or just want to say hi, feel free to use the
            contact form or reach me through my socials.
          </p>

          {/* Email */}
          <div className="flex items-center gap-3 mt-4">
            <GrMail className="text-2xl text-purple-700 dark:text-purple-400" />
            <span className="text-lg">francismm2023@gmail.com</span>
          </div>
          {/* WhatsApp */}
          <div className="flex items-center gap-3 mt-4">
            <FaWhatsappSquare className="text-2xl text-green-700 dark:text-purple-400" />
            <span className="text-lg">+254 793 720 578</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 mt-4">
            <AiFillLike className="text-2xl" />
            <div className="flex gap-5">
              <Link href="https://www.instagram.com/francis_mainaa/">
                <FaInstagramSquare className="text-3xl text-purple-700 hover:text-purple-900 dark:text-purple-300 dark:hover:text-white transition" />
              </Link>
              <Link href="https://www.linkedin.com/in/francis-mainaa-927b3b1b6/">
                <FaLinkedin className="text-3xl text-purple-700 hover:text-purple-900 dark:text-purple-300 dark:hover:text-white transition" />
              </Link>
              <Link href="https://github.com/Maina-git">
                <FaGithub className="text-3xl text-purple-700 hover:text-purple-900 dark:text-purple-300 dark:hover:text-white transition" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Right Section - Form */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2">
          <form className="flex flex-col gap-4 bg-gray-50 dark:bg-black p-6 rounded-lg shadow-inner">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="flex-1 px-4 py-2 rounded-lg border border-purple-300 dark:border-purple-500 
                bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 outline-none"/>
              <input
                type="text"
                placeholder="Last Name"
                className="flex-1 px-4 py-2 rounded-lg border border-purple-300 dark:border-purple-500 
                bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 outline-none"/>
            </div>
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-2 rounded-lg border border-purple-300 dark:border-purple-500 
              bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 outline-none"/>
            <textarea
              rows={4}
              placeholder="Message"
              className="px-4 py-2 rounded-lg border border-purple-300 dark:border-purple-500 
              bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 outline-none"/>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-3 mt-2 bg-purple-700 hover:bg-purple-800 
              text-white font-semibold rounded-lg shadow-md transition cursor-pointer">
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
