import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faBootstrap, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faFire, faCode, faDatabase as faDatabaseSolid } from '@fortawesome/free-solid-svg-icons';
import gb from '../Assets/images/github.png';
import cc from '../Assets/images/codechef.png';
import lc from '../Assets/images/leetcode.png';
import hr from '../Assets/images/HackerRank.png';


const Skills = () => {
  return (
    <div className='skillSection'>
      <h1 className='funTitle'>Skills</h1>
      <div className='partition'>
        <div className='devSkillsSection'>
          <h2 className='animatedTitle'>Development</h2>
          <div className='devSkills'>
            <div className='devsk html'>
              <FontAwesomeIcon icon={faHtml5} /> Html
            </div>
            <div className='devsk css'>
              <FontAwesomeIcon icon={faCss3} /> Css
            </div>
            <div className='devsk js'>
              <FontAwesomeIcon icon={faJs} /> JavaScript
            </div>
            <div className='devsk bootstrap'>
              <FontAwesomeIcon icon={faBootstrap} /> Bootstrap
            </div>
            <div className='devsk tailwind'>Tailwind</div>
            <div className='devsk firebase'>
              <FontAwesomeIcon icon={faFire} /> FireBase
            </div>
            <div className='devsk react'>
              <FontAwesomeIcon icon={faReact} /> React.js
            </div>
            <div className='devsk node'>
              <FontAwesomeIcon icon={faNodeJs} /> Node.js
            </div>
            <div className='devsk express'>
              <FontAwesomeIcon icon={faNodeJs} /> Express
            </div>
            <div className='devsk mongo'>MongoDb</div>
            <div className='devsk sql'>
              <FontAwesomeIcon icon={faDatabaseSolid} /> SQL
            </div>
          </div>
        </div>

        <div className='codingSkillsSection'>
          <h2 className='animatedTitle'>Coding</h2>
          <div className='codingSkill'>
            <div className='devsk c'>
              <FontAwesomeIcon icon={faCode} /> C
            </div>
            <div className='devsk cpp'>
              <FontAwesomeIcon icon={faCode} /> C++
            </div>
          </div>
        </div>
      </div>

      <div className='profileLinks'>
        <h2 className='funTitle'>Profile Links</h2>
        <div className='linkss'>
          <div className='linkCont'>
            <a href='https://leetcode.com/RandomUser_777/' className='linkHover' target='_blank' rel='noopener noreferrer'>
              <img className='imageLogo leetcode' src={lc} alt='LeetCode Logo' />
            </a>
          </div>
          <div className='linkCont'>
            <a href='https://www.codechef.com/users/b0t_x' className='linkHover' target='_blank' rel='noopener noreferrer'>
              <img className='imageLogoC codechef' src={cc} alt='CodeChef Logo' />
            </a>
          </div>
          <div className='linkCont'>
            <a href='https://github.com/Pratyush-Ge' className='linkHover' target='_blank' rel='noopener noreferrer'>
              <img className='imageLogo github' src={gb} alt='GitHub Logo' />
            </a>
          </div>
          <div className='linkCont'>
            <a href='https://www.hackerrank.com/profile/pratyushghatole1' className='linkHover' target='_blank' rel='noopener noreferrer'>
              <img className='imageLogo hackerrank' src={hr} alt='HackerRank Logo' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
