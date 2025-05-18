import React from 'react';
import heroImage from '../assets/img/carousel_1.jpg';

function Hero() {
    return (
        <div className="container-fluid bg-light p-0 wow fadeIn" data-wow-delay="0.1s" style={{ marginTop: '90px' }}>
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <div className="py-2">
                            <h1 className="display-5 text-primary mb-4 animated slideInDown">
                                We Help You In Getting Visa to Canada
                            </h1>
                            <p className="fs-5 mb-4 animated slideInDown">
                                Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et amet tolore stet sea elitr, sadipscing gubergren amet no at. Sanctus sanctus lorem tempor, sea sit amet.
                            </p>
                            <a
                                href="appointment.html"
                                className="btn btn-secondary rounded-pill py-3 px-5 animated slideInDown"
                            >
                                Book An Appointment
                                <i className="fa fa-arrow-right ms-3"></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img className="img-fluid animated zoomIn" src={heroImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;