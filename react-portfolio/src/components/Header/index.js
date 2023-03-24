import React, { useState } from "react";
import { Link } from 'react-router-dom'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Rotate as Hamburger } from 'hamburger-react'
//  Using Hamburger-react for burger icon animation on navbar


// By importing the Header.css file, it is added to the DOM whenever this component loads

function Header() {

    const [isOpen, setOpen] = useState(false)



    return (
        <header className="page-header">
            <nav className="navbar justify-content-xs-start justify-content-sm-around navbar-expand-lg fixed-top">
                <Link className="navbar-brand " to="/">
                    <div className="mainTitle d-md-flex h-100 w-100">
                        <h1 className="text-xs-center text-sm-center text-md-left mx-sm-0 ml-md-5 d-none d-sm-block" id="nameTitle">Elijah Wilsher</h1>
                        <h1 id="mobile-brand" className="d-sm-none">EW</h1>
                        <span className="d-none d-sm-none d-md-block" id="title-slash">//</span>
                        <h2 className="d-none d-sm-block" id="jobTitle">front-end developer.</h2>
                    </div>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active title-hover">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>

                        <li className="nav-item title-hover">
                            <Link className="nav-link" to="/projects">Projects</Link>
                        </li>
                        <li className="nav-item title-hover">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;
