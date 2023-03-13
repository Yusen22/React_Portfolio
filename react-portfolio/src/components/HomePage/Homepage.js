import React from "react";
import { Link } from 'react-router-dom'
import "./Homepage.css"
import 'bootstrap/dist/css/bootstrap.min.css'


// By importing the Header.css file, it is added to the DOM whenever this component loads

function Homepage() {

  const jumboImage = require('../../images/layered-waves-haikei.png')
  const profImage = require('../../images/profileimage.png')
  // Image generated with https://app.haikei.app/

  return (
    <>
      <div class="jumbotron jumbotron-fluid">

        <img className="w-100 h-100" id="jumbo-img" src={jumboImage} alt='layered_waves' />
        <div className="h-100 d-flex flex-wrap justify-content-around align-items-center" id="jumbo-info">
          <img className="w-xs-50 w-25" id="prof-img" src={profImage} />
          <div className="profile-text d-flex flex-column">
            <h2 id="prof-title">Welcome to my portfolio.</h2>
            <h3 className="" id="prof-statement">Designing intuitive, user-focused applications for the web</h3>
          </div>
        </div>
      </div>
      <section className="w-100 d-flex flex-column justify-content-center align-items-around" id="whereto-section">
        <h3>Where do you want to go?</h3>
        <div id="whereto-buttons">
          <button type="button" class="btn btn-secondary btn-lg">
            <Link className="link" to="/projects">Projects</Link>
          </button>
          <button type="button" class="btn btn-secondary btn-lg">
            <Link className="link" to="/contact">Contact</Link>
          </button>
        </div>
      </section>
    </>
  );
}

export default Homepage;
