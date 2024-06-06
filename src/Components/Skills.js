import React from 'react';
import StackIcon from "tech-stack-icons";


const skills = [
  { name: 'HTML', icon: <StackIcon name="html5" /> },
  { name: 'CSS', icon: <StackIcon name="css3" /> },
  { name: 'JavaScript', icon: <StackIcon name="js" /> },
  { name: 'React', icon: <StackIcon name="reactjs" />},
  { name: 'Bootstrap', icon: <StackIcon name="bootstrap5" />},
  { name: 'Tailwind', icon: <StackIcon name="tailwindcss" />},
  { name: 'Node.js', icon: <StackIcon name="nodejs" /> },
  { name: 'FireBase', icon: <StackIcon name="firebase" /> },
  { name: 'MongoDb', icon: <StackIcon name="mongodb" /> },
  { name: 'mySql', icon: <StackIcon name="mysql" /> },
];

const tools = [
  { name: 'Github', icon: <StackIcon name="github" className='bg-white rounded-lg'/>},
  { name: 'Git', icon: <StackIcon name="git"/>},
  { name: 'VScode', icon: <StackIcon name="vscode" /> },
  { name: 'Render', icon: <StackIcon name="render" className='bg-white rounded-3xl'/>},
  { name: 'Netlify', icon: <StackIcon name="netlify" />},
  { name: 'Postman', icon: <StackIcon name="postman" />},
  { name: 'Canva', icon: <StackIcon name="canva" /> },
  { name: 'Figma', icon: <StackIcon name="figma" />},
  { name: 'Photoshop', icon: <StackIcon name="ps" />},
  { name: 'Cloudinary', icon: <StackIcon name="cloudinary" />},
];



const Skills = () => {
  return (
    <section className="skills-section text-white">
      <div className="skills-container">
        <div className='skill-left'>
        <h1 className='skillTitle about-title'>Dev-Skills</h1>
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <p aria-placeholder='icon' className='skill-icon'>{skill.icon}</p>
            <h3>{skill.name}</h3>
          </div>
        ))}
        </div>

        <div className='skill-right'>
        <h1 className='skillTitle about-title'>Tools</h1>
        {tools.map((tool, index) => (
          <div key={index} className="skill-card">
            <p aria-placeholder='icon' className='skill-icon'>{tool.icon}</p>
            <h3>{tool.name}</h3>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
