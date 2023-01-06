import './Home.scss';
import M from '../../assets/images/M.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import Profile from './Profile/Profile';
import Loader from 'react-loaders';


const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = ['a', 'r', 'k', ' ', 'D', 'e', 'K', 'r', 'a', 'k', 'e', 'r', ',']
  const jobArray = ['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <img src={M} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              index={12}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              index={25}
            />
          </h1>
          <h2>
            MERN Full Stack Developer / JavaScript Expert / <br /> Lifelong
            Learner
          </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Profile />
      </div>
      <Loader type="line-scale-pulse-out" />
    </>
  );
}


export default Home;