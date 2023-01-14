import SocialMediaIcons from '../components/SocialMediaIcons';
import useMediaQuery from "../hooks/useMediaQuery"
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import mdek from "../assets/images/mdek.png";
import mResume from "../assets/mDeKraker_resume.pdf";


const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");

  const downloadResume = () => {
    // download file
    const link = document.createElement("a");
    link.href = mResume;
    link.setAttribute("download", "mDeKraker_resume.pdf");
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10">
      {/* IMAGE SECTION */}
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
        {isAboveLarge ? (
          <div className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:w-full  before:h-full before:border-2 before:border-accent before:z-[-1]">
            <img
              src={mdek}
              alt="profile"
              className="grayscale-[100%] hover:grayscale-[0%]
              hover:filter transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
            />
          </div>
        ) : (
          <img
            src={mdek}
            alt="profile"
            className="grayscale-[100%] hover:grayscale-[0%]
              hover:filter transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
          />
        )}
      </div>
      {/* MAIN SECTION */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}>
          <p className="sm:text-5xl text-6xl font-playfair z-10 text-center md:text-start">
            Mark {""}
            <span
              className="sm:relative sm:text-deep_blue sm:font-semibold sm:text-5xl text-6xl z-20
                  sm:before:content-brush before:absolute before:-left-[30px] before:-top-[70px] before:z-[-1]">
              DeKraker
            </span>
          </p>

          <p className="mt-10 mb-7 text-sm text-center md:text-start">
            MERN Full Stack Developer / Lifelong Learner
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}>
          <AnchorLink
            className="bg-gradient-rainblue text-deep_blue rounded-sm py-3 px-7 font-semibold hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact">
            Contact Me
          </AnchorLink>
          <button
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={downloadResume} >
            <div className="bg-deep_blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center font-playfair px-10">
              Resumé
            </div>
          </button>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}>
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
}

export default Landing