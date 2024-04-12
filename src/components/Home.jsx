import React from 'react';
import { ReactTyped } from 'react-typed';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <div name='home' id="home" className='w-full h-screen bg-[#3D405B]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#97c1ff] text-4xl'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ffffff]'>
          NAVID MIRZAD
        </h1>
        <div>
          <ReactTyped
          className='md:text-5xl sm:text-4xl text-xl font-bold text-[#4b7ecb]' 
          strings={['A software developer!', 'A designer at heart']}
          typeSpeed={70}  
           backSpeed={90} 
          loop 
          />
          </div>
        <p className='text-white py-4 max-w-[700px]'>
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <div>
          <button className='text-[#ffffff] group border-2 border-[#4b7ecb] px-6 py-3 my-2 flex items-center hover:bg-[#4b7ecb] hover:border-[#ffffff]'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
          <p className='text-[#64c775] text-xl font-bold p-2 mt-10'> // INTERESTED IN AN INTERNSHIP //</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
