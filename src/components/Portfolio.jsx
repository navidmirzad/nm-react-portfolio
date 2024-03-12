import React from 'react'
import navid2 from "../assets/navid.jpg";

const Portfolio = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-3 gap-8'>
            <div className='w-full'>
                <img className='w-20 mx-auto mt-[-3rem] bg-black' src={navid2} alt="alt" />
                <h2>Project 1</h2>
                <p>Info about project</p>
                <div>
                    <p>Technologies</p>
                    <p>React</p>
                    <p>Tailwindcss</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio