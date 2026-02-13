import React from "react";
import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";
import Animation from "./lottiefiles/skills.lottie";

const Publications = () => {
  return (
    <div className="md:p-22 md:pt-24 md:pb-22 md:px-40 md:h-full select-none bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] bg-[white] p-8 md:mt-0 mt-6 pt-16">
      <h1 className="md:text-5xl text-4xl font-semibold font-rubix">
        My <span className="bg-gradient-to-r from-[#833be7cb] to-[#5521c5] bg-clip-text text-transparent">Publications</span>
      </h1>
      <hr className="md:w-44 w-32 md:mb-0 mb-4 h-3 mt-3 md:ml-0 lg:mt-4 bg-gradient-to-r from-[#c580f0ed] to-[#c580f0c8]" />

      <div className="mt-8 relative min-h-[320px]">
        <div className="md:w-6/12 border rounded-xl p-6 md:p-8 bg-white/70">
          <p className="font-poppins text-lg md:text-xl font-medium text-slate-800">No publications yet.</p>
          <p className="font-poppins text-slate-600 mt-2">Coming soon.</p>
        </div>
        <div className="hidden lg:block absolute right-0 top-0 w-5/12">
          <DotLottiePlayer src={Animation} autoplay loop style={{ height: 320 }} />
        </div>
      </div>
    </div>
  );
};

export default Publications;
