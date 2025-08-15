import "./Home.css";
import demoDayImage from "../../assets/demoday.jpg";
import githubImage from "../../assets/github.png";
import linkedinImage from "../../assets/linkedin.png";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
import logo4 from "../../assets/logo4.png";
import logo5 from "../../assets/logo5.png";
import logo6 from "../../assets/logo6.png";
import logo7 from "../../assets/logo7.png";
import logo8 from "../../assets/logo8.png";
import logo9 from "../../assets/logo9.png";
import logo10 from "../../assets/logo10.png";

const Home = () => {
  const githubURL = "https://github.com/ChrisDiaz007";
  const linkedinURL = "https://www.linkedin.com/in/christopher-diaz007/";
  const techStack = [
    { src: logo1, alt: "Tech 1" },
    { src: logo2, alt: "Tech 2" },
    { src: logo3, alt: "Tech 3" },
    { src: logo4, alt: "Tech 4" },
    { src: logo5, alt: "Tech 5" },
    { src: logo6, alt: "Tech 6" },
    { src: logo7, alt: "Tech 7" },
    { src: logo8, alt: "Tech 8" },
    { src: logo9, alt: "Tech 9" },
    { src: logo10, alt: "Tech 10" },
  ];

  return (
    <div className="home_container">
      <div className="top_container">
        <div className="first_section">
          <div className="introduction">
            <h1>Full-Stack Engineer 👋</h1>
            <p className="intro_paragraph">
              Hi, I'm Christopher Diaz. A passionated Full-Stack Engineer <br />
              based in the Florida, United Stated. 📍
            </p>
            <div className="social_icons">
              <div>
                <a href={githubURL} target="_blank" rel="noopener noreferrer">
                  <img src={githubImage} alt="GitHub" className="social_icon" />
                </a>
              </div>
              <div>
                <a href={linkedinURL} target="_blank" rel="noopener noreferrer">
                  <img
                    src={linkedinImage}
                    alt="LinkedIn"
                    className="social_icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="second_section">
          <img src={demoDayImage} alt="Demo Day" className="demo_image" />
        </div>
      </div>
      <div className="bottom_container">
        <div className="tech_stack_text">
          <p>Tech Stach | </p>
        </div>
        <div className="tech_stack">
          {techStack.map((tech, index) => (
            <img
              key={index}
              src={tech.src}
              alt={tech.alt}
              className="tech_logo"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
