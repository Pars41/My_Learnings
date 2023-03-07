import React from "react";

const ProjectCards = ({ image }) => {
  // <div>PROJECT CARDS</div>;
  return (
    <div className="col-lg-6 col-xl-4 projects_layout_project p-0">
      <img
        src={image}
        alt="project"
        className="projects_layout_project_image"
      />
    </div>
  );
};

export default ProjectCards;
