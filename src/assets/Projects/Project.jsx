import { React, useRef, useEffect } from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { motion, useInView } from "framer-motion";
import { FramerContainer, Item } from "../FramerMotion/ProjectAnimation";
const data = [
  {
    imageUrl: "/glmweb.webp",
    title: "GLM Security Training Center",
    description: ` a school website built with TailwindCSS , ReactJS , React
    Slicker , Cloudinary and Facebook Chat Plugin.`,
    websiteSrc: "https://glmsecuritytrainingcenter.com",

    icon: [
      {
        github: "Private Repo",
        arrowRight: <BsBoxArrowUpRight size={20} />,
      },
    ],
  },

  {
    imageUrl: "/strikewing.webp",
    title: "Strike Wing Aviation Center",
    description: `  A private school website built with Styled Components , ReactJS , React
    Slicker and Cloudinary.`,
    websiteSrc: "https://strikewingaviation.com",

    icon: [
      {
        github: "Private Repo",
        arrowRight: <BsBoxArrowUpRight size={20} />,
      },
    ],
  },

  {
    imageUrl: "/beshify.webp",
    title: "Beshify App",
    description: `The app that brings emoji magic to your text, built with ReactJS , Tailwind and React Hot Toast. `,
    websiteSrc: "https://beshyapp.vercel.app",
    githubSrc: "https://github.com/fiel777/beshyapp",
    icon: [
      {
        github: <AiFillGithub size={20} />,
        arrowRight: <BsBoxArrowUpRight size={20} />,
      },
    ],
  },

  {
    imageUrl: "/rmgm.webp",
    title: "Faculty Loading With Attendance System",
    description: `This application is a windows form built with C# , SqlLocalDB  and Guna UI framework. `,
    websiteSrc: "https://beshyapp.vercel.app",

    icon: [
      {
        github: "Private Repo",
        arrowRight: <BsBoxArrowUpRight size={20} />,
      },
    ],
  },
];

function Project() {
  const ref = useRef(null);

  return (
    <div className="dark:bg-slate-900  " id="project" ref={ref}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={FramerContainer}
        viewport={{ once: true, amount: 0.8, margin: "200px" }}
        className="max-[425px]:w-[320px] sm:max-w-2xl lg:max-w-screen-lg xl:max-w-screen-xl m-auto py-12 md:py-40 "
      >
        <div className="px-4">
          <motion.h1
            variants={Item}
            className="uppercase my-6 font-semibold sm:mb-10 sm:mt-0 md:font-bold text-3xl md:text-5xl text-start xl:mb-20"
          >
            Projects
          </motion.h1>
          <div className="grid grid-cols-1  gap-8 lg:grid-cols-2 ">
            {data.map((item, key) => (
              <motion.div variants={Item} className="relative group " key={key}>
                <div className="h-[300px] w-full lg:h-[350px] ">
                  <img
                    src={item.imageUrl}
                    className="w-full h-full object-cover rounded-lg "
                    alt="image"
                  ></img>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b  from-transparent  to-slate-700 via-transparent/30  dark:to-slate-800 group" />
                <div className="group absolute bottom-0 w-full flex flex-col p-5 text-white opacity-100 lg:opacity-0 group-hover:opacity-100 transition duration-300 lg:group-hover:-translate-y-4">
                  <h1 className="capitalize text-sm font-semibold select-none md:text-lg   ">
                    {item.title}
                  </h1>
                  <p className="font-light text-xs select-none md:text-base ">
                    {item.description}
                  </p>

                  {item.icon.map((icons, key) => (
                    <div className="pt-4" key={key}>
                      <ul className="flex gap-4 items-center">
                        <li className="cursor-pointer text-sm font-light">
                          <a href={item.githubSrc} target="_blank">
                            {icons.github}
                          </a>
                        </li>
                        <li className="cursor-pointer">
                          <a href={item.websiteSrc} target="_blank">
                            {icons.arrowRight}
                          </a>
                        </li>
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Project;
