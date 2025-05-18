import React from 'react'
import logo from '../assets/react.svg'
// import '../css/navbar.css'
import { MdNotifications } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { MdSettings } from "react-icons/md";
import { MdAttachMoney } from "react-icons/md";
import { MdPowerSettingsNew } from "react-icons/md";

const Navbar = () => {

    return (
        <div className="d-flex justify-content-between align-items-center text-sm py-2 border-bottom border-secondary">
            <nav className="navbar navbar-light">
                <div className="container-fluid d-flex align-items-center gap-2 small">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="Logo" height="30" className="d-inline-block align-top" />
                    </a>
                </div>
            </nav>
            <div className="d-flex align-items-center gap-4">
                {/* Notification Icons */}
                <div className="d-flex align-items-center gap-3">

                    <div className="position-relative">
                        <MdNotifications size={24} />
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '0.7rem' }}>3</span>
                    </div>
                </div>
                {/* User Profile Dropdown */}
                <div className="dropdown px-3">
                    <a className="d-flex align-items-center text-dark text-decoration-none dropdown-toggle" href="#" id="dropdownUser" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src={logo} alt="John Doe" width="40" height="40" className="rounded-circle me-2" />
                        <span>John Doe</span>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end shadow" aria-labelledby="dropdownUser" style={{ minWidth: 300 }}>
                        <li className="px-3 py-2 border-bottom">
                            <div className="d-flex align-items-center">
                                <img src={logo} alt="John Doe" width="48" height="48" className="rounded-circle me-2" />
                                <div>
                                    <div className="fw-bold">John Doe</div>
                                    <div className="text-muted" style={{ fontSize: '0.9rem' }}>johndoe@example.com</div>
                                </div>
                            </div>
                        </li>
                        <li><a className="dropdown-item d-flex align-items-center gap-2" href="#"><MdAccountCircle /> Account</a></li>
                        <li><a className="dropdown-item d-flex align-items-center gap-2" href="#"><MdSettings /> Setting</a></li>
                        <li><a className="dropdown-item d-flex align-items-center gap-2" href="#"><MdAttachMoney /> Billing</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item d-flex align-items-center gap-2 text-danger" href="#"><MdPowerSettingsNew /> Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Navbar