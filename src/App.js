import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import { Element } from 'react-scroll';
import Loading from './Components/Loading';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Vid from './Assets/Background/vid4.mp4';


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Loading />
      ) : (
        <Element name="About">
          <>
          <Navbar />
          <Hero />
          <Element name="Skills">
            <Skills />
          </Element>
          <Element name="Projects">
            <Projects/>
          </Element>
          <Element name="Contact">
            <Contact/>
          </Element>
          <Footer />
          <div className='overlay'>
            <video autoPlay muted loop id="background-video">
              <source src={Vid} type="video/mp4" />
            </video>
          </div>
        </>
        </Element>
      )}
    </div>
  );
}

export default App;
