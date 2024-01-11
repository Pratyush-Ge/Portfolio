import React from 'react'
import Typed from 'typed.js';
import Hi from '../Assets/images/wave.gif'

const Hero = () => {

    const el = React.useRef(null);

    React.useEffect(() => {
    const typed = new Typed(el.current, {
        strings: ['<strong>I am a</strong> <i>Web-developer,</i>', '<strong>I am a</strong> <i>Front-End Designer,</i>', '<strong>I am a</strong> <i>Student.</i>'],
        typeSpeed: 30,
        backSpeed: 0,
        smartBackspace: true,
        loop: true,
        showCursor: false
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
      <div className='mainSection'>
        <div className='welcome'>
            <img className='wave' src={Hi} alt="wave"/>
            <h1 className='name'>Hi, I'm Pratyush.</h1>
            <div className='typedCont'><span className='typedAni' ref={el} /></div>
            <div className='aboutCont'>
              <div className='aboutInfo'>
                ✨Just a 3rd-year B.Tech student loving the frontend web dev and design scene. 💻 Dabbling in Data Structures and Algorithms for that coding finesse. Let's create something good! 🚀🌟
              </div>
            </div>
        </div>
    </div>
  )
}

export default Hero