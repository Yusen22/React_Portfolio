import React from "react";
import './Project.css'
import 'bootstrap/dist/css/bootstrap.min.css';


// By importing the Header.css file, it is added to the DOM whenever this component loads

function Project(props) {
    const { name, description, deployedLink, repoLink, screenshotLink } = props
  return (
    <div className="card project-card">
    <img src={ screenshotLink } className="card-img-top" alt= { name }/>
    <div className="card-body">
      <h5 className="card-title">{ name } </h5>
      <p className="card-text">{ description }</p>
      <a href= { deployedLink } className="btn btn-primary">Deployed Application</a>
      <a href= { repoLink } className="btn btn-primary">GitHub Repository </a>
    </div>
  </div>
  );
}

export default Project;
