import "./projects.scss";
import { imageData } from "../../helper/imageData";
import ProjectCards from "../../components/ProjectCards";

const Projects = () => {
  return (
    <>
      {/* <div>PROJECTS</div> */}
      <div className="background"></div>
      <div className="projects-title d-flex justify-content-center align-items-end">
        <h1 className="display-3 fw-bold text-center mb-4">Projects</h1>
      </div>
      <div className="projects container-fluid px-0">
        <div className="row projects_layout g-3">
          {imageData.map(({ image }, index) => {
            return <ProjectCards image={image} key={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
