import React, { useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { gsap } from 'gsap';


const Navbar = () => {

  const navbarRef = useRef(null);

  useEffect(() => {
    gsap.set(navbarRef.current, { y: '-100%' });

    gsap.to(navbarRef.current, {
      y: '0%',
      opacity: 1,
      duration: 2,
    });
  }, []);

  return (
    <div className='navbar' ref={navbarRef}>
      <Link to="About" smooth={true} duration={500}>About</Link>
      <Link to="Skills" smooth={true} duration={500}>Skills</Link>
      <Link to="Projects" smooth={true} duration={500}>Projects</Link>
      <Link to="Contact" smooth={true} duration={500} className='conButton'>Contact</Link>
    </div>
  );
};

export default Navbar;
