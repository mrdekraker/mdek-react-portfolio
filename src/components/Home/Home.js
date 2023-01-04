import './Home.scss';
import M from '../../assets/images/M.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import Profile from './Profile/Profile';


const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = ['a', 'r', 'k', '', 'D', 'e', 'K', 'r', 'a', 'k', 'e', 'r', ',']
  const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <img src={M} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={18}
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
  );
}


export default Home;