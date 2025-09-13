"use client"
import Link from "next/link";
import React from "react";
import ThemeToggler from "../../Theme/ThemeToggler";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaFileCode } from "react-icons/fa";

interface Props{
  showNav:()=>void;
}
const Navbar = ({showNav}:Props) => {

 const NavLinks = [
    { id: 1, title: "Home", page: "#home" },
    { id: 2, title: "About", page: "#about" },
    { id: 3, title: "Experience", page: "#experience" },
    { id: 4, title: "Projects", page: "#projects" },
    { id: 5, title: "Contacts", page: "#contact" },
  ];

  return (
  <div className="w-full">
  <div className="w-[90%] mx-auto flex justify-between items-center py-4 px-2 fixed top-0 left-0 right-0 
                  bg-white/60 dark:bg-black/40 backdrop-blur-md shadow-sm z-50 transition">
        {/** logo */}
        <div className="flex items-center gap-1 text-2xl font-bold">
          <FaFileCode className="font-bold text-3xl dark:text-white"/>
        </div>
        <div className="hidden md:flex gap-5 text-lg font-medium text-purple-900">
          {NavLinks.map((item) => (
            <Link
              key={item.id}
              href={item.page}
              className={`px-4 py-2 rounded-full transition text-sm dark:text-purple-100 ${
                item.title === "Contacts"
                  ? "bg-purple-700 text-white hover:bg-purple-800"
                  : "hover:text-purple-600"
              }`}>
              {item.title}
            </Link>
          ))}
        </div>
        <div className="hidden md:block">
         <ThemeToggler/>
         </div>
         <button onClick={showNav} className="md:hidden">
         <GiHamburgerMenu className="block text-3xl cursor-pointer"/>
      </button>
      </div>
    </div>
  );
};

export default Navbar;



