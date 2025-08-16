
import { projects } from "../utils/Data"
const Project = () => {
  return (
    <section id="projects">
      <div className="main-container flex flex-col items-center my-28 pt-10 ">
        
        {/* Header Section */}
        <div className="content text-center" data-aos="fade-up" data-aos-duration="1500">
          <h1 className="text-9xl ">
            My <span>Projects</span>
          </h1>
          <p>
            Here are some of the projects I have worked on, showcasing my expertise in 
            <strong> React JS, Node.js, Express.js and MongoDB</strong>.
          </p>
        </div>
        {/* Projects Grid */}
        <div className="projects-container">
          {projects.map((project) => (
            <div className="project-card" key={project.id} data-aos="zoom-in" data-aos-duration="1500">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="overlay">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
