import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaRegFilePdf } from "react-icons/fa"; // Importing the PDF icon

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='sticky top-0 z-50 bg-[#333333]'>
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
  {/* TODO: border-2 border-sky-600 rounded-3xl m-2 add this outline border to the minimzed view / mobile phone view of the navbar */}
      <h1 className="w-full text-3xl font-bold text-[#ff8045] p-2">NAVID</h1>
      <ul className="hidden md:flex">
        <li className="p-4 text-lg">Home</li>
        <li className="p-4 text-lg">About</li>
        <li className="p-4 text-lg">Portfolio</li>
        <li className="p-4 text-lg">Contact</li>
        <a href="/CVPRAKTIK.pdf"
          className="flex items-center p-2 border border-gray-200 m-2 hover:border-[#ff8045] hover:text-[#ff8045]" download>
          <FaRegFilePdf className="mr-2 hover:border-[#ff8045]" />
          Resume</a>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
          {!nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25} />}
      </div>
      </div>
      <ul className={!nav ? "fixed left-0 top-0 w-[45%] h-full border-r border-r-gray-600 bg-[#5a4d48] ease-out duration-500 z-50" : "ease-in-out duration-500 fixed left-[-100%] z-50"}>
        <h1 className='w-full text-3xl font-bold text-[#ff8045] m-4'>NAVID</h1>    
        <li className="p-4">Home</li>
        <li className="p-4">About</li>
        <li className="p-4">Portfolio</li>
        <li className="p-4">Contact</li>
        <a href="/CVPRAKTIK.pdf"
          className="flex items-center p-2 border border-gray-200 m-2" download>
          <FaRegFilePdf className="mr-2" />
          Resume</a>
      </ul>
    </div>
  );
};

export default Navbar;