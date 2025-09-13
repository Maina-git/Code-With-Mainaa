import React from "react";
import { FaConnectdevelop } from "react-icons/fa6";
import Link from "next/link";
import { IoCloseCircleSharp } from "react-icons/io5";
import ThemeToggler from "../../Theme/ThemeToggler";

interface Props {
  showNav: () => void;
  openNav: boolean;
}

const Mobile = ({ showNav, openNav }: Props) => {
  const NavLinks = [
    { id: 1, title: "Home", page: "#home" },
    { id: 2, title: "About", page: "#about" },
    { id: 3, title: "Experience", page: "#experience" },
    { id: 4, title: "Projects", page: "#projects" },
    { id: 5, title: "Contacts", page: "#contacts" },
  ];

  return (
    <>
      {openNav && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={showNav}/>
      )}
      <div
        className={`fixed top-0 right-0 h-screen w-3/4 sm:w-1/2 md:w-1/3 bg-white dark:bg-black shadow-lg z-50 transform transition-transform duration-300 ${
          openNav ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
         <ThemeToggler/>
          <button onClick={showNav}>
            <IoCloseCircleSharp className="text-5xl text-black dark:text-purple-300 hover:text-purple-900 dark:hover:text-white transition" />
          </button>
        </div>
        <nav className="flex flex-col items-start gap-6 p-6">
          {NavLinks.map((item) => (
            <Link
              key={item.id}
              href={item.page}
              onClick={showNav}
              className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-300 transition">
              {item.title}
            </Link>
          ))}
        </nav>
        <div className="absolute bottom-6 left-0 w-full px-6">
          <Link
            href="#contacts"
            onClick={showNav}
            className="block w-full text-center py-3 rounded-lg bg-purple-700 text-white font-semibold hover:bg-purple-800 transition">
            Let’s Talk
          </Link>
        </div>
      </div>
    </>
  );
};

export default Mobile;
