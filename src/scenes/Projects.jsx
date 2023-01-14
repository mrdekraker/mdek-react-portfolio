import LineGradient from '../components/LineGradient';
import { motion } from 'framer-motion';
import project1 from '../assets/images/project-1.png';
import project2 from '../assets/images/teamTeamwork.png'
import project3 from '../assets/images/weatherApp.png'
import project4 from '../assets/images/zookeeper.png'
import project5 from '../assets/images/roundTable.png'
import project6 from '../assets/images/jate.png'

const projectArr = [
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
]

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
}


const Project = ({ title, subtitle, link }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-off_white z-30 flex flex-col justify-center items-center text-center p-16 text-deep_blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();
  
  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <a href={link} rel="noreferrer" target="_blank" className="hover:underline hover:text-accent">
          <p className="text-2xl font-playfair">{title}</p>
        </a>
        <p className="mt-7">{subtitle}</p>
      </div>
      <img
        className="w-[400px] h-[400px] object-cover"
        src={projectArr[title[title.length - 1] - 1]}
        alt={projectTitle}
      />
    </motion.div>
  );
};


const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}>
        <div>
          <p className="font-playfair font-semibold text-4xl">
            MY <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>

        <p className="mt-10 mb-10">
          Every new project was a fun challenge for me. I love to learn new
          technologies and tools to improve my skills.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}>
          {/* ROW 1 */}
          <div className="flex justify-center text-center items-center p-10 bg-red max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
            BEAUTIFUL DESIGNS
          </div>
          <Project
            link="https://github.com/mrdekraker/SQL-big-brother"
            title="Project 1"
            subtitle="Employee Tracker: This project was created to analyze the corporate structure of an employee database using SQL."
          />
          <Project
            link="https://github.com/mrdekraker/team-teamwork"
            title="Project 2"
            subtitle="Team Teamwork: This project was created to generate a webpage that displays a team's basic info using Node.js."
          />

          {/* ROW 2 */}
          <Project
            link="https://github.com/mrdekraker/weather-app"
            title="Project 3"
            subtitle="Weather App: This project was created to display the weather of a city using the OpenWeather API."
          />
          <div className="flex justify-center text-center items-center p-10 bg-secondary max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
            EASY TO USE
          </div>
          <Project
            link="https://github.com/mrdekraker/zookeeper"
            title="Project 4"
            subtitle="Zookeeper: This project was created to create, update, and maintain zookeeper and animal information with SQL, EXPRESS, & NodeJS."
          />

          {/* ROW 3 */}
          <Project
            link="https://github.com/Steezy1416/round-table"
            title="Project 5"
            subtitle="Round Table: This project was created to create a chatroom using Socket.io."
          />
          <Project
            link="https://github.com/mrdekraker/PWA-Text-Editor"
            title="Project 6"
            subtitle="JATE: This project is a PWA text editor that allows users to create, edit, and save notes. It uses IndexedDB to store notes."
          />
          <div className="flex justify-center text-center items-center p-10 bg-accent max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};


export default Projects;