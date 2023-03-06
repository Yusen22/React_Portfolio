import React from "react";
import Header from "./Header";
import Project from "./Project";

// By importing the Header.css file, it is added to the DOM whenever this component loads

function ProjectPage() {
  return (
    <div>
      <Project name="Password Generator" deployedLink="https://yusen22.github.io/Password_Generator/" repoLink="https://github.com/Yusen22/Password_Generator" screenshotLink='https://i.scdn.co/image/ab67616d0000b2732e9ea57a8a6a9607f7048b67' />
      <Project name="Weather Forecast Application" deployedLink="https://yusen22.github.io/5_Day_Weather_Application/" repoLink="https://github.com/Yusen22/5_Day_Weather_Application" screenshotLink="./5_day_planner_app_screenshot.png" />
    </div>
  );
}

export default ProjectPage;
