import { React, useRef, useEffect } from "react";
import { TfiClose } from "react-icons/tfi";
import { BsArrowRight } from "react-icons/bs";

function ProjectModal({ closeModal, data }) {
  const boxRef = useRef(null);

  useEffect(() => {
    window.onclick = (event) => {
      if (
        event.target.contains(boxRef.current) &&
        event.target !== boxRef.current
      ) {
        closeModal(false);
      }
    };
  }, []);



  return (
    <div className=" bg-white/50 dark:bg-slate-600/50  inset-0 fixed text-black z-50 text-sm flex flex-col items-center justify-center ">
      <div
        className="aspect-video p-4 bg-white dark:bg-slate-800 shadow-lg rounded-md dark:shadow-none dark:border-none absolute  mx-4 min-[425px]:w-10/12 sm:w-[40rem] lg:w-[62.3rem] md:w-[40rem] xl:w-[75em] "
        ref={boxRef}
      >
        <TfiClose
          size={16}
          className="hover:scale-125 transition duration-300 text-black dark:text-white cursor-pointer  "
          onClick={() => closeModal()}
        />

        <div className="py-4 flex justify-center items-center text-white flex-col gap-4">
          <h1 className="font-normal text-center text-sm capitalize text-black dark:text-white md:text-base  ">
            {data.title}
          </h1>
          <div className="aspect-video w-full h-full flex flex-col items-center gap-6 ">
            <iframe
              className="object-cover w-full h-full border border-white dark:border-none"
              src={data.youtubeSrc}
              title="YouTube video player"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>

        {data.srcLink !== "web-link" ? (
          <div
            className="w-[170px] h-[40px] md:w[200px]  border relative border-black dark:bg-white dark:border-white   flex items-center justify-center gap-4 group text-black z-10 hover:text-white cursor-pointer"
            onClick={()=>  window.open(data.websiteSrc, '_blank')}
          >
            <div className="flex justify-center items-center gap-4 absolute inset-0 w-[10px]  bg-black dark:bg-slate-800  group-hover:w-full transition-all duration-500 ease-out -z-10"></div>
            <span className="text-sm ">Proceed to Site</span>
            <BsArrowRight size={16} />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default ProjectModal;
