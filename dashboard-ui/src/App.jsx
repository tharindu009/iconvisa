import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '../src/css/globals/colors.css'
import '../src/css/globals/typography.css'
import '../src/css/globals/reset.css'
import '../src/css/globals/util.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '../src/css/styles.css'
import Sidebar from './components/Sidebar'
import { ToastContainer, toast } from 'react-toastify';
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard'


function App() {

  return (
    // return aToken ? (
    <div className='bg-container'>
      <ToastContainer />
      <Navbar />
      <div className='d-flex align-items-start'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<></>} />
          <Route path='/dashboard' element={<Dashboard />} />
          {/* <Route path='/all-appointments' element={<AllAppointmnets />} />
          <Route path='/add-service' element={<AddService />} />
          <Route path='/service-list' element={<ServiceList />} />
          <Route path='/customers-list' element={<CustomersList />} /> */}
        </Routes>
      </div>
    </div>
  )
  // ) : (
  //   <>
  //     <Login />
  //     <ToastContainer />
  //   </>
  // )
}

export default App
