import Navbar from './scenes/Navbar';
import DotGroup from './scenes/DotGroup';
import Landing from './scenes/Landing';
import { useEffect, useState } from 'react';
import LineGradient from './components/LineGradient';
import Bio from './scenes/Bio';
import MySkills from './scenes/MySkills';
import Projects from './scenes/Projects';
import Contact from './scenes/Contact';
import Footer from './scenes/Footer';
import useMediaQuery from './hooks/useMediaQuery';

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleSCroll = () => {
      // highlight dotgroup when user scrolls to the corresponding section
      
      if (window.scrollY >= 0 && window.scrollY < 800) {
        setSelectedPage('home');
      }

      if (window.scrollY >= 800 && window.scrollY < 1600) {
        setSelectedPage('bio');
      }

      if (window.scrollY >= 1600 && window.scrollY < 2600) {
        setSelectedPage('skills');
      }

      if (window.scrollY >= 2600 && window.scrollY < 4500) {
        setSelectedPage('projects');
      }

      if (window.scrollY >= 4500 && window.scrollY < 5000) {
        setSelectedPage('contact');
      }



      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage('home');
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener('scroll', handleSCroll);
    return () => window.removeEventListener('scroll', handleSCroll);
  }, []);

  return (
    <div className="app bg-deep_blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto mb-2 md:h-full">
        <Bio />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto mb-24 md:h-full">
        <MySkills />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto">
        <Projects />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
