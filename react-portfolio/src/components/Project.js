import React from "react";


// By importing the Header.css file, it is added to the DOM whenever this component loads

function Project(props) {
    const { name, deployedLink, repoLink, screenshotLink } = props
  return (
    <div className="card">
    <img src={ screenshotLink } className="card-img-top" alt= { name }/>
    <div className="card-body">
      <h5 className="card-title">{ name } </h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href= { deployedLink } className="btn btn-primary">Deployed Application</a>
      <a href= { repoLink } className="btn btn-primary">GitHub Repository </a>
    </div>
  </div>
  );
}

export default Project;