import React from 'react';

const Skills = () => {
  return (
    <div id="skills" className="bg-[#c1d8f0] py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 flex justify-center cursor-default">Skills & Technologies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Soft Skills */}
          <div className="bg-[#ffffff] rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 cursor-default">Skills & Language</h3>
            <ul className="list-disc list-inside">
              <li className="cursor-default">Communication</li>
              <li className="cursor-default">Proactive</li>
              <li className="cursor-default">Teamplayer</li>
              <li className="cursor-default">Quick learner</li>
              <li className="cursor-default">English</li>
              <li className="cursor-default">Danish</li>
              <li className="cursor-default">Dari</li>
            </ul>
          </div>
          {/* Programming Languages */}
          <div className="bg-[#ffffff] shadow-md rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 cursor-default">Programming Languages</h3>
            <ul className="list-disc list-inside">
              <li className="cursor-default">Java</li>
              <li className="cursor-default">JavaScript</li>
              <li className="cursor-default">HTML/CSS</li>
              <li className="cursor-default">PHP</li>
            </ul>
          </div>
          {/* Frameworks & Libraries */}
          <div className="bg-[#ffffff] shadow-md rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 cursor-default">Frameworks & Libraries</h3>
            <ul className="list-disc list-inside">
              <li className="cursor-default">Spring Boot</li>
              <li className="cursor-default">React</li>
              <li className="cursor-default">React Native</li>
              <li className="cursor-default">Tailwind CSS</li>
              <li className="cursor-default">Laravel</li>
              <li className="cursor-default">Node.JS</li>
              <li className="cursor-default">LAMP Stack</li>
            </ul>
          </div>
          {/* Databases & Tools */}
          <div className="bg-[#ffffff] shadow-md rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 cursor-default">Databases & Tools</h3>
            <ul className="list-disc list-inside">
              <li className="cursor-default">MySQL</li>
              <li className="cursor-default">Git</li>
              <li className="cursor-default">Azure</li>
              <li className="cursor-default">CI/CD</li>
              <li className="cursor-default">Github</li>
              <li className="cursor-default">Firebase</li> 
              <li className="cursor-default">Cypress.js</li>
            </ul>
          </div>
          {/* Agile & Project Management */}
          <div className="bg-[#ffffff] shadow-md rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 cursor-default">Agile & Project Management</h3>
            <ul className="list-disc list-inside">
              <li className="cursor-default">Scrum</li>
              <li className="cursor-default">Agile</li>
              <li className="cursor-default">Kanban</li>
              <li className="cursor-default">Jira</li>
            </ul>
          </div>
          {/* Other skills */}
          <div className="bg-[#ffffff] shadow-md rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 cursor-default">Other skills & Background</h3>
            <ul className="list-disc list-inside">
              <li className="cursor-default">Business Administration</li>
              <li className="cursor-default">Marketing</li>
              <li className="cursor-default">Photography & Design</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
