import React from 'react'
import nav from '../assets/nav.jpg'

const About = () => {
  return (
    <div className='w-full bg-[#ffffff] py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img src={nav} alt="/" />
            <div>
              <p>SOFTWARE, WEB, FULLSTACK DEV</p>
              <h1>About me, Navid Mirzad</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Cumque distinctio repellat laboriosam omnis porro dolor! Nam placeat nulla sapiente.
                Odit numquam libero pariatur in, voluptas architecto a necessitatibus perspiciatis magni?</p>
            </div>
        </div>
    </div>
  )
}

export default About