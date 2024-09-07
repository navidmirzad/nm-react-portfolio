import React from 'react'
import Navid from '../assets/nav.jpg'

const About = () => {
  return (
    <div id="about">
    <div className='w-full bg-[#c1d8f0] py-32 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-x-8'>
            <img className='w-full h-full object-cover  mx-auto object-' src={Navid} alt="/" />
            <div className='flex flex-col justify-center content-between'>
              <p className='text-[#282ed0] font-bold'>SOFTWARE | WEB | FULLSTACK</p>
              <h1 className='md:text-5xl sm:text-4xl text-3xl font-bold py-2'>Navid Mirzad</h1>
              {/* <p className='text-[#282ed0] font-bold'>DESIGNER & PHOTOGRAPHER</p> */}
              <p>Hey there, I'm Navid. I currently work as a Software Tester at RISMA Systems and am in the middle of an internship as a fullstack web developer at a startup called Currus Connect.
                 Additionally, I'm studying Computer Science at the Copenhagen School of Design And Technology.</p>
              <p className='mt-4'>I am currently in my 5th semester and done with my AP Degree in Computer Science the January 2025.
                For that, I decided to create this web portfolio, which includes my skills, tech stack, and a little about me.</p>
                <p className='mt-4'>I have primarily focused on backend and full-stack projects with less emphasis on frontend development. 
                However, I am currently honing my frontend skills with React, React Native, and Tailwind CSS, 
                which is also a part of my responsibilities as a web developer at the startup.</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default About;