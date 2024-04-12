import React from 'react';

const Skills = () => {
  return (
    <div id="skills" className="bg-[#8599ae] py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 flex justify-center">Skills & Technologies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Soft Skills */}
          <div className="bg-[#bababa] rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Skills & Language</h3>
            <ul className="list-disc list-inside">
              <li>Communication</li>
              <li>Proactive</li>
              <li>Teamplayer</li>
              <li>Quick learner</li>
              <li>English</li>
              <li>Danish</li>
              <li>Dari</li>
            </ul>
          </div>
          {/* Programming Languages */}
          <div className="bg-[#bababa] shadow-md rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Programming Languages</h3>
            <ul className="list-disc list-inside">
              <li>Java</li>
              <li>JavaScript</li>
              <li>HTML/CSS</li>
              <li>Currently learning PHP</li>
            </ul>
          </div>
          {/* Frameworks & Libraries */}
          <div className="bg-[#bababa] shadow-md rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Frameworks & Libraries</h3>
            <ul className="list-disc list-inside">
              <li>Spring Boot</li>
              <li>React</li>
              <li>React Native</li>
              <li>Tailwind CSS</li>
              <li>Laravel</li>
              <li>Node.JS</li>
            </ul>
          </div>
          {/* Databases & Tools */}
          <div className="bg-[#bababa] shadow-md rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Databases & Tools</h3>
            <ul className="list-disc list-inside">
              <li>MySQL</li>
              <li>Git</li>
              <li>Azure</li>
              <li>CI/CD</li>
              <li>Github</li>
              <li>Firebase</li> 
              <li>Cypress.js</li>
            </ul>
          </div>
          {/* Agile & Project Management */}
          <div className="bg-[#bababa] shadow-md rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Agile & Project Management</h3>
            <ul className="list-disc list-inside">
              <li>Scrum</li>
              <li>Agile</li>
              <li>Kanban</li>
              <li>Jira</li>
            </ul>
          </div>
            {/* Other skills */}
          <div className="bg-[#bababa] shadow-md rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Other skills & Background</h3>
            <ul className="list-disc list-inside">
              <li>Business Administration</li>
              <li>Marketing</li>
              <li>Photography & Design</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
