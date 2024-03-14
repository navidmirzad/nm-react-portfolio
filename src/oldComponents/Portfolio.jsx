import React from 'react'
import navid2 from "../assets/navid.jpg";

const Portfolio = () => {
  return (
    <div className='max-w-full h-full px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto'>
      <h1 className='text-white font-fira-code text-center mb-10 text-2xl md:text-3xl lg:text-4xl font-bold bg-clip-text'>Portfolio</h1>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        <div>
          <img className='group flex flex-col h-full shadow-sm rounded-xl bg-black' src={navid2} alt='/' />
          <div>
            <h1 className='w-full'>Project Name</h1>
          </div>
        </div>

        <div>
          <img className='group flex flex-col h-full shadow-sm rounded-xl bg-black' src={navid2} alt='/' />
        </div>

        <div>
          <img className='group flex flex-col h-full shadow-sm rounded-xl bg-black' src={navid2} alt='/' />
        </div>
        
        <div>
          <img className='group flex flex-col h-full shadow-sm rounded-xl bg-black' src={navid2} alt='/' />
        </div>

      </div>
    </div>
  )
}

export default Portfolio
