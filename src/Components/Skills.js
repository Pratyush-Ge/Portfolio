import React from 'react';
import StackIcon from "tech-stack-icons";
import Profile from './GitProfile';
import { FaExternalLinkAlt } from "react-icons/fa";



const skills = [
  { name: 'HTML', icon: <StackIcon name="html5" /> },
  { name: 'CSS', icon: <StackIcon name="css3" /> },
  { name: 'JavaScript', icon: <StackIcon name="js" /> },
  { name: 'React', icon: <StackIcon name="reactjs" /> },
  { name: 'Bootstrap', icon: <StackIcon name="bootstrap5" /> },
  { name: 'Tailwind', icon: <StackIcon name="tailwindcss" /> },
  { name: 'Node.js', icon: <StackIcon name="nodejs" /> },
  { name: 'FireBase', icon: <StackIcon name="firebase" /> },
  { name: 'MongoDb', icon: <StackIcon name="mongodb" /> },
  { name: 'mySql', icon: <StackIcon name="mysql" /> },
  { name: 'Github', icon: <StackIcon name="github" className='bg-white rounded-lg' /> },
  { name: 'Git', icon: <StackIcon name="git" /> },
  { name: 'VScode', icon: <StackIcon name="vscode" /> },
  { name: 'Render', icon: <StackIcon name="render" className='bg-white rounded-3xl' /> },
  { name: 'Netlify', icon: <StackIcon name="netlify" /> },
  { name: 'Clodinary', icon: <StackIcon name="cloudinary" /> },
  { name: 'Figma', icon: <StackIcon name="figma" /> },
  { name: 'Postman', icon: <StackIcon name="postman" /> },
];




const Skills = () => {
  return (
    <section className="skills-section text-white">
      <div className="skills-container">
        <div className='skill-left'>
          <h1 className='skillTitle about-title'>Skills/Tools</h1>
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <p aria-placeholder='icon' className='skill-icon'>{skill.icon}</p>
              <h3>{skill.name}</h3>
            </div>
          ))}
        </div>

        <div className='skill-right'>
          <div className='flex gap-3 items-center justify-center'>
            <a
              className='map-title mt-3'
              href={`https://github.com/Pratyush-Ge`}
              target='_blank'
              rel='noopener noreferrer'
            >
              GitHub
            </a> <FaExternalLinkAlt />
          </div>

          <Profile username='Pratyush-Ge' />

          <div className='flex gap-3 items-center justify-center flex-col mb-3'>
            <div className='flex gap-3 items-center justify-center'>
            <a
              className='map-title mt-3'
              href={`https://leetcode.com/u/herewegoo/`}
              target='_blank'
              rel='noopener noreferrer'
            >
              Leetcode
            </a> <FaExternalLinkAlt />
            </div>
            <p className='text-center'>500+ Questions on problem solving and DSA. </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
