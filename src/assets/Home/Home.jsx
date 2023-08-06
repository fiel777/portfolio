import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillHtml5 } from "react-icons/ai";
import { BsMessenger } from "react-icons/bs";

function Home() {
  return (
    <div className="h-screen bg-slate-100 dark:bg-slate-900 ">
      {/* <div className="max-w-screen-lg m-auto py-24">
        <div className="flex flex-col px-4">
          <h1 className="uppercase font-bold text-2xl">Jeremiah A. Monfiel</h1>
          <h2 className="tracking-widest text-base my-4 font-normal">
            Front End Developer
          </h2>
          <p className="text-sm leading-8 font-light">
            A 23-year-old front-end web developer in the Philippines. I
            specialize in building responsive web applications using React.
          </p>
          <ul className="flex gap-4 my-4 sm:text-lg lg:text-xl">
            <li>
              <a href="">
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a href="">
                <AiFillLinkedin />
              </a>
            </li>
            <li>
              <a href="">
                <BsMessenger />
              </a>
            </li>
          </ul>
          <div className=" items-center py-8 flex flex-col ">
            <span className=" text-center border-b-2 font-medium text-base pb-2 border-slate-800">
              Tech Stack
            </span>
            <ul className=" grid grid-flow-col grid-rows-2 gap-4 w-full justify-center  text-3xl text-orange-600 mt-6 ">
              <li className="h-12 w-12 bg-white rounded-full items-center flex justify-center shadow-md">
                <AiFillHtml5 />
              </li>
              <li className="h-12 w-12 bg-white rounded-full items-center flex justify-center shadow-md">
                <AiFillHtml5 />
              </li>
              <li className="h-12 w-12 bg-white rounded-full items-center flex justify-center shadow-md">
                <AiFillHtml5 />
              </li>
              <li className="h-12 w-12 bg-white rounded-full items-center flex justify-center shadow-md">
                <AiFillHtml5 />
              </li>
              <li className="h-12 w-12 bg-white rounded-full items-center flex justify-center shadow-md">
                <AiFillHtml5 />
              </li>
              <li className="h-12 w-12 bg-white rounded-full items-center flex justify-center shadow-md">
                <AiFillHtml5 />
              </li>
            </ul>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Home;
