  import React, {useState} from 'react'
  import { FaBars, FaTimes, FaGithub, FaLinkedin,  } from 'react-icons/fa'
  import { BsFillPersonLinesFill } from 'react-icons/bs'
  import { FaRegFilePdf } from "react-icons/fa"; // Importing the PDF icon

  const Navbar = () => {
      const [nav, setNav] = useState(false);
      const handleClick = () => setNav(!nav);


    return (
      <div className='fixed w-full h-[90px] flex justify-between items-center px-4 bg-[#273462] text-gray-300 z-50'>
        <div>
          <h1 className='text-2xl font-bold m-4'>NAVID</h1>
        </div>


        {/* menu */}
          <ul className='hidden md:flex pr-4'>
            <li className='py-6 text-xl'>Home</li>
            <li className='py-6 text-xl'>About</li>
            <li className='py-6 text-xl'>Projects</li>
            <li className='py-6 text-xl'>Skills</li>
            <li className='py-6 text-xl'>Contact</li>
            <a href="/CVPRAKTIK.pdf"
            className="flex items-center p-2 border border-gray-200 m-2 hover:border-[#4b7ecb] hover:text-[#4b7ecb]" download>
            <FaRegFilePdf className="mr-2 hover:border-[]"/>Resume</a>
        </ul>

      {/* hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#273462] flex flex-col justify-center items-center'}>
          <li className='py-6 text-4xl'>Home</li>
          <li className='py-6 text-4xl'>About</li>
          <li className='py-6 text-4xl'>Skills</li>
          <li className='py-6 text-4xl'>Projects</li>
          <li className='py-6 text-4xl'>Contact</li>
          <a href="/CVPRAKTIK.pdf"
          className="flex items-center text-4xl p-4 border border-gray-200 m-2 hover:border-[#4b7ecb] hover:text-[#4b7ecb]" download>
          <FaRegFilePdf className="mr-2 text-4xl hover:border-[#4b7ecb]"/>Resume</a>

              {/* LINKEDIN & GITHUB IN HAMBURGER MOBILE VIEW*/}
              <div className='flex gap-4 justify-center md:justify-center lg:justify-center mt-6'>
              <a href="https://www.linkedin.com/in/navidmirzad/" 
                  className='flex items-center p-2 bg-transparent border-white border-2 text-white rounded-md text-xl font-bold cursor-pointer relative group hover:text-[#4b7ecb] hover:border-[#4b7ecb]' 
                  target="_blank" 
                  rel="noopener noreferrer">
                  <FaLinkedin className="mr-2" /> LinkedIn
              </a>

              <a href="https://github.com/navidmirzad" 
                  className='flex items-center p-2 bg-transparent border-white border-2 text-white rounded-md text-xl font-bold cursor-pointer relative group hover:text-[#4b7ecb] hover:border-[#4b7ecb]' 
                  target="_blank" 
                  rel="noopener noreferrer">
                  <FaGithub className="mr-2" /> GitHub
              </a>
              </div>

        </ul>


      {/* social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
          <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
              <a
                className='flex justify-between items-center w-full text-gray-300' target="_blank"  rel="noreferrer"
                href='https://www.linkedin.com/in/navidmirzad/'
              >
                Linkedin <FaLinkedin size={30} />
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
              <a
                className='flex justify-between items-center w-full text-gray-300' target="_blank"  rel="noreferrer"
                href='https://github.com/navidmirzad'
              >
                Github <FaGithub size={30} />
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
              <a
                className='flex justify-between items-center w-full text-gray-300' target="_blank"
                href='/CVPRAKTIK.pdf'
              >
                Resume <BsFillPersonLinesFill size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }

  export default Navbar