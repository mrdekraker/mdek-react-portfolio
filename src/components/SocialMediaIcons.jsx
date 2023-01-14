import linkedIn from '../assets/images/linkedin.png';
import twitter from '../assets/images/twitter.png';
import github from '../assets/images/github-mark-white.svg';
import IG from '../assets/images/instagram.png';

const SocialMediaIcons = () => {
  return ( 
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/mdek/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src={linkedIn} />
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com/mdek_strongdad"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="IG-link" src={IG} />
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/mrdekraker"
        target="_blank"
        rel="noreferrer"
      >
        <img className="h-[30px]" alt="github-link" src={github} />
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href="https://twitter.com/dekrakerMark"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="twitter-link" src={twitter} />
      </a>
    </div>
  )
}

export default SocialMediaIcons;