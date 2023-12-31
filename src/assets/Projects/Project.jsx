import { React, useRef, useEffect, useState } from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { FramerContainer, Item } from "../FramerMotion/ProjectAnimation";
import ProjectModal from "./ProjectModal";

const data = [
  {
    imageUrl: "/glmweb.webp",
    title: "GLM Security Training Center",
    description: ` a school website built with TailwindCSS , ReactJS , React
      Slicker , Cloudinary and Facebook Chat Plugin.`,
    websiteSrc: "https://glmsecuritytrainingcenter.com",
    youtubeSrc: "https://www.youtube.com/embed/j-lZbYlT3_c",
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
    youtubeSrc: "https://www.youtube-nocookie.com/embed/CmRvnDGsHPk",

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
    youtubeSrc: "https://www.youtube.com/embed/hJimzqnvsbY",
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
    youtubeSrc: "https://www.youtube.com/embed/WGo4r6nfxCk",
    srcLink: "web-link",

    icon: [
      {
        github: "Private Repo",
        arrowRight: <BsBoxArrowUpRight size={20} />,
      },
    ],
  },

  {
    imageUrl: "/reese.webp",
    title: "Project clone",
    description: `Inspired of Reese Lansangan shop built with ReactJS and TailwindCSS   `,
    websiteSrc: "https://reese-clone.vercel.app",
    youtubeSrc: "https://www.youtube.com/embed/2Uisy-kd7uE",
    githubSrc: "https://github.com/fiel777/reese-clone",
    icon: [
      {
        github: <AiFillGithub size={20} />,
        arrowRight: <BsBoxArrowUpRight size={20} />,
      },
    ],
  },

  {
    imageUrl: "/orange.webp",
    title: "Orange Store",
    description: `Landing Page built with Vanilla Javascript, HTML and CSS    `,
    websiteSrc: "https://orangestore-pearl.vercel.app/",
    youtubeSrc: "https://www.youtube.com/embed/cm7OVYxbc6M",
    githubSrc: "https://github.com/fiel777/Landing-Page",
    icon: [
      {
        github: <AiFillGithub size={20} />,
        arrowRight: <BsBoxArrowUpRight size={20} />,
      },
    ],
  },

  {
    imageUrl: "/CrudJS.webp",
    title: "CRUD",
    description: `Crud built with Vanilla Javascript, LocalStorage,  HTML and CSS    `,
    websiteSrc: "https://crud-vanilla-b189ieaj9-fiel777.vercel.app",
    youtubeSrc: "https://www.youtube.com/embed/XT5fbkEcEh0",
    githubSrc: "https://github.com/fiel777/crud-vanillaJS",
    icon: [
      {
        github: <AiFillGithub size={20} />,
        arrowRight: <BsBoxArrowUpRight size={20} />,
      },
    ],
  },

  {
    imageUrl: "/nexcent.webp",
    title: "Nexcent",
    description: `Landing Page built with ReactJS `,
    websiteSrc: "https://nexcent-n8mfoidkv-fiel777.vercel.app/",
    youtubeSrc: "https://www.youtube.com/embed/5DD1PeskUSY",
    githubSrc: "https://github.com/fiel777/nexcent",
    wsrcLink: "web-link",
    icon: [
      {
        github: <AiFillGithub size={20} />,
        arrowRight: <BsBoxArrowUpRight size={20} />,
      },
    ],
  },
  
  {
    imageUrl: "/properties.webp",
    title: "Properties",
    description: `Gallery built with React JS `,
    websiteSrc: "https://properties-hvrbs7wok-fiel777.vercel.app/",
    youtubeSrc: "https://www.youtube.com/embed/Pgnj8bgoFtk",
    githubSrc: "https://github.com/fiel777/Properties",
    wsrcLink: "web-link",
    icon: [
      {
        github: <AiFillGithub size={20} />,
        arrowRight: <BsBoxArrowUpRight size={20} />,
      },
    ],
  },

  
];

function Project() {
  const [open, setOpen] = useState(false);
  const [element, setElement] = useState({});

  useEffect(() => {
    open
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflowY = "scroll");
  }, [open]);

  const handleButtonClick = () => {
    setOpen(false);
  };

  return (
    <div className="dark:bg-slate-900  " id="project">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={FramerContainer}
        viewport={{ once: true, amount: 0.8, margin: "1150px" }}
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
            {data.map((item, i) => (
              <motion.div variants={Item} className="relative group " key={i}>
                <div className="h-[300px] w-full lg:h-[350px] ">
                  <img
                    src={item.imageUrl}
                    className="w-full h-full object-cover rounded-lg "
                    alt="image"
                  ></img>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b  from-transparent  to-slate-700 via-transparent/30  dark:to-slate-500 dark:via-transparent/20 group" />
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
                        <li
                          className="cursor-pointer"
                          onClick={() => setOpen(!open) || setElement(i)}
                        >
                          {icons.arrowRight}
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

      {open && (
        <ProjectModal
          closeModal={handleButtonClick}
          data={data[element]}
        ></ProjectModal>
      )}
    </div>
  );
}

export default Project;
