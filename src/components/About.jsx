import React from 'react'
import Navid from '../assets/nav.jpg'

const About = () => {
  return (
    <div className='w-full bg-[#c1d8f0] py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-x-8'>
            <img className='w-full h-full object-cover  mx-auto object-' src={Navid} alt="/" />
            <div className='flex flex-col justify-center content-between'>
              <p className='text-[#282ed0] font-bold'>SOFTWARE | WEB | FULLSTACK</p>
              <h1 className='md:text-5xl sm:text-4xl text-3xl font-bold py-2'>Navid Mirzad</h1>
              {/* <p className='text-[#282ed0] font-bold'>DESIGNER & PHOTOGRAPHER</p> */}
              <p>Hey there, I'm Navid. Currently working as a Software Tester at RISMA Systems 
                & studying Computer Science at Copenhagen School of Design And Technology.</p>
              <p className='mt-4'>I am currently in my 4th semester and am therefore looking for a 10-week / 3-month internship!
                For that, I decided to create this web portfolio, which includes my skills, tech stack, and a little about me.</p>
                <p className='mt-4'>I have mostly worked on backend and full-stack projects. However, I am currently developing my frontend skills
                with React, React Native and Tailwind CSS.</p>
                <button className='bg-[#4b7ecb] text-white hover:bg-[#273462] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>
                  Check out my portfolio!</button>
            </div>
        </div>
    </div>
  )
}

export default About;