"use client";

import React from "react";
import Link from "next/link";
import {
  FaLinkedin,
  FaGithub,
  FaWhatsappSquare,
  FaGlobe,
} from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 dark:bg-black border-t border-purple-200 dark:border-gray-700 py-10">
      <div className="w-[90%] max-w-6xl mx-auto">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <h1 className="text-2xl font-bold text-purple-700 dark:text-purple-400 mb-3">
              Dev Francis
            </h1>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Software Engineer focused on building scalable, responsive, and
              modern web applications with exceptional user experiences.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Contact
            </h2>

            <div className="space-y-4">

              <Link
                href="mailto:francismm20236@gmail.com"
                className="flex items-center gap-3 hover:text-purple-600 transition">
                <GrMail className="text-xl" />
                <span className="text-sm">
                  francismm20236@gmail.com
                </span>
              </Link>

              <Link
                href="https://wa.me/254793720578"
                target="_blank"
                className="flex items-center gap-3 hover:text-green-600 transition">
                <FaWhatsappSquare className="text-2xl" />
                <span className="text-sm">
                  +254 793 720 578
                </span>
              </Link>

            </div>
          </div>

          {/* Social Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Connect
            </h2>

            <div className="flex items-center gap-5">

              <Link
                href="https://code-with-mainaa-3m5a.vercel.app/"
                target="_blank"
                className="hover:scale-110 transition">
                <FaGlobe className="text-2xl text-purple-600" />
              </Link>

              <Link
                href="https://www.linkedin.com/in/francis-mainaa-2116342b2"
                target="_blank"
                className="hover:scale-110 transition">
                <FaLinkedin className="text-2xl text-blue-600" />
              </Link>

              <Link
                href="https://github.com/Maina-git"
                target="_blank"
                className="hover:scale-110 transition">
                <FaGithub className="text-2xl text-gray-800 dark:text-white" />
              </Link>

            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-purple-200 dark:border-gray-700 mt-10 pt-6">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Dev Francis. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;







