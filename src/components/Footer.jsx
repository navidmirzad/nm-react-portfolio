import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#444] py-8 px-4 z-0 text-white flex justify-center">
      <div className="text-center">
        <p className="text-lg">Made by Navid Mirzad 🥳</p>
        <p className="text-lg mt-2">&copy; {new Date().getFullYear()} All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
