import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCanadianMapleLeaf, faHtml5, faCss3, faReact, faJsSquare, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
import './About.scss';
import { useEffect, useState } from 'react';

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 2500);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["A", "b", "o", "u", "t", " ", "M", "e"]}
              index={15}
            />
          </h1>
          <p>
            My name is Mark DeKraker (dee-cray-ker). I'm married to a beautiful
            woman named ❤️Kayla and we have a daughter together. I am a Canadian
            (<span className="leafs">Go Leafs!</span>🇨🇦🍁🏒) full stack web
            developer who lives in Houston, TX.
          </p>
          <p>
            I have a background in education, management, customer service, and
            music. I have a lifelong love of music and puzzles, and I have a
            passion for creation and problem solving. While I don't have a
            conventional background in Comp Sci, I am extremely ambitious in my
            desire to learn and grow as a developer.
          </p>
          <p>
            I am excited to be a part of the tech community and I look forward
            to contributing to the industry.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faCanadianMapleLeaf} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4B28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="line-scale-pulse-out" />
    </>
  );
};

export default About;