import React from 'react';
import { FaGamepad, FaMusic, FaPlane, FaTv } from 'react-icons/fa';
import { MdSchool, MdLocationOn } from 'react-icons/md';
import { BiSolidPencil } from "react-icons/bi";
import Img from '../Assets/images/bg3.png'

const About = () => {
  return (
    <div className="aboutContainer">
      <div className="left-div ">
        <img src={Img} alt="About me" className="profile-image" />
      </div>
      <div className="right-div ">
        <div className='rightWrapper'>
        <div className='headerAbout'>
        <div className="smallAboutImg">
        <img src={Img} alt="About me" />
      </div>
        <h1 className="about-title">About Me.</h1>
        </div>
        <p className="description">
          Just a <span className="highlight">3rd-year B.Tech student</span> loving the frontend web dev and design scene.
          Dabbling in <span className="highlight">Data Structures and Algorithms</span> for that coding finesse.
          Let's create something good! 🚀
        </p>

        <div className="education">
          <MdSchool className="icon" />
          <p>3rd-year student pursuing IT from Siddaganga Institute of Technology</p>
        </div>
        <div className="location">
          <MdLocationOn className="icon" />
          <p>Native place: Chhindwara, Madhya Pradesh, India</p>
        </div>

        <h2 className="hobbies-title">Hobbies</h2>
        <div className="hobbies">
          <div className="hobby">
            <FaGamepad className="icon" />
            <p>E-sports/Gaming</p>
          </div>
          <div className="hobby">
            <FaTv className="icon" />
            <p>Watching Web Shows</p>
          </div>
          <div className="hobby">
            <BiSolidPencil className="icon" />
            <p>Sketching</p>
          </div>
          <div className="hobby">
            <FaMusic className="icon" />
            <p>Singing</p>
          </div>
          <div className="hobby">
            <FaPlane className="icon" />
            <p>Travelling</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default About;
