import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsFacebook,BsInstagram} from "react-icons/bs";

function Footer() {
  return (
    <div className="dark:bg-white bg-slate-900 text-white dark:text-black">
      <div className="max-[425px]:w-[320px] sm:max-w-2xl lg:max-w-screen-lg xl:max-w-screen-xl m-auto py-20">
        <div className="flex flex-col-reverse items-center justify-center  gap-8 lg:flex-row-reverse lg:justify-around xl:justify-between">
          <h1 className="font-light text-sm md:text-base ">
            © 2023 Jeremiah Monfiel
          </h1>

          <ul className="flex gap-4 text-xl sm:text-2xl ">
            <li className="hover:scale-125 transition duration-200 ">
              <a href="">
                <AiFillGithub  />
              </a>
            </li>
            <li className="hover:scale-125 transition duration-200 ">
              <a href="">
                <AiFillLinkedin  />
              </a>
            </li>
            <li className="hover:scale-125 transition duration-200   ">
              <a href="">
                <BsFacebook />
              </a>
            </li>
            <li className="hover:scale-125 transition duration-200 ">
              <a href="">
                <BsInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
