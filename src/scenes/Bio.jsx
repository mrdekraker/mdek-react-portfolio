import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import family from "../assets/images/family.png";

const Bio = () => {

  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="bio" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}>
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-maple-blue">BIO</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7 max-w-[600px]">
            My name is Mark DeKraker (De-Cray-Ker). I am married to a beautiful
            woman named Kayla, and we have a gorgeous daughter together. I am a
            Canadian{" "}
            <span className="bg-maple-white text-maple-blue font-semibold">
              (GO LEAFS! 🇨🇦 🍁 🏒)
            </span>{" "}
            Full Stack Web Developer.
            <br />
            <br />
            I have a background in education, management, customer service, and
            music. I really found my passion in creating beautiful, functional
            websites, however. I emphatically pursued my passion through the
            Rice University Full Stack Bootcamp course, and passed with a 4.0
            gpa. While it was a challenging course, it was a very rewarding
            experience.
            <br />
            <br />
            As a result, I am now capable of creating in a full MERN stack, and
            I am eager to put my skills to work for you. I am eagerly searching
            for a position as a Junior Full Stack Web Developer, Junior Front
            End, or Junior Back End.
            <br />
            <br />I am a hard worker, and I am always looking to improve my
            skills. I welcome any challenges and I would love to work with you.
            Please see my
            {/* Click contact to go to the contact section */}
            <a
              href="#contact"
              className="text-accent font-semibold hover:underline">
              {" "}
              contact
            </a>{" "}
            information below.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 before:w-full  before:h-full before:border-2 before:border-accent before:z-[-1]">
              <img
                src={family}
                alt="family"
                className="grayscale-[100%] hover:grayscale-[0%] 
              hover:filter transition duration-500 z-10 w-full max-w-[800px] md:max-w-[800px]"
              />
            </div>
          ) : (
            <img
              src={family}
              alt="family"
              className="grayscale-[100%] hover:grayscale-[0%] 
              hover:filter transition duration-500 z-10 w-full max-w-[800px] md:max-w-[800px]"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Bio;