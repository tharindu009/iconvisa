import React from 'react'
import { RiUserSharedLine, RiNumbersLine } from "react-icons/ri";

const Dashboard = () => {
    return (
        <div className="container mt-4 mb-3">
            <h4 className='mb-2'>Dashboard</h4>
            <div className='bg-white p-4 border rounded'>
                <div className='row'>
                    <div className='col-md-4 mb-3'>
                        <div className="card text-center">
                            <div className="card-body d-flex flex-column align-items-center">
                                {/* <img className='svg-size-2' src={assets.appointments_icon} alt="" /> */}
                                <RiUserSharedLine size={50} className='text-info' />
                                <h5 className="card-title">New Requests</h5>
                                <p className="card-text h4 text-info">13</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 mb-3'>
                        <div className="card text-center">
                            <div className="card-body d-flex flex-column align-items-center">
                                <RiNumbersLine size={50} className='text-info' />
                                <h5 className="card-title">Total Requests</h5>
                                <p className="card-text h4 text-info">34</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 mb-3'>
                        <div className="card text-center">
                            <div className="card-body d-flex flex-column align-items-center">
                                {/* <img className='svg-size-2' src={assets.list_icon} alt="" /> */}
                                <h5 className="card-title">Services</h5>
                                <p className="card-text h4 text-info">23</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row py-2 d-flex justify-content-between'>
                    <hr />
                    {/* <img className='svg-size-2' src={assets.list_icon} alt="" /> */}
                    <h5>Latest Appointments</h5>
                </div>
                <div className='row border-bottom py-3 bg-body-secondary text-bold'>
                    <p className='col-1'>#</p>
                    <p className='col-3'>Customer Name</p>
                    <p className='col-2'>Service</p>
                    <p className='col-3'>Date & Time</p>
                    <p className='col-2'>Action</p>
                </div>

                <div className='row border-bottom py-2' >
                    <p className='col-1'>1</p>
                    <p className='col-3'>name</p>
                    <p className='col-2'>name tesxt</p>
                    <p className='col-3'>date </p>
                    <div className='col-2'>
                        <p>action</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dashboard