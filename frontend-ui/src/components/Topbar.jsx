import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
import { MdOutlinePhoneAndroid, MdEmail } from "react-icons/md";


function Topbar() {
    return (
        <div className="container-fluid px-5 d-none d-lg-block" style={{ backgroundColor: '#992564' }}>
            <div className="row gx-0 align-items-center">
                <div className="col-lg-5 text-center text-lg-start mb-lg-0">
                    <div className="d-flex">
                        <a href="#" className="text-light me-4"><MdEmail size={25} className='mx-3' />info@iconplacements.com</a>
                    </div>
                </div>
                <div className="col-lg-3 row-cols-1 text-center mb-2 mb-lg-0">
                    <div className="d-inline-flex align-items-center" style={{ height: '45px' }}>
                        {/* <a className="btn btn-sm btn-outline-light btn-square rounded-circle me-2" href=""><FaTwitter /></a> */}
                        <a className="btn btn-sm btn-outline-light btn-square rounded-circle me-2" href=""><FaFacebookF /></a>
                        {/* <a className="btn btn-sm btn-outline-light btn-square rounded-circle me-2" href=""><i className="fab fa-linkedin-in fw-normal text-secondary"></i></a> */}
                        <a className="btn btn-sm btn-outline-light btn-square rounded-circle me-2" href=""><FaInstagram /></a>
                        <a className="btn btn-sm btn-outline-light btn-square rounded-circle" href=""><FaYoutube /></a>
                    </div>
                </div>
                <div className="col-lg-4 text-center text-lg-end">
                    <div className="d-inline-flex align-items-center" style={{ height: '45px' }}>
                        <a href="#" className="text-light me-0"><FaSquarePhone size={25} className='mx-3' />+94 112 822 913 </a>
                        <a href="#" className="text-light me-0"><MdOutlinePhoneAndroid size={25} className='mx-3' />+94 720 774 788</a>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Topbar;