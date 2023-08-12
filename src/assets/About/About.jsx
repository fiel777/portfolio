import React from "react";
import { motion } from "framer-motion";
import { FramerContainer, Item } from "../FramerMotion/DefaultAnimation";

function About() {
  return (
    <div className="dark:bg-slate-800 bg-white">
      <div className="max-[425px]:w-[320px] sm:max-w-2xl lg:max-w-screen-lg xl:max-w-screen-xl m-auto py-20 md:py-60 l lg:py-96">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={FramerContainer}
          viewport={{ once: true , }}
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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
              veritatis atque laborum ut possimus, natus dolorem consequatur
              debitis. Quae dolore, adipisci, exercitationem eveniet debitis
              illo voluptates iusto magni blanditiis a vero quod fugiat facere.
              Consectetur minima consequatur nisi, labore saepe sed libero
              tempore dolores. Vitae quo a sint esse rem!
            </motion.p>
          </div>
          <div className="lg:flex-1">
            <motion.h1
              variants={Item}
              className="mb-6 uppercase text-sm  font-normal md:text-base md:font-medium lg:my-6"
            >
              Technical
            </motion.h1>
            <motion.p
              variants={Item}
              className="text-sm leading-8 font-light md:text-base text-start lg:text-justify "
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
              veritatis atque laborum ut possimus, natus dolorem consequatur
              debitis. Quae dolore, adipisci, exercitationem eveniet debitis
              illo voluptates iusto magni blanditiis a vero quod fugiat facere.
              Consectetur minima consequatur nisi, labore saepe sed libero
              tempore dolores. Vitae quo a sint esse rem!
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
