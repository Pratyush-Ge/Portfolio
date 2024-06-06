import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Projects from './Components/Projects';
import About from './Components/About';
import Skills from './Components/Skills';
import Loading from './Components/Loading';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import JParticles from 'jparticles';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      new JParticles.Particle('#backimg', {
        color: '#25bfff',
        lineShape: 'cube',
        range: 2000,
        proximity: 80,
        parallax: true,
      });
    }
  }, [isLoading]);

  return (
    <div className="App">
      {isLoading ? (
        <Loading />
      ) : (
          <>
            <Navbar />
            <section id="Home">
              <Hero />
            </section>
            <section id="About">
              <About />
            </section>
            <section id="Skills">
              <Skills />
            </section>
            <section id="Projects">
              <Projects />
            </section>
            <section id="Contact">
              <Contact />
            </section>
            <Footer />
            <div id="backimg" className='backimg'></div>
          </>
      )}
    </div>
  );
}

export default App;
