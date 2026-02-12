import React from "react";

const Projects = () => {
  return (
    <div className="md:p-22 md:pt-24 md:pb-22 md:px-40 md:h-full select-none bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] bg-[white] p-8 md:mt-0 mt-6 pt-16">
      <div className="md:w-28 md:h-7 rounded-full w-20 h-5 bg-black md:px-1 space-x-3.5 mb-6">
        <span className="text-white font-poppins text-xs md:text-xs font-normal md:font-medium relative md:left-2 left-2 md:top-0 -top-1">
          Projects
        </span>
      </div>

      <h1 className="md:text-5xl text-4xl md:font-medium font-semibold">
        My <span className="bg-gradient-to-r from-[#833be7cb] to-[#5521c5] bg-clip-text text-transparent">Projects</span>
      </h1>
      <hr className="md:w-44 w-32 md:mb-0 mb-4 h-3 mt-3 md:ml-0 lg:mt-4 bg-gradient-to-r from-[#c580f0ed] to-[#c580f0c8]" />

      <div className="mt-10 border rounded-xl p-6 md:p-8 bg-white/70">
        <p className="font-poppins text-lg md:text-xl font-medium text-slate-800">
          Add your featured projects here.
        </p>
        <p className="font-poppins text-slate-600 mt-2">
          You can include title, short description, stack, and GitHub/demo links.
        </p>
      </div>
    </div>
  );
};

export default Projects;
