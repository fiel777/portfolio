import React from "react";
import { motion } from "framer-motion";
import { FramerContainer, Item } from "../FramerMotion/DefaultAnimation";

function About() {
  return (
    <div className="dark:bg-slate-800 bg-white " id="about">
      <div className="max-[425px]:w-[320px] sm:max-w-2xl lg:max-w-screen-lg xl:max-w-screen-xl m-auto py-20 md:py-60 l lg:pt-[22rem] lg:pb-[25rem]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={FramerContainer}
          viewport={{ once: true }}
          className="px-4 flex flex-col items-center lg:flex  lg:items-center lg:justify-center lg:flex-row gap-8 lg:gap-12 xl:gap-20  "
        >
          <div className="lg:flex-1">
            <motion.h1
              variants={Item}
              className="mb-6 uppercase font-semibold md:font-bold text-3xl md:text-5xl text-start"
            >
              About Me
            </motion.h1>
            <motion.p
              variants={Item}
              className="text-sm leading-8 font-light md:text-base text-start lg:text-justify"
            >
              I am 23 years old and recently graduated from college, obtaining a
              bachelor's degree in Information Technology from STI Las Pinas
              College. Presently, my main focus revolves around responsive and
              visually appealing interfaces, while also maintaining a consistent
              commitment to learning about modern technologies. I am actively
              exploring job opportunities that can facilitate my growth as a
              front-end developer.
            </motion.p>
          </div>
          <div className="lg:flex-1 pt-6 xl:pt-12">
           
            <motion.p
              variants={Item}
              className="text-sm leading-8 font-light md:text-base text-start lg:text-justify"
            >
              I'm currently focused on tasks like connecting APIs, using React
              Hooks, and developing the back-end. Furthermore, for front-end
              development, I consistently aim to stay updated with the latest
              libraries and writing some tests in program's requirements using
              chai and Redux for state management in React.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
