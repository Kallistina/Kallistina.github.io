import React from "react";
import { LuMail, LuLinkedin, LuGithub, LuMapPin } from "react-icons/lu";

const Contact = () => {
  return (
    <div className="md:px-40 md:pt-24 px-8 pt-16 md:mt-0 mt-6 min-h-[calc(100vh-3rem)] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] bg-[white]">
      <div>
        <h1 className="md:text-5xl text-4xl font-semibold font-rubix">
          <span className="bg-gradient-to-r from-[#833be7cb] to-[#5521c5] bg-clip-text text-transparent">Contact</span> Me
        </h1>
        <hr className="md:w-44 w-32 md:mb-0 mb-4 h-3 mt-3 md:ml-0 lg:mt-4 bg-gradient-to-r from-[#c580f0ed] to-[#c580f0c8]" />
      </div>

      <div className="md:flex md:items-start md:justify-between mt-6 md:mt-8 gap-8 pb-6">
        <div className="md:w-5/12">
          <p className="font-poppins text-slate-600/80 mb-6 md:mb-8">
            Feel free to reach out for collaborations, research discussions, or software projects.
          </p>

          <div className="space-y-5 text-slate-600/80">
            <a
              href="mailto:kdespotidou@di.uoa.gr"
              className="flex items-center gap-3 hover:text-[#5521c5] transition-all duration-300"
            >
              <LuMail size={20} />
              <div>
                <p className="font-poppins text-xs text-slate-500">Email</p>
                <p className="font-poppins text-base font-medium break-all">kdespotidou@di.uoa.gr</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/kalliopi-despotidou/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:text-[#5521c5] transition-all duration-300"
            >
              <LuLinkedin size={20} />
              <div>
                <p className="font-poppins text-xs text-slate-500">LinkedIn</p>
                <p className="font-poppins text-base font-medium break-all">linkedin.com/in/kalliopi-despotidou</p>
              </div>
            </a>

            <a
              href="https://github.com/Kallistina"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:text-[#5521c5] transition-all duration-300"
            >
              <LuGithub size={20} />
              <div>
                <p className="font-poppins text-xs text-slate-500">GitHub</p>
                <p className="font-poppins text-base font-medium">github.com/Kallistina</p>
              </div>
            </a>

            <div className="flex items-center gap-3">
              <LuMapPin size={20} />
              <div>
                <p className="font-poppins text-xs text-slate-500">Location</p>
                <p className="font-poppins text-base font-medium">Athens, Greece</p>
                <p className="font-poppins text-sm text-slate-600">University of Athens</p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-7/12">
          <iframe
            title="Athens map"
            src="https://www.google.com/maps?q=Athens,+Greece&hl=en&t=m&z=11&output=embed"
            className="w-full h-64 md:h-[420px] border-0 rounded-lg grayscale opacity-60"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
