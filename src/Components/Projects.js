/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import '../Styles/project.css';
import ParkNxt from '../Assets/images/ParkNxt.png';
import G4G from '../Assets/images/G4G.png';
import Safar from '../Assets/images/safar.png'
import Tenzies from '../Assets/images/tenzies.png'

const ProjectCard = ({ ProjectImage, title, description, techStack, githubLink }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const renderDescription = () => {
    const lines = description.split('\n');
    return lines.map((line, index) => <p key={index}>{line}</p>);
  };

  return (
    <div className={`card ${expanded ? 'expanded' : ''}`}>
      <div className="main-content">
        <p className="heading">{title}</p>
        <div className="categories">
          <img className="categoriesimg" src={ProjectImage} alt="project image" />
          <div className={`aboutProject ${expanded ? 'expanded' : ''}`}>
            {renderDescription()}
            <p><br />{techStack}</p>
          </div>
          {!expanded && <button onClick={toggleExpand}>See More</button>}
          {expanded && <button onClick={toggleExpand}>See Less</button>}
        </div>
      </div>
      <div className="cardfooter">
        <a href={githubLink} target='_blank' rel="noreferrer">🔗GitHub</a>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className='projectCont'>
      <h1>Projects</h1>
      <div className='cardSection'>
        <ProjectCard
          ProjectImage={G4G}
          title="Give4Good"
          description={`(Collaborative)\n➡️ Innovative e-commerce and charity platform with integrated machine learning for secure product verification.\n\n
          ➡️ Optimized recycling program for added revenue from non-working items.\n 
          ➡️ Partnerships with charities for social impact.`}
          techStack="Tech Stack : Bootstrap, React.js, Node.js, Express, MongoDB, Machine Learning Model(YOLO V5s)"
          githubLink="https://github.com/Pratyush-Ge"
        />
        <ProjectCard
          title="ParkNxt"
          ProjectImage={ParkNxt}
          description={`(Collaborative)\n➡️ ParkNxt, optimizing urban mobility with smart parking solutions.\n
          ➡️ Collaborated on admin view for streamlined parking space management.\n
          ➡️ Enhanced payment gateway integration for seamless transactions.`}
          techStack="Tech Stack : Bootstrap, Tailwind, Firebase, React.js, Node.js, Express, MongoDB"
          githubLink="https://github.com/Pratyush-Ge/"
        />
        <ProjectCard
          title="Safar"
          ProjectImage={Safar}
          description={'➡️ Trending Exploration : Discover the latest and hottest travel destinations.\n➡️ Smart Search : Find places easily with a powerful search feature.\n➡️ Comprehensive Details : Get detailed info, images, and reviews for every destination.'}
          techStack="Under Development!"
          githubLink=""
        />
        <ProjectCard
          title="Tenzies"
          ProjectImage={Tenzies}
          description={`➡️ A fun game of Tenzies. Click on similar numbers to hold and freeze. Roll until all numbers are same. Beat your score by making minimum moves !`}
          techStack="Play now : 👇"
          githubLink="https://github.com/Pratyush-Ge/Tenzies"
        />
      </div>
    </div>
  );
};

export default Projects;
