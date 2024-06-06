import React from 'react'
import Typed from 'typed.js';
import Hi from '../Assets/images/wave.gif'
import cdImage from '../Assets/images/coding_guy.png'

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
    <div
      className='mainContainer'>
      <div className='mainSection'>
        <div className='welcome'>
          <img className='wave' src={Hi} alt="wave" />
          <h1 className='name'>Hi, I'm Pratyush.</h1>
          <div className='typedCont'><span className='typedAni' ref={el} /></div>
        </div>
        <div className='codingGuy'>
          <img className='' src={cdImage} alt="wave" />
        </div>
      </div>
    </div>
  )
}

export default Hero