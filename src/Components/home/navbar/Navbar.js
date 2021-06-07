import React from 'react';
import { Link } from 'react-scroll';
import {  } from 'react-router-dom';


const Navbar = () => {
    const brandName = '<Jobayer Majumder />'
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div className="container">
                <a className="navbar-brand text-secondary brandName" href='/'> {brandName}  </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                    <Link activeClass="active" to="service">
                        <a className="nav-link" href="/">Services</a>
                    </Link>
                    <Link activeClass="active" to="work">
                        <a className="nav-link" href="/">Project</a>
                    </Link>
                    <Link activeClass="active" to="about">
                        <a className="nav-link" href="/">About Me</a>
                    </Link>
                    <Link activeClass="active" to="contact">
                        <a className="nav-link" href="/">Contact</a>
                    </Link>
                        {/* <button className="btn btn-brand rounded-pill"><a className="nav-link" href="/">Download Resume</a></button> */}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;