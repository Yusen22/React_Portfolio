import React from "react";
import { Link } from 'react-router-dom'
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import ProfileImage from '../../images/profileimage.png'
import Skills from '../Skills'



function Homepage() {

  
  const jumboImage = require('../../images/layered-waves-haikei.png')

  // Image generated with https://app.haikei.app/

  return (
    <div style={{ backgroundColor: '#00121f' }}>
      <div class="jumbotron jumbotron-fluid">

        <img className="w-100 h-100" id="jumbo-img" src={jumboImage} alt='layered_waves' />
        <div className="h-100 d-flex flex-wrap justify-content-around align-items-center" id="jumbo-info">
          <div className="col-xs-12 col-sm-6">
            <div className="profile-text d-flex flex-column">
              <h2 id="prof-title">My name is Elijah.</h2>
              <h3 className="" id="prof-statement">I design intuitive, user-focused applications for the web, and can help you create an online hub for your business.</h3>
            </div>
          </div>
          <div className="prof-image-section col-xs-12 col-sm-6">
           <img id="profile-image" src={ProfileImage} className="d-xs-none"/>
          </div>
        </div>
      </div>
      <Skills/>
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
      
    </div>
  );
}

export default Homepage;
