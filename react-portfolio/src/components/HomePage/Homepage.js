import React from "react";
import "./Homepage.css"


// By importing the Header.css file, it is added to the DOM whenever this component loads

function Homepage() {

 const jumboImage = require('../../images/layered-waves-haikei.png')
  // Image generated with https://app.haikei.app/

  return (

    <div class="jumbotron jumbotron-fluid">

      <img className="w-100" id="jumbo-img" src={jumboImage} alt='layered_waves' />

    </div>
  );
}

export default Homepage;
