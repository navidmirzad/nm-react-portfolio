import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaRegFilePdf } from "react-icons/fa"; // Importing the PDF icon

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#dfbdbd]">NAVID</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">About</li>
        <li className="p-4">Portfolio</li>
        <li className="p-4">Contact</li>
        <a href="/CVPRAKTIK.pdf"
          className="flex items-center p-2 border border-gray-200 m-2" download>
          <FaRegFilePdf className="mr-2" />
          Resume</a>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25} />}
      </div>
      <ul className={!nav ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-600 bg-[#5a4d48] ease-out duration-500" : "ease-in-out duration-500 fixed left-[-100%]"}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>    
          <li className='p-4 border-b border-gray-400'>Home</li>
          <li className='p-4 border-b border-gray-400'>Company</li>
          <li className='p-4 border-b border-gray-400'>Resources</li>
          <li className='p-4 border-b border-gray-400'>About</li>
          <li className='p-4'>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;