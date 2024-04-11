import React, { useState } from 'react';

const Projects = () => {
  const [currentImageIndexes, setCurrentImageIndexes] = useState(Array(4).fill(0)); // used to track the current image index for each project

  const projects = [
    {
      id: 1,
      title: 'Hotel Booking - CRUD Application',
      description:
        'Fullstack project, where I built functionality for a Hotel Booking system, super fun and challenging project. Was built in less than 24 hours for my programming exam.',
      technologies: ['Java', 'Spring', 'JPA', 'MySQL', 'JavaScript', 'Git', 'Maven'],
      images: ['hotelBookingImages/hotel1.png', 'hotelBookingImages/hotel2.png', 
      'hotelBookingImages/hotel3.png', 'hotelBookingImages/hotel4.png',],
      githubUrl: 'https://github.com/navidmirzad/HotelBookingBackend-eksamen',
    },
    {
      id: 2,
      title: 'KinoXP - Cinema Reservation, Ticket system',
      description:
        'Fullstack project  to manage cinema reservations, ticket sales, and show planning. This system provides a user-friendly interface for employees and customers for ticket sales, and show scheduling.',
      technologies: ['Java', 'Spring', 'JPA', 'MySQL', 'JavaScript', 'Git', 'Maven'],
      images: ['kinoXpImages/kino1.png', 'kinoXpImages/kino2.png', 'kinoXpImages/kino3.png', 'kinoXpImages/kino4.png'],
      githubUrl: 'https://github.com/navidmirzad/KinoXP/blob/main/README.md',
    },
    {
      id: 3,
      title: 'BilBassen - Car marketplace for used cars',
      description: 'Fullstack exam project for System Development, main purpose was to create a car marketplace, with lots of cool features such as'
      + ' being able to rent out your car, saving cars for later with a favorite function and listing your own cars',
      technologies: ['Java', 'Spring', 'JPA', 'MySQL', 'JavaScript', 'Git', 'Maven'],
      images: ['bilBassenImages/bil1.png', 'bilBassenImages/bil2.png', 'bilBassenImages/bil3.png',
              'bilBassenImages/bil4.png', 'bilBassenImages/bil5.png', 'bilBassenImages/bil6.png',],
      githubUrl: 'https://github.com/BILBASSERNE/Bil-Backend/tree/main',
    },
    {
      id: 4,
      title: 'Online Notebook - React Native',
      description: 'React-Native Semester project, with different functionality. I have used Firebase as my database, as it allows me to implement a lot of useful tools'
      + ' such as creating accounts, user authentication. Generally it just worked really well with react-native.',
      technologies: ['JavaScript', 'React-Native', 'FireBase', 'Git'],
      images: ['notebookImages/notebook1.png', 'notebookImages/notebook2.png', 'notebookImages/notebook3.png',
              'notebookImage/notebook4.png', 'notebookImages/notebook5.png', 'notebookImages/notebook6.png'],
      githubUrl: 'https://github.com/navidmirzad/Notebook-react-native',
    },
  ];

  const handleNextImage = (index) => {
    const project = projects[index];
    setCurrentImageIndexes(prevIndexes => {
      const newIndexes = [...prevIndexes];
      newIndexes[index] = (newIndexes[index] + 1) % project.images.length;
      return newIndexes;
    });
  };

  const handlePrevImage = (index) => {
    const project = projects[index];
    setCurrentImageIndexes(prevIndexes => {
      const newIndexes = [...prevIndexes];
      newIndexes[index] = newIndexes[index] === 0 ? project.images.length - 1 : newIndexes[index] - 1;
      return newIndexes;
    });
  };


  return (
    <div className="w-full bg-[#3D405B] py-16 px-4 z-0">
      <h1 className="text-5xl font-bold mb-5 flex justify-center text-[#c2c3c3] mb-12">PROJECTS</h1>
      <div className="flex flex-wrap mx-4 justify-center">
        {projects.map((project, index) => (
          <div key={project.id} className="w-full sm:w-1/2 lg:w-5/12 xl:w-5/12 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <img
                  src={project.images[currentImageIndexes[index]]}
                  alt={project.title}
                  className="w-full h-64 sm:h-48 object-cover"
                />
                {project.images.length > 1 && (
                  <div className="absolute top-0 right-0 mt-2 mr-2 flex">
                    <button
                      onClick={() => handlePrevImage(index)}
                      className="bg-gray-800 text-white rounded-full w-6 h-6 flex items-center justify-center focus:outline-none"
                    >
                      {'<'}
                    </button>
                    <button
                      onClick={() => handleNextImage(index)}
                      className="bg-gray-800 text-white rounded-full w-6 h-6 ml-2 flex items-center justify-center focus:outline-none"
                    >
                      {'>'}
                    </button>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="bg-gray-200 py-1 px-2 rounded-lg text-sm mr-2 mb-2">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects