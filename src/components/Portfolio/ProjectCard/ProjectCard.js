import './ProjectCard.scss';

const ProjectCard = ({ name, tech, description, imgUrl, gitHub }) => {
  return (
    <div className="project-card" style={{ backgroundImage: `url(${imgUrl})` }}>
      <div className="project-text">
        <h3>{name}</h3>
        <h4>
          <a href={gitHub}>{tech}</a>
        </h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;