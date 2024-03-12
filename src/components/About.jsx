import React from 'react'
import Navid from '../assets/nav.jpg'

const About = () => {
  return (
    <div className='w-full bg-[#ffffff] py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-x-8'>
            <img className='w-[740px] mx-auto my-4' src={Navid} alt="/" />
            <div className='flex flex-col justify-center'>
              <p className='text-[#282ed0] font-bold'>SOFTWARE | WEB | FULLSTACK</p>
              <h1 className='md:text-5xl sm:text-4xl text-3xl font-bold py-2'>Navid Mirzad</h1>
              {/* <p className='text-[#282ed0] font-bold'>DESIGNER & PHOTOGRAPHER</p> */}
              <p>Hey there, I'm Navid. Currently working as a Software Tester at RISMA Systems 
                & studying Computer Science at Copenhagen School of Design And Technology.</p>
              <p className='mt-4'>I am currently in my 4th semester and am therefore looking for a 10-week / 3-month internship!
                For that, I decided to create this web portfolio, which includes my skills, tech stack, and a little about me.</p>
                <p className='mt-4'>I have mostly worked on backend and full-stack projects. However, I am currently developing my frontend skills
                with React, React Native, Node.js, and Tailwind CSS.</p>
                <p className='mt-2'>And for some reason, I picked data structures and algorithms this semester too... 😂</p>
                <button className='bg-[#ff8045] text-black hover:bg-[#a9611d] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>
                  Check out my portfolio!</button>
            </div>
        </div>
    </div>
  )
}

export default About;