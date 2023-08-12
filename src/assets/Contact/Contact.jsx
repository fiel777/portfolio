import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { FramerContainer, Item } from "../FramerMotion/DefaultAnimation";

function Contact() {
  return (
    <div className="dark:bg-slate-800 bg-white">
      <div className="max-[425px]:w-[320px] sm:max-w-2xl lg:max-w-screen-lg xl:max-w-screen-xl m-auto py-20 md:py-60">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={FramerContainer}
          viewport={{ once: true }}
          className="px-4"
        >
          <motion.h1 variants={Item} className="uppercase mb-8 font-semibold md:font-bold text-3xl md:text-5xl">
            Contact
          </motion.h1>
          <motion.p variants={Item} className="font-light text-sm md:text-base">
            Feel free to contact me through email at any time. Please don't
            hesitate to send me a message.
          </motion.p>
          <motion.div variants={Item} className="w-[200px] h-[45px] mt-8 relative text-black hover:text-white bg-white z-40 cursor-pointer    ">
            <div className="flex items-center justify-center gap-4 border border-black w-full h-full group dark:border-white  ">
              <span className="text-xs font-normal  uppercase">Email Me</span>
              <BsArrowRight size={20} className="animate-pulse " />
              <div className="absolute inset-0 -z-50 bg-black w-[10px] transition-all duration-500 ease-out group-hover:w-full dark:bg-slate-800 "></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
