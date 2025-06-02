import React, { useState, useContext, useEffect } from 'react';
import { RiUserSharedLine, RiNumbersLine } from "react-icons/ri";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { AdminContext } from '../context/AdminContext';
import { toast } from 'react-toastify';
import axios from 'axios';

const Dashboard = () => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const { aToken } = useContext(AdminContext);
    const [dashData, setDashData] = useState({ consultations: 0, latestrequests: [] });

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5); // You can change this value
    const [pageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

    const getDashboardData = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/consultation/dashboard', { headers: { aToken } });
            if (data.success) {
                setDashData(data.dashData);
                console.log("Dashboard data", dashData);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    const getTodayRequests = () => {
        const today = new Date();
        const todayDateString = today.toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format

        return dashData.latestrequests.filter((request) => {
            const requestDate = new Date(request.requestDate).toISOString().split('T')[0];
            return requestDate === todayDateString;
        });
    };

    const todayRequests = getTodayRequests();

    useEffect(() => {
        if (aToken) {
            getDashboardData();
        }
    }, [aToken]);

    const months = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

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

    // Get current items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = dashData.latestrequests.slice(indexOfFirstItem, indexOfLastItem);

    const handleClick = (event) => {
        setCurrentPage(Number(event.target.id));
    };

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(dashData.latestrequests.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map((number) => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={handleClick}
                    className={currentPage === number ? "active" : null}
                >
                    {number}
                </li>
            );
        } else {
            return null;
        }
    });

    const handleNextbtn = () => {
        setCurrentPage(currentPage + 1);

        if (currentPage + 1 > maxPageNumberLimit) {
            setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    };

    const handlePrevbtn = () => {
        setCurrentPage(currentPage - 1);

        if ((currentPage - 1) % pageNumberLimit === 0) {
            setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
    };

    let pageIncrementBtn = null;
    if (pageNumbers.length > maxPageNumberLimit) {
        pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
    }

    let pageDecrementBtn = null;
    if (minPageNumberLimit >= 1) {
        pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
    }

    return (
        <div className="container mt-4 mb-3">
            <h4 className='mb-2'>Dashboard</h4>
            <div className='bg-white p-4 border rounded'>
                <div className='row'>
                    <div className='col-md-4 mb-3'>
                        <div className="card text-center">
                            <div className="card-body d-flex flex-column align-items-center">
                                <RiUserSharedLine size={50} className='text-info' />
                                <h5 className="card-title">New Requests</h5>
                                <p className="card-text h4 text-info">{todayRequests.length}</p>
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
                </div>
                <div className='row py-2 d-flex justify-content-between'>
                    <hr />
                    <h5>Latest Appointments</h5>
                </div>

                <div className='row border-bottom py-3 bg-body-secondary text-bold'>
                    <p className='col-2'>Customer Name</p>
                    <p className='col-2'>Email</p>
                    <p className='col-2'>Phone No</p>
                    <p className='col-2'>Date & Time</p>
                    <p className='col-3'>Message</p>
                    <p className='col-1'>Resume</p>
                </div>
                {currentItems.map((item, index) => (
                    <div className='row border-bottom py-2' key={index} >
                        <p className='col-2'>{item.fullName}</p>
                        <p className='col-2'>{item.email}</p>
                        <p className='col-2'>{item.phone}</p>
                        <p className='col-2'>{slotDateFormat(item.requestDate)} </p>
                        <p className='col-3'>{item.message}</p>
                        <p className='col-1'>
                            <IoDocumentAttachOutline
                                style={{ cursor: 'pointer', fontSize: '1.5rem' }}
                                onClick={() => openFile(item.resumePath)}
                            />
                        </p>
                    </div>
                ))}
                <ul className="pageNumbers">
                    <li>
                        <button
                            disabled={currentPage === pageNumbers[0] ? true : false}
                            onClick={handlePrevbtn}
                        >
                            Prev
                        </button>
                    </li>
                    {pageDecrementBtn}
                    {renderPageNumbers}
                    {pageIncrementBtn}
                    <li>
                        <button
                            disabled={currentPage === pageNumbers[pageNumbers.length - 1] ? true : false}
                            onClick={handleNextbtn}
                        >
                            Next
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;