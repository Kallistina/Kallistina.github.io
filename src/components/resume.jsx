import React from "react";
import { LuFileText } from "react-icons/lu";

const Resume = () => {
  return (
    <div className="md:p-22 md:pt-24 md:pb-22 md:px-40 md:h-full select-none bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] bg-[white] p-8 md:mt-0 mt-6 pt-16">
      <div className="md:w-28 md:h-7 rounded-full w-20 h-5 bg-black md:px-1 space-x-3.5 mb-6">
        <LuFileText className="md:inline-block text-white font-semibold relative md:left-1.5 hidden scale-50 md:scale-100 md:-top-px" size={22} />
        <span className="text-white font-poppins text-xs md:text-xs font-normal md:font-medium relative md:-left-0 -left-1 md:-top-0 -top-1 md:pb-0">
          Resume
        </span>
      </div>

      <div className="md:flex md:justify-between md:gap-10">
        <div className="md:w-6/12">
          <h1 className="md:text-5xl text-4xl md:font-medium font-semibold">
            Professional <span className="bg-gradient-to-r from-[#833be7cb] to-[#5521c5] bg-clip-text text-transparent">Resume</span>
          </h1>
          <hr className="md:w-44 w-32 md:mb-0 mb-4 h-3 mt-3 md:ml-0 lg:mt-4 bg-gradient-to-r from-[#c580f0ed] to-[#c580f0c8]" />
          <p className="font-poppins text-justify md:mt-8 mt-6 text-[rgb(15,23,42)]">
            This section highlights education, experience, and technical capabilities. You can replace the example entries below with your latest information and add a PDF file at{" "}
            <span className="font-semibold">/public/resume.pdf</span> to enable your download button.
          </p>
          <div className="flex gap-3 mt-6">
            <a
              className="border border-black rounded-full px-5 py-2 font-poppins text-sm font-medium hover:bg-[#c580f023] transition-all duration-300"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              View Resume PDF
            </a>
            <a
              className="border border-black rounded-full px-5 py-2 font-poppins text-sm font-medium hover:bg-[#c580f023] transition-all duration-300"
              href="/resume.pdf"
              download
            >
              Download
            </a>
          </div>
        </div>

        <div className="md:w-6/12 md:mt-0 mt-8">
          <div className="border rounded-xl p-5 bg-white/70">
            <h2 className="font-rubix text-2xl font-medium">Experience</h2>
            <div className="mt-4 font-poppins">
              <p className="font-semibold">Researcher and Software Engineer</p>
              <p className="text-sm text-slate-600">Athena Research Center | 2024 - Present</p>
              <p className="mt-1 text-sm">Contributing to engineering and research projects in networking and machine learning.</p>
            </div>
          </div>

          <div className="border rounded-xl p-5 bg-white/70 mt-4">
            <h2 className="font-rubix text-2xl font-medium">Education</h2>
            <div className="mt-4 font-poppins">
              <p className="font-semibold">MSc in Network Engineering and Machine Learning</p>
              <p className="text-sm text-slate-600">University of Athens | Ongoing</p>
            </div>
          </div>

          <div className="border rounded-xl p-5 bg-white/70 mt-4">
            <h2 className="font-rubix text-2xl font-medium">Core Skills</h2>
            <p className="mt-3 font-poppins text-sm">
              React, JavaScript, Python, Node.js, Docker, Kubernetes, Selenium, Linux, MySQL, MongoDB.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
