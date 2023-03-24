import React from "react";
import Container from "../Container";
import { Link } from 'react-router-dom'
import './style.css'


// By importing the Header.css file, it is added to the DOM whenever this component loads

function Contact() {
  return (
    <div className="outer-contact">
      <h2 id="contact-title">Contact</h2>
      <Container>
        <div className="contact-section col-sm-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Contact</h5>
              <ul>
                <li className="contact-list-item">Email:
                  <a className="contact-link" href="elijahwilsher@gmail.com">&nbsp;elijahwilsher@gmail.com</a>
                </li>
                <li className="contact-list-item">Phone:
                  <a className="contact-link">&nbsp;+447387570398</a>
                </li>
                <li className="contact-list-item">CV:
                  <a className="contact-link" href="../../Elijah_Wilsher_CV_2023">&nbsp;Access here</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Social Media</h5>
              <ul>
                <li className="contact-list-item">LinkedIn:
                  <a className="contact-link" href="https://www.linkedin.com/in/elijah-wilsher-696086185/">&nbsp;https://www.linkedin.com/in/elijah-wilsher-696086185/</a>
                </li>
                <li className="contact-list-item">GitHub:
                  <a className="contact-link" href="https://github.com/Yusen22">&nbsp;https://github.com/Yusen22</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
      
      <div id="form-section">
      <h3 id="form-title">Get in touch!</h3>
        <div className="form-card card">
          <div className="mb-5">
            <label for="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Your message</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            
          </div>
          <button type="button" className="btn form-button">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
