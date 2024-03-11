import React from 'react'
import nav from '../assets/nav.jpg'

const About = () => {
  return (
    <div className='w-full bg-[#ff8045 py-16 px-4]'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img src={nav} alt="/" />
        </div>
    </div>
  )
}

export default About