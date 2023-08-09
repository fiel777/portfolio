import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";

const data = [
  {
    imageUrl: "/glmweb.webp",
    title: "GLM Security Training Center",
    description: ` It is a school website built with Tailwind , ReactJS , React
    Slicker , Cloudinary and Facebook Chat Plugin.`,

    icon: [
      {
        github: <BsBoxArrowUpRight size={20} />,
      },
    ],
  },

  {
    imageUrl: "/glmweb.webp",
    title: "GLM Security Training Center",
    description: ` It is a school website built with Tailwind , ReactJS , React
    Slicker , Cloudinary and Facebook Chat Plugin.`,

    icon: [
      {
        github: <BsBoxArrowUpRight size={20} />,
      },
    ],
  },
];

function Project() {
  return (
    <div className="dark:bg-slate-800 bg-slate-100  dark:text-white font-primary">
      <div className="max-[425px]:w-[320px] sm:max-w-2xl lg:max-w-screen-lg xl:max-w-screen-xl m-auto py-20 md:py-60 l lg:py-80">
        <div className="px-4 flex flex-col gap-8    ">
          <h1 className="uppercase font-semibold md:font-bold text-3xl md:text-5xl text-start xl:mb-20">
            Projects
          </h1>
          {data.map((item, key) => (
            <div className="relative group " key={key}>
              <div className="h-[300px] w-full  ">
                <img
                  src={item.imageUrl}
                  className="w-full h-full object-cover rounded-lg "
                  alt="image"
                ></img>
              </div>
              <div className="absolute inset-0 bg-gradient-to-b  from-transparent via-transparent to-gray-900"></div>
              <div className="absolute bottom-0 w-full flex flex-col p-5 text-white ">
                <h1 className="capitalize text-sm font-bold">{item.title}</h1>
                <p className="font-light text-xs ">{item.description}</p>

                {item.icon.map((icons, key) => (
                  <div className="pt-4" key={key}>
                    <ul>
                      <li className="cursor-pointer">{icons.github}</li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
