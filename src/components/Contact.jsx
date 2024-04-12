import React from 'react';

const Contact = () => {
  return (
    <div className="w-full bg-[#374887] py-8 px-4 z-0 text-white">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Contact</h1>
        <p className="text-lg mb-4">
        First of all, thank you for making it this far! I hope my portfolio could be of any use to you. 
        As I mentioned earlier, I am currently looking for an internship and would love to contribute to some awesome projects! 
        I am a hard worker and a quick learner at heart, and would love to talk about future opportunities over a glass of juice!
        </p>
        <p className="text-lg mb-4">You can contact me on my mail! <a href='mailto:navidmirzad@hotmail.com' className='text-[#a0d7fc]'>navidmirzad@hotmail.com</a></p>
        <p className="text-lg mb-4">Don't like mails? Send me a <a href="https://www.linkedin.com/in/navidmirzad/" target="_blank" rel="noopener noreferrer" className='text-[#0077B5]'>LinkedIn</a> message instead 👋</p>
        <p className="text-lg mb-6">Thank you for your time!</p>
      </div>
    </div>
  );
};

export default Contact;
