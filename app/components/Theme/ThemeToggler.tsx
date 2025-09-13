"use client"
import React from "react"
import { useTheme } from "next-themes"
import { useState } from "react"
import {useEffect} from "react"
import { BiMoon, BiSun } from "react-icons/bi"

const ThemeToggler = () => {

const [mounted, setMounted] = useState(false);

const { theme, setTheme, systemTheme } =useTheme();
 
useEffect(() => {
  setMounted(true);
}, []);

if (!mounted) return null

const currentTheme = theme === "system" ? systemTheme : theme;
  return (
   <button className="p-2 cursor-pointer transition w-10 h-10 bg-blue-950 dark:bg-white rounded-full flex flex-col
   items-center justify-center" onClick={()=>setTheme(currentTheme === "dark" ? "light" : "dark")}>
    { currentTheme === "dark" ? <BiSun className="text-white dark:text-black w-7 h-7 cursor-pointer"/> : <BiMoon className="text-white dark:text-black w-7 h-7 cursor-pointer"/>}
   </button>
  )
}

export default ThemeToggler;




