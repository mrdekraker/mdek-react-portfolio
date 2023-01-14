import LineGradient from '../components/LineGradient';
import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';
import skills from '../assets/images/skillsImg.jpg';

const MySkills = () => {

  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="skills" className="pt-10 pb-24">
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
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            I excel at the following technologies and tools. I am always open to
            learning new technologies and tools to improve my skills.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 before:w-full  before:h-full before:border-2 before:border-accent before:z-[-1]">
              <img
                src={skills}
                alt="skills -- https://unsplash.com/photos/vpOeXr5wmR4"
                className="z-10"
              />
            </div>
          ) : (
            <img
              src={skills}
              alt="skills -- https://unsplash.com/photos/vpOeXr5wmR4"
              className="z-10"
            />
          )}
        </div>
      </div>

      {/* SKILLS SECTION */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}>
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl hover:text-accent duration-500">
                01
              </p>
              <p className="font-playfair font-semibold text-3xl mt-3 hover:text-accent hover:text-5xl duration-500">
                Experience
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-third absolute right-0 top-0 z-[-1]" />
            <p className="mt-5 hover:text-accent duration-500">
              HTML, CSS, JavaScript, React, NodeJS, MongoDB, GitHub, Photoshop,
              Bootstrap, Tailwind, Framer Motion, Express, SWA
            </p>
          </div>
        </motion.div>

        {/* Front End */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}>
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl hover:text-accent duration-500">
                02
              </p>
              <p className="font-playfair font-semibold text-3xl mt-3 hover:text-accent hover:text-5xl duration-500">
                Front End
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
            <p className="mt-5 hover:text-accent duration-500">
              CSS, React, Bootstrap, Tailwind, Framer Motion, JavaScript,
              Handlebars
            </p>
          </div>
        </motion.div>

        {/* Back End */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}>
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl hover:text-accent duration-500">
                03
              </p>
              <p className="font-playfair font-semibold text-3xl mt-3 hover:text-accent hover:text-5xl duration-500">
                Back End
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-fifth absolute right-0 top-0 z-[-1]" />
            <p className="mt-5 hover:text-accent duration-500">
              NodeJS, MongoDB, MySQL, Express
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default MySkills;