import React from 'react';
import logo from '../assets/img/icon_logom.png';

function Navbar() {
    return (
        <div className='container-fluid p-0'>
            <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5">
                <a href="index.html" className="navbar-brand d-flex align-items-center">
                    <h1 className="m-0">
                        <img className="img-fluid me-3" src={logo} alt="" />
                    </h1>
                </a>
                <button
                    type="button"
                    className="navbar-toggler"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-3">
                        <a href="index.html" className="nav-item nav-link active">
                            Home
                        </a>
                        <a href="about.html" className="nav-item nav-link">
                            About Us
                        </a>
                        <a href="service.html" className="nav-item nav-link">
                            Our Services
                        </a>
                        <div className="nav-item dropdown">
                            <a
                                href="#"
                                className="nav-link dropdown-toggle"
                                data-bs-toggle="dropdown"
                            >
                                Pages
                            </a>
                            {/* <div className="dropdown-menu bg-light m-0">
                            <a href="feature.html" className="dropdown-item">
                                Features
                            </a>
                            <a href="appointment.html" className="dropdown-item">
                                Appointment
                            </a>
                            <a href="team.html" className="dropdown-item">
                                Our Team
                            </a>
                            <a href="testimonial.html" className="dropdown-item">
                                Testimonial
                            </a>
                            <a href="404.html" className="dropdown-item">
                                404 Page
                            </a>
                        </div> */}
                        </div>
                        <a href="contact.html" className="nav-item nav-link">
                            Contact Us
                        </a>
                    </div>
                    <a href="appointment.html" className="btn btn-primary border-secondary rounded-pill py-2 px-4 px-lg-3 mb-3 mb-md-3 mb-lg-0">
                        Free Consultation
                    </a>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;