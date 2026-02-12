import React from "react";
import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";

const github = () => {
  return (
    <div className="z-10 fixed bottom-14 md:bottom-20 -left-1 flex flex-col gap-2">
      <a
        className="w-36 border border-black h-12 rounded-r-full flex items-center gap-2 pl-2 hover:bg-[#3d373d] hover:text-[#ffffff] transition-all duration-200 active:bg-zinc-300"
        href="mailto:kdespotidou@di.uoa.gr"
      >
        <div>
          <LuMail size={24} />
        </div>
        <h1 className="text-left text-base font-semibold font-rubix leading-none">Mail</h1>
      </a>

      <a
        className="w-36 border border-black h-12 rounded-r-full flex items-center gap-2 pl-2 hover:bg-[#3d373d] hover:text-[#ffffff] transition-all duration-200 active:bg-zinc-300"
        href="https://www.linkedin.com/in/kalliopi-despotidou/"
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <LuLinkedin size={24} />
        </div>
        <h1 className="text-left text-base font-semibold font-rubix leading-none">LinkedIn</h1>
      </a>

      <a
        className="w-36 border border-black h-12 rounded-r-full flex items-center gap-2 pl-2 hover:bg-[#3d373d] hover:text-[#ffffff] transition-all duration-200 active:bg-zinc-300"
        href="https://github.com/Kallistina"
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <LuGithub size={24} />
        </div>
        <h1 className="text-left text-base font-semibold font-rubix leading-none">Github</h1>
      </a>
    </div>
  );
};
export default github;
