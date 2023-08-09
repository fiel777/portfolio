import React from "react";

function About() {
  return (
    <div className="dark:bg-slate-800  dark:text-white font-primary">
      <div className="max-[425px]:w-[320px] sm:max-w-2xl lg:max-w-screen-lg xl:max-w-screen-xl m-auto py-20 md:py-60 l lg:py-96">
        <div className="px-4 flex flex-col items-center lg:flex  lg:items-center lg:justify-center lg:flex-row gap-8 lg:gap-12 xl:gap-20  ">
          <div className="lg:flex-1">
            <h1 className="mb-6 uppercase font-semibold md:font-bold text-3xl md:text-5xl text-start">
              About Me
            </h1>
            <p className="text-sm leading-8 font-light md:text-base text-start lg:text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
              veritatis atque laborum ut possimus, natus dolorem consequatur
              debitis. Quae dolore, adipisci, exercitationem eveniet debitis
              illo voluptates iusto magni blanditiis a vero quod fugiat facere.
              Consectetur minima consequatur nisi, labore saepe sed libero
              tempore dolores. Vitae quo a sint esse rem!
            </p>
          </div>
          <div className="lg:flex-1">
            <h1 className="mb-6 uppercase text-sm  font-normal md:text-base md:font-medium lg:my-6">
              Technical
            </h1>
            <p className="text-sm leading-8 font-light md:text-base text-start lg:text-justify ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
              veritatis atque laborum ut possimus, natus dolorem consequatur
              debitis. Quae dolore, adipisci, exercitationem eveniet debitis
              illo voluptates iusto magni blanditiis a vero quod fugiat facere.
              Consectetur minima consequatur nisi, labore saepe sed libero
              tempore dolores. Vitae quo a sint esse rem!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
