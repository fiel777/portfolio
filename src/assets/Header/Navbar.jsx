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
      <div className="flex justify-between px-4 items-center sm:px-12 lg:px-12 lg:max-w-screen-lg m-auto relative">
        <h1 className="text-sm font-bold uppercase sm:text-lg lg:text-2xl ">
          fiel
        </h1>
        <div
          className={`flex gap-4 sm:text-lg lg:text-xl  ${
            bar ? "sm:text-white" : "sm:text-black"
          }`}
        >
          <button className="cursor-pointer z-20 " onClick={handleThemeChange}>
            {theme === "dark" ? <MdLightMode /> : <MdOutlineDarkMode />}
          </button>
          <button className="cursor-pointer z-20" onClick={() => setbar(!bar)}>
            {bar ? <TfiClose className="" /> : <FaBarsStaggered className="" />}
          </button>
        </div>
        <div
          className={`fixed sm:inset-x-auto bg-white inset-0  sm:absolute  sm:bg-slate-900  sm:top-[-0.35rem] sm:w-[350px] sm:right-7 sm:h-[450px] sm:text-white  transition-all duration-300 delay-100 ${
            bar ? "opacity-100" : "opacity-0"
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
