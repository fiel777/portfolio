import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillHtml5 } from "react-icons/ai";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FaCss3Alt } from "react-icons/fa";
import { FiFramer } from "react-icons/fi";
import programmer from "/programmer.svg";
import {
  BiLogoJavascript,
  BiLogoTailwindCss,
  BiLogoReact,
} from "react-icons/bi";
import { motion } from "framer-motion";
import {
  FramerContainerHome,
  FramerContainerStack,
  FramerContainerPicture,
  navItem,
  techItem,
  PictureItem,
} from "../FramerMotion/HomeAnimation";

import { SiStyledcomponents } from "react-icons/si";

function Home() {
  return (
    <div className="dark:bg-slate-900" id="home">
      <div className="max-[425px]:w-[320px] sm:max-w-2xl lg:max-w-screen-lg xl:max-w-screen-xl m-auto py-20 lg:pb-52  flex flex-col items-center  lg:gap-4 lg:flex lg:flex-row lg:justify-center lg:items-center xl:gap-4">
        <motion.div
          variants={FramerContainerHome}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:px-8 px-4 md:px-8   w-full xl:flex-1 xl:h-full   "
        >
          <motion.h1
            variants={navItem}
            className="uppercase font-semibold md:font-bold text-3xl md:text-5xl text-start"
          >
            Jeremiah Monfiel
          </motion.h1>
          <motion.h2
            variants={navItem}
            className="tracking-widest my-4 text-sm  font-normal md:text-base md:font-medium"
          >
            Front End Developer
          </motion.h2>
          <motion.p
            variants={navItem}
            className="text-sm leading-8 font-light md:text-base "
          >
            Hi, I am Jeremiah Monfiel. A passionate front-end developer based in
            Philippines. My area of expertise revolves around creating
            responsive web applications using the React framework.
          </motion.p>
          <motion.ul
            variants={navItem}
            className="flex gap-4 my-6 md:my-8 sm:text-lg md:text-xl lg:text-xl e"
          >
            <li className="hover:scale-125 transition duration-200 dark:text-white">
              <a href="https://github.com/fiel777" target="_blank">
                <AiFillGithub />
              </a>
            </li>
            <li className="hover:scale-125 transition duration-200 text-blue-500 dark:text-white">
              <a href="https://www.linkedin.com/in/jeremiah-monfiel-8201b023b/" target="_blank">
                <AiFillLinkedin />
              </a>
            </li>
            <li className="hover:scale-125 transition duration-200 text-blue-600 dark:text-white ">
              <a href="https://www.facebook.com/mayamonfiel/" target="_blank">
                <BsFacebook />
              </a>
            </li>
            <li className="hover:scale-125 transition duration-200 text-rose-600 dark:text-white ">
              <a href="https://www.instagram.com/miahmonfiel" target="_blank">
                <BsInstagram />
              </a>
            </li>
          </motion.ul>
          <motion.div
            variants={FramerContainerStack}
            initial="hidden"
            animate="visible"
            className=" items-center flex flex-col  my-4 xl:flex-row  "
          >
            <motion.span
              variants={techItem}
              className=" border-b-2 font-medium text-sm pb-2 border-slate-800 dark:border-slate-50 md:text-base xl:w-1/4 xl:border-r-2 xl:border-b-0 xl:pb-0"
            >
              Tech Stack
            </motion.span>
            <ul className=" flex flex-wrap w-[calc(100%-2rem)] sm:w-full gap-4  justify-center  text-3xl  mt-8 xl:mt-0 ">
              <motion.li
                variants={techItem}
                className="h-12 w-12 md:h-15 md:w-15 bg-white rounded-full items-center flex justify-center shadow-md hover:scale-125 transition duration-200 cursor-pointer text-orange-400"
              >
                <AiFillHtml5 />
              </motion.li>
              <motion.li
                variants={techItem}
                className="h-12 w-12 md:h-15 md:w-15 bg-white rounded-full items-center flex justify-center shadow-md hover:scale-125 transition duration-200 cursor-pointer text-blue-400"
              >
                <FaCss3Alt />
              </motion.li>
              <motion.li
                variants={techItem}
                className="h-12 w-12 md:h-15 md:w-15 bg-white rounded-full items-center flex justify-center shadow-md hover:scale-125 transition duration-200 cursor-pointer text-yellow-400"
              >
                <BiLogoJavascript />
              </motion.li>
              <motion.li
                variants={techItem}
                className="h-12 w-12 md:h-15 md:w-15 bg-white rounded-full items-center flex justify-center shadow-md hover:scale-125 transition duration-200 cursor-pointer text-blue-400"
              >
                <BiLogoReact />
              </motion.li>
              <motion.li
                variants={techItem}
                className="h-12 w-12 md:h-15 md:w-15 bg-white rounded-full items-center flex justify-center shadow-md hover:scale-125 transition duration-200 cursor-pointer text-blue-400"
              >
                <BiLogoTailwindCss />
              </motion.li>
              <motion.li
                variants={techItem}
                className="h-12 w-12 md:h-15 md:w-15 bg-white rounded-full items-center flex justify-center shadow-md  hover:scale-125 transition duration-200 cursor-pointer text-rose-600"
              >
                <SiStyledcomponents />
              </motion.li>
              <motion.li
                variants={techItem}
                className="h-12 w-12 md:h-15 md:w-15 bg-white rounded-full items-center flex justify-center shadow-md  hover:scale-125 transition duration-200 cursor-pointer text-black"
              >
                <FiFramer />
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          variants={FramerContainerPicture}
          initial="hidden"
          animate="visible"
          className="w-[300px] h-[-300px] min-[640px]:w-[500px] lg:w-full lg:mb-32 xl:mb-0 xl:flex-1   "
        >
          <motion.img
            variants={PictureItem}
            src={programmer}
            className="w-full h-full"
            alt="image"
          ></motion.img>
        </motion.div>


      </div>
    </div>
  );
}

export default Home;
