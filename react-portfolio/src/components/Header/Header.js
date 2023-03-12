import React from "react";
import { Link } from 'react-router-dom'
import './/Header.css'
import 'bootstrap/dist/css/bootstrap.min.css'


// By importing the Header.css file, it is added to the DOM whenever this component loads

function Header() {

    
    return (
        <header className="page-header">
            <nav className="navbar navbar-expand-lg">
                <Link className="navbar-brand " to="/">
                    <div className="mainTitle d-md-flex h-100 w-100">
                        <h1 className="text-xs-center text-sm-center text-md-left" id="nameTitle">Elijah Wilsher</h1>
                        <span className="d-none d-sm-none d-md-block" id="title-slash">//</span>
                        <h2 id="jobTitle">front-end developer.</h2>
                    </div>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/projects">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;
