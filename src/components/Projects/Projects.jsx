import "./Projects.css";
import Project1 from "../../assets/project1img1.png";
import Project2 from "../../assets/project2img1.png";
import DemoButton from "./DemoButton";
import GithubButton from "./GithubButton";

const Projects = () => {
  const Projects = [
    {
      src: Project1,
      alt: "Project1",
      title: "Reacquaint",
      description:
        "A construction tender evaluation platform enabling bidders to upload tenders and receive AI-driven assessments and scores across key criterias such as Budget Control, Environment, Health & Safery, Qualification, and Quality.",
      tech: "Rails, HTML5, CSS, PostgreSQL, OpenAI, Figma",

      githubURL: "https://github.com/adi-kotian/reacquaint",

      livedemoURL: "https://www.reacquaint.online/",
    },
    {
      src: Project2,
      alt: "Project2",
      title: "Hero Trainer",
      description:
        "A trainer website is a comprehensive resource for fitness information, cross scheduales, membership options, and tools to help users achieve their fitness goals",
      tech: "Rails, HTML5, CSS, PostgreSQL, Figma",
      githubURL: "https://github.com/ChrisDiaz007/hero-trainer-solo",
      livedemoURL: "https://www.google.com/",
    },
  ];

  return (
    <div className="projects_container">
      <div>
        <div className="porjects_short_description">
          <div>
            <h3>Portfolio</h3>
          </div>
          <div>
            <h2>Each project is a unique piece of development 🧩</h2>
          </div>
        </div>
      </div>

      <div className="projectss_information">
        <div className="testing">
          {Projects.map((project, index) => (
            <div key={index} className="project_card">
              <img
                src={project.src}
                alt={project.alt}
                className="projects_images"
              />
              <div className="Projects_descriptions">
                <div className="test1">
                  <h2>{project.title}</h2>
                  <h3>{project.description}</h3>
                  <p>{project.tech}</p>
                </div>
                <div className="projects_icons">
                  <div>
                    <a
                      href={project.githubURL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GithubButton />
                    </a>
                  </div>
                  <div>
                    <a
                      href={project.livedemoURL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <DemoButton />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
