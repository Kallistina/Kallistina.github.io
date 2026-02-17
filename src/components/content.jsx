import React from 'react';
import Frontpageanimation from './frontpageanimation';
import Github from "./github"



const content = () => {
  return (
    <div className='md:w-full flex justify-between bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] bg-[white] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] dark:bg-slate-900 md:mt-0 mt-6 transition-colors duration-300'>
      <div className='min-h-screen md:px-36 md:py-16 md:pb-4 px-8 py-12 bg-[white] dark:bg-slate-900 select-none md:w-6/12 md:pr-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] transition-colors duration-300'>
        <div className='text-center'>
          <br />
          <div className='flex items-center gap-3 md:gap-4'>
            <h1 className='text-left font-medium text-6xl md:text-7xl font-rubix bg-gradient-to-r from-[#833be7cb] to-[#5521c5] bg-clip-text text-transparent'>Kalliopi</h1>
            <span className='border border-black/30 dark:border-slate-300/40 rounded-full px-3 py-1 text-xs md:text-sm font-poppins font-medium mt-2 md:mt-3 transition-all duration-300 hover:bg-[#5521c5] hover:text-white hover:border-[#5521c5] cursor-default'>
              MSc@UoA
            </span>
          </div>
          <h1 className='text-left md:pb-6 pt-2 md:pt-0 pb-7 leading-10 font-semibold text-5xl md:text-6xl font-rubix text-slate-900 dark:text-slate-100'>Despotidou</h1>
          <hr className='md:w-24 w-20 md:mb-0 mb-4 h-3 bg-gradient-to-r from-[#c580f0ed] to-[#c580f0c8]'></hr>
        </div>
        <div className='text-[rgb(15,23,42)] dark:text-slate-200 text-left md:pt-8'>
          <p className='text-lg md:text-xl font-poppins font-normal'>
            MSc student in Network Engineering and Machine Learning at UoA, and Researcher/Software Engineer at Athena Research Center.
          </p>
        </div>
      </div>
      <div className='hidden lg:inline-block md:h-fit md:w-5/12 relative md:mr-32 md:mt-16'>
        <Frontpageanimation />
      </div>
      <Github />
    </div>
  )
}

export default content;
