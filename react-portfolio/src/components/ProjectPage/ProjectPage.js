import React, { useState } from "react";
// import Header from "./Header";
import Project from "../Project/Project";
import Container from "../Container/index"
import projects from "../../projects.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProjectPage.css'

// By importing the Header.css file, it is added to the DOM whenever this component loads

function ProjectPage() {
  console.log(projects)

  return (

    <Container id="projects-section">
      <h1 id="projects-title">Projects</h1>

      {projects.map((project, index) => {
        // const image = require(screenshotLink)

        return (

          <Project
            key={index}
            name={project.name}
            description={project.description}
            deployedLink={project.deployedApp}
            repoLink={project.githubRepo}
            screenshot={project.screenshot} />
        );
      })}

    </Container>

  )
}




// <div>
//   {projects.forEach((p) => {
//     return <Project
//       key={p.name}
//       name={p.name}
//       description={p.description}
//       deployedLink={p.deployedApp}
//       repoLink={p.githubRepo}
//       screenshotLink={p.screenshot} />


//   })}
// </div>






export default ProjectPage;

// {friends.map(function(buddy) {
//   return <FriendCard
//     key={buddy.id}
//     name={buddy.name + ", my pal"}
//     image={buddy.image}
//     occupation={buddy.occupation}
//     location={buddy.location}
//     doRemove={function() { removeFriend(buddy.id)} }
//   />
// })}