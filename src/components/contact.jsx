import React from "react";
import { LuPhone, LuMail, LuLinkedin, LuGithub, LuMapPin } from "react-icons/lu";
import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";
import Animation from "./lottiefiles/skills.lottie";

const Contact = () => {
  return (
    <div className="md:p-0 md:pt-24 md:px-40 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] bg-[white] p-8 md:mt-0 mt-6 pt-16">
      <div className="md:w-28 md:h-7 rounded-full w-16 h-5 bg-black md:px-2 space-x-5 mb-6 md:mt-0 md:pt-0 relative lg:top-0 md:top-2 top-0">
        <LuPhone className="md:inline-block text-white font-semibold relative md:left-1.5 hidden scale-50 md:scale-100 md:-top-px" size={20} />
        <span className="text-white font-poppins text-xs md:text-xs font-normal md:font-medium relative md:-left-0 -left-3 md:-top-0 -top-1 md:pb-0">
          Contact
        </span>
      </div>

      <div className="md:mb-0 relative md:-top-4">
        <h1 className="md:text-4xl md:font-semibold font-semibold text-4xl">
          <span className="bg-gradient-to-r from-[#833be7cb] to-[#5521c5] bg-clip-text text-transparent">Contact</span> Details
        </h1>
        <hr className="md:w-56 w-44 md:mb-0 mb-4 h-2 mt-3 md:ml-0 lg:mt-2 bg-gradient-to-r from-[#bf77eced] to-[#c580f0c8]" />
      </div>

      <div className="md:flex md:items-start md:justify-between mt-8">
        <div className="grid md:grid-cols-2 gap-4 md:gap-5 md:w-7/12">
          <a
            href="mailto:kdespotidou@di.uoa.gr"
            className="border rounded-xl p-5 bg-white/80 hover:bg-[#c580f018] transition-all duration-300"
          >
            <LuMail size={20} className="mb-3" />
            <p className="font-poppins text-sm text-slate-500">Email</p>
            <p className="font-poppins text-base font-medium break-all">kdespotidou@di.uoa.gr</p>
          </a>

          <a
            href="https://www.linkedin.com/in/kalliopi-despotidou/"
            target="_blank"
            rel="noreferrer"
            className="border rounded-xl p-5 bg-white/80 hover:bg-[#c580f018] transition-all duration-300"
          >
            <LuLinkedin size={20} className="mb-3" />
            <p className="font-poppins text-sm text-slate-500">LinkedIn</p>
            <p className="font-poppins text-base font-medium break-all">linkedin.com/in/kalliopi-despotidou</p>
          </a>

          <a
            href="https://github.com/Kallistina"
            target="_blank"
            rel="noreferrer"
            className="border rounded-xl p-5 bg-white/80 hover:bg-[#c580f018] transition-all duration-300"
          >
            <LuGithub size={20} className="mb-3" />
            <p className="font-poppins text-sm text-slate-500">GitHub</p>
            <p className="font-poppins text-base font-medium">github.com/Kallistina</p>
          </a>

          <div className="border rounded-xl p-5 bg-white/80">
            <LuMapPin size={20} className="mb-3" />
            <p className="font-poppins text-sm text-slate-500">Location</p>
            <p className="font-poppins text-base font-medium">Athens, Greece</p>
            <p className="font-poppins text-sm text-slate-600 mt-1">University of Athens</p>
          </div>
        </div>

        <div className="hidden lg:block md:w-5/12">
          <DotLottiePlayer src={Animation} autoplay loop />
        </div>
      </div>
    </div>
  );
};

export default Contact;
