import React, { useState, useContext, useEffect } from 'react'
import { RiUserSharedLine, RiNumbersLine } from "react-icons/ri";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { AdminContext } from '../context/AdminContext';
import { toast } from 'react-toastify';
import axios from 'axios';

const Dashboard = () => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const { aToken } = useContext(AdminContext);
    const [dashData, setDashData] = useState({ consultations: 0, latestrequests: [] });


    const getDashboardData = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/consultation/dashboard', { headers: { aToken } });
            if (data.success) {
                setDashData(data.dashData);
                console.log("Dashboard data", dashData);

            }
            else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    }
    useEffect(() => {
        if (aToken) {
            getDashboardData();
        }
    }, [aToken]);


    const months = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    // Function to format the date eg. ( 20_01_2000 => 20 Jan 2000 )
    const slotDateFormat = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'short' });
        const year = date.getFullYear();

        return `${day}-${month}-${year}`;
    };

    const openFile = (filePath) => {
        window.open(backendUrl + '/' + filePath, '_blank');
    };


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
                                <p className="card-text h4 text-info">{dashData.consultations}</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 mb-3'>
                        <div className="card text-center">
                            <div className="card-body d-flex flex-column align-items-center">
                                <RiNumbersLine size={50} className='text-info' />
                                <h5 className="card-title">Total Requests</h5>
                                <p className="card-text h4 text-info">{dashData.consultations}</p>
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
                    {/* <p className='col-1'>#</p> */}
                    <p className='col-2'>Customer Name</p>
                    <p className='col-2'>Email</p>
                    <p className='col-2'>Phone No</p>
                    <p className='col-2'>Date & Time</p>
                    <p className='col-3'>Message</p>
                    <p className='col-1'>Action</p>
                </div>
                {dashData.latestrequests.map((item, index) => (
                    <div className='row border-bottom py-2' key={index} >
                        {/* <p className='col-1'>{index + 1}</p> */}
                        <p className='col-2'>{item.fullName}</p>
                        <p className='col-2'>{item.email}</p>
                        <p className='col-2'>{item.phone}</p>
                        <p className='col-2'>{slotDateFormat(item.requestDate)} </p>
                        <p className='col-3'>{item.message}</p>
                        <p className='col-1'><IoDocumentAttachOutline style={{ cursor: 'pointer', fontSize: '1.5rem' }}
                            onClick={() => openFile(item.resumePath)} /></p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Dashboard