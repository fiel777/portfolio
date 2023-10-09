import React, { useState, useEffect } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { TfiClose } from "react-icons/tfi";
import { motion } from "framer-motion";
import { FramerContainer, navItem } from "../FramerMotion/NavAnimation";


function Navbar() {
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")));
  const [bar, setbar] = useState();

  const handleThemeChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));

    theme === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [theme]);

  return (
    <div className=" py-6 shadow-sm  w-full sticky top-0 dark:bg-slate-800 dark:text-white bg-white z-50  dark:shadow-md   ">
      <motion.div
        variants={FramerContainer}
        initial="hidden"
        animate="visible"
        className="flex justify-between px-6 items-center sm:px-12 lg:px-12 max-w-screen-2xl m-auto relative ">
          
        <motion.h1
          variants={navItem}
          className="text-sm font-bold uppercase sm:text-lg lg:text-2xl z-40 cursor-pointer"
          onClick={() => console.log("clicked")}
        >
          fiel
        </motion.h1>
        <motion.div className={`flex gap-4 sm:text-lg z-30 `}>
          <motion.button
            variants={navItem}
            className={` cursor-pointer  ${
              bar ? "sm:text-white" : "sm:text-black"
            }`}
            onClick={handleThemeChange}
          >
            {theme === "dark" ? (
              <MdLightMode
                className={` ${bar ? "sm:text-black" : "sm:text-white"}`}
              />
            ) : (
              <MdOutlineDarkMode className="" />
            )}
          </motion.button>
          <motion.button
            variants={navItem}
            className="cursor-pointer "
            onClick={() => setbar(!bar)}
          >
            {bar ? (
              <TfiClose className=" sm:text-white sm:dark:text-black" />
            ) : (
              <FaBarsStaggered/>
            )}
          </motion.button>
        </motion.div>

        <div
          className={`fixed sm:inset-x-auto transition duration-300 bg-white sm:rounded-xl dark:bg-slate-900  inset-0 sm:absolute sm:bg-slate-900 sm:dark:bg-white sm:dark:text-black  sm:top-[-0.35rem] sm:w-[350px] sm:right-7 sm:h-[430px]   sm:text-white ${
            bar
              ? "sm:scale-100 sm:origin-top-right"
              : "opacity-0 pointer-events-none sm:origin-top-right  sm:scale-x-50 sm:scale-y-[0.4] -z-50 "
          } `}
        >
          <div className="  absolute top-1/3 left-1/2 -translate-x-1/2  ">
            <ul
              className={`  flex  justify-center items-center flex-col gap-4  transition ease-out sm:delay-150 duration-300 ${
                bar ? "translate-y-0" : " -translate-y-14  "
              }`}
            >
              <li
                className={`text-xl font-medium sm:text-white dark:sm:text-black`}
              >
                <a
                  href="#home"
                  onClick={() => setbar(!bar)}
                >
                  Home
                </a>
              </li>
              <li className="text-xl font-medium sm:text-white dark:sm:text-black ">
                <a href="#about" onClick={() => setbar(!bar)}>
                  About
                </a>
              </li>
              <li className="text-xl font-medium sm:text-white dark:sm:text-black">
                <a href="#project" onClick={() => setbar(!bar)}>
                  Project
                </a>
              </li>
              <li className="text-xl font-medium sm:text-white dark:sm:text-black ">
                <a href="#contact" onClick={() => setbar(!bar)}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Navbar;
