import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import ScrollDown from '../ScrollDown/ScrollDown';

const Data = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
  }, []);
  return (
    <div className="data__container">
      <h1 className="home__title title">Gina Paola Suarez</h1>
      <h3 className="home__subtitle subtitle">
        <div className="subtitle__line"></div>Frontend Developer
      </h3>
      <p className="home__description description">
        Welcome to my portfolio, here you can see a bit of who I am, my projects
        and contact! 
        <br>
        </br>
        <br>
        </br>
        I am a frontend developer passionate about the world of
        technology, I love learning new things, that is why I am constantly
        learning, I would love to be part of a great work team to demonstrate
        all my skills and grow professionally, I am very committed to what I do and I am looking for new challenges.
      </p>
      <Link
        to="contact"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        className="button button--flex button__home"
      >
        Contact Me{' '}
        <i
          class="uil uil-message"
          style={{
            fontSize: '23px',
            marginLeft: '.2rem',
            backgroundColor: 'transparent',
          }}
        ></i>
      </Link>
      {width > 768 ? <ScrollDown /> : null}
    </div>
  );
};

export default Data;
