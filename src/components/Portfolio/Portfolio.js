import './Portfolio.scss';
import Loader from 'react-loaders';
import ProjectCard from './ProjectCard/ProjectCard';
import proj1 from "../../assets/images/bigBrother.png";
import proj2 from "../../assets/images/zookeeper.png";
import proj3 from "../../assets/images/teamTeamwork.png";
import proj4 from "../../assets/images/weatherApp.png";
import proj5 from "../../assets/images/roundTable.png";

const Portfolio = () => { 
  const projects = [
    {
      name: "Big Brother",
      tech: "SQL/Inquirer",
      description:
        "A CLI application that allows the user to view, add, and update employees, roles, and departments in a company database.",
      imgUrl: proj1,
      gitHub: "https://github.com/mrdekraker/SQL-big-brother",
    },
    {
      name: "Zookeeper",
      tech: "SQL/EXPRESS",
      description:
        "A CLI application that allows the user to view, add, and update animals in a zoo database.",
      imgUrl: proj2,
      gitHub: "https://github.com/mrdekraker/zookeeper",
    },
    {
      name: "Team Teamwork",
      tech: "Inquirer/Jest",
      description:
        "A CLI application that allows the user to create a team of employees and generate an HTML page that displays the team roster.",
      imgUrl: proj3,
      gitHub: "https://github.com/mrdekraker/team-teamwork",
    },
    {
      name: "Whatever Weather",
      tech: "API Manipulation",
      description:
        "A web application that allows the user to search for a city and view the current weather and a 5-day forecast.",
      imgUrl: proj4,
      gitHub: "https://github.com/mrdekraker/weather-app",
    },
    {
      name: "Round Table",
      tech: "mySQL/EXPRESS/Socket.io",
      description:
        "A web application that allows the user to create a profile, search for and join other chat rooms, and chat between friends or colleagues.",
      imgUrl: proj5,
      gitHub: "https://github.com/Steezy1416/round-table",
    },
  ];

  return (
      <>
        <div className="container portfolio-page">
          <div className="portfolio-zone">
          <h1>Portfolio</h1>
          <div className="project-cards">
            {projects.map((project, i) => (
              <ProjectCard
                key={project.name + i}
                {...project}
            />
            ))}
          </div>
        </div>
        <Loader type="line-scale-pulse-out" />
        </div>
      </>
    );
  }

export default Portfolio;