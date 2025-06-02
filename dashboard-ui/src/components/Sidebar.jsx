import React, { useState } from 'react'
import { CiViewList } from "react-icons/ci";
import { FaUsers } from "react-icons/fa";
import { PiGaugeFill } from "react-icons/pi";
import { NavLink } from 'react-router-dom';
import { MdOutlineOndemandVideo } from "react-icons/md";
import { GrUserSettings } from "react-icons/gr";

const Sidebar = () => {

    const [aToken, setAToken] = useState(true);

    return (
        <nav className='navbar navbar-expand-md navbar-light d-flex flex-md-column'>
            <button className='navbar-toggler' type='button' data-bs-toggle='collapse'
                data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent'
                aria-expanded='false' aria-label='Toggle Navigation'>
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse w-100 bg-white' id='navbarSupportedContent'>{
                aToken &&
                <ul style={{ width: "250px" }}>
                    <NavLink to={'/dashboard'} className={({ isActive }) => `d-flex align-items-center gap-3 py-3 px-3 px-md-9 min-w-72 cursor-pointer 
                        ${isActive ? 'bg-info border-3 border-end border-primary' : ''}`}>
                        <PiGaugeFill />
                        <p>Dashboard</p>
                    </NavLink>
                    <NavLink to={'/all-appointments'} className={({ isActive }) => `d-flex align-items-center gap-3 py-3 px-3 px-md-9 min-w-72 cursor-pointer 
                        ${isActive ? 'bg-light border-3 border-end border-primary' : ''}`}>
                        <FaUsers />
                        <p>All Inquiries</p>
                    </NavLink>
                    <NavLink to={'/blog'} className={({ isActive }) => `d-flex align-items-center gap-3 py-3 px-3 px-md-9 min-w-72 cursor-pointer 
                        ${isActive ? 'bg-light border-3 border-end border-primary' : ''}`}>
                        <CiViewList />
                        <p>Blog</p>
                    </NavLink>
                    <NavLink to={'/service-list'} className={({ isActive }) => `d-flex align-items-center gap-3 py-3 px-3 px-md-9 min-w-72 cursor-pointer 
                        ${isActive ? 'bg-light border-3 border-end border-primary' : ''}`}>
                        <MdOutlineOndemandVideo />
                        <p>Video Links</p>
                    </NavLink>
                    {/* <NavLink to={'/customers-list'} className={({ isActive }) => `d-flex align-items-center gap-3 py-3 px-3 px-md-9 min-w-72 cursor-pointer 
                        ${isActive ? 'bg-light border-3 border-end border-primary' : ''}`}>
                        <GrUserSettings />
                        <p>Users</p>
                    </NavLink> */}
                </ul>
            }
            </div>
        </nav>
    )
}

export default Sidebar