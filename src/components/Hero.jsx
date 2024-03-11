/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import { ReactTyped } from 'react-typed';
import { FaLinkedin, FaGithub } from "react-icons/fa";


const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold mt-24'>Nice to meet you</p>
            <h2 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'> I'm <span style={{ color: '#ff8045' }}>Navid</span></h2>
            <div>
                <ReactTyped
                className='md:text-5xl sm:text-4xl text-xl font-bold' 
                strings={['A software developer!', 'A designer at heart']}
                typeSpeed={70} 
                backSpeed={90} 
                loop 
                />
            </div>
            <p className='text-[#64c775] font-bold p-2 mt-10'> // INTERESTED IN AN INTERNSHIP //</p>

            <div className='flex gap-4 z-50 justify-center md:justify-center lg:justify-center mt-6'>
            <a href="https://www.linkedin.com/in/navidmirzad/" 
                className='flex items-center p-2 bg-transparent border-white border-2 text-white rounded-md text-xl font-bold cursor-pointer relative z-10 group hover:text-[#ff8045] hover:border-[#ff8045]' 
                target="_blank" 
                rel="noopener noreferrer">
                <FaLinkedin className="mr-2" /> LinkedIn
            </a>

            <a href="https://github.com/navidmirzad" 
                className='flex items-center p-2 bg-transparent border-white border-2 text-white rounded-md text-xl font-bold cursor-pointer relative z-10 group hover:text-[#ff8045] hover:border-[#ff8045]' 
                target="_blank" 
                rel="noopener noreferrer">
                <FaGithub className="mr-2" /> GitHub
            </a>
            </div>

        </div>
        
    </div>
  )
}

export default Hero