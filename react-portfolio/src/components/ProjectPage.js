import React, { useState } from "react";
// import Header from "./Header";
import Project from "./Project";
import Container from "./Container/index"
import projects from "../projects.json"
import 'bootstrap/dist/css/bootstrap.min.css';

// By importing the Header.css file, it is added to the DOM whenever this component loads

function ProjectPage() {
  console.log(projects)

  const [ proj, setProj ] = useState(projects);

  const allProjects = proj.forEach(p => {
    console.log(p)
    return (
      
      <Project
        key={p.name}
        name={p.name}
        description={p.description}
        deployedLink={p.deployedApp}
        repoLink={p.githubRepo}
        screenshotLink={p.screenshot}
      />
    )
  })

  return (

    <Container>
      <h1>THIS IS MY PP</h1>
     {/* {allProjects} */}
     

    </Container>

  )
}




//   <div>
//     {projects.forEach((p) => {
// return <Project
//         key={p.name}
//         name={p.name}
//         description={p.description}
//         deployedLink={p.deployedApp}
//         repoLink={p.githubRepo}
//         screenshotLink={p.screenshot} />


//     })}
//   </div>






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