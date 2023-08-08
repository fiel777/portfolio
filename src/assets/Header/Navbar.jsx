import React, { useState, useEffect } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { TfiClose } from "react-icons/tfi";

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
    <div className="py-6 shadow-sm font-primary w-full sticky top-0 dark:bg-slate-800 dark:text-white bg-white     ">
      <div className="flex justify-between px-6 items-center sm:px-12 lg:px-12 max-w-screen-2xl m-auto relative">
        <h1 className="text-sm font-bold uppercase sm:text-lg lg:text-2xl z-10 ">
          fiel
        </h1>
        <div className={`flex gap-4 sm:text-lg `}>
          <button className={`cursor-pointer z-20 ${bar ? "sm:text-white" : "sm:text-black" }`}  onClick={handleThemeChange}>
            {theme === "dark"  ? <MdLightMode className={` ${bar ? "sm:text-black" : "sm:text-white"}`} /> : <MdOutlineDarkMode className=""/>}
          </button>
          <button className="cursor-pointer z-20 dark:text-white text-black" onClick={() => setbar(!bar)}>
            {bar ? <TfiClose className="sm:text-white sm:dark:text-black" /> : <FaBarsStaggered className="" />}
          </button>
        </div>
        <div
          className={`fixed sm:inset-x-auto bg-white dark:bg-slate-900 dark:text-white inset-0 sm:absolute   sm:bg-slate-900 sm:dark:bg-white sm:dark:text-black  sm:top-[-0.35rem] sm:w-[350px] sm:right-7 sm:h-[430px]  transition-all duration-300 sm:text-white ${
            bar ? "scale-100" : "opacity-0 pointer-events-none origin-top-right  scale-x-50 scale-y-50 transition-all -z-50   "
          } `}
        >
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2">
            <ul className="flex justify-center items-center flex-col gap-4 ">
              <li className="text-xl font-medium">
                <a href="">Home</a>
              </li>
              <li className="text-xl font-medium">
                <a href="">About</a>
              </li>
              <li className="text-xl font-medium">
                <a href="">Project</a>
              </li>
              <li className="text-xl font-medium">
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
