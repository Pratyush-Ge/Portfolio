import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-scroll';
import { AiOutlineUser, AiOutlineProject, AiOutlineHome } from 'react-icons/ai';
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import { GrTechnology } from "react-icons/gr";

const Navbar = () => {
  const navbarRef = useRef(null);
  const [isOpaque, setIsOpaque] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevOpacity, setPrevOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const opacity = scrollY > 100 ? 0.4 : 0;
      setIsOpaque(opacity === 0 ? false : true);
      navbarRef.current.classList.toggle('opaque', opacity > 0);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setPrevOpacity(navbarRef.current.style.backgroundColor);
      navbarRef.current.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    } else {
      navbarRef.current.style.backgroundColor = prevOpacity;
    }
  };


  return (
    <nav className={`navbar ${isOpaque ? 'opaque' : ''}`} ref={navbarRef}>
      <Link
        to="Home"
        smooth={true}
        duration={500}
        spy={true}
      >
        <h1 className='logo'>Pratyush</h1>
      </Link>

      <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
      </div>

      <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <li>
          <Link
            to="Home"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
            onClick={toggleMenu}
          >
            <AiOutlineHome /> Home
          </Link>
        </li>
        <li>
          <Link
            to="About"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
            onClick={toggleMenu}
          >
            <AiOutlineUser /> About
          </Link>
        </li>
        <li>
          <Link
            to="Skills"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
            onClick={toggleMenu}
          >
            <GrTechnology /> Skills
          </Link>
        </li>
        <li>
          <Link
            to="Projects"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
            onClick={toggleMenu}
          >
            <AiOutlineProject /> Projects
          </Link>
        </li>
        <li>
          <a
            href="https://drive.google.com/uc?export=download&id=1t07ZTFs9WStToWGBD4ZkxBlehFNcqSpB"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            <HiOutlineDocumentArrowDown /> Resume
          </a>
        </li>

      </ul>
    </nav>
  );
};

export default Navbar;
