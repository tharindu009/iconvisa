import react, { useState, useContext } from 'react'
import './App.css'
import { AdminContext } from './context/AdminContext';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '../src/css/globals/colors.css'
import '../src/css/globals/typography.css'
import '../src/css/globals/reset.css'
import '../src/css/globals/util.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '../src/css/styles.css'
import '../src/css/dashboard.css'
import Sidebar from './components/Sidebar'
import { ToastContainer, toast } from 'react-toastify';
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard'
import Login from './pages/Login';
import CreateBlogPost from './pages/CreateBlogPost';
import BlogManagement from './pages/BlogManagement';
import EditBlogPost from './pages/EditBlogPost';
import RequestList from './pages/RequestList';
import CreateUser from './pages/CreateUser';


function App() {

  const { aToken } = useContext(AdminContext);

  return aToken ? (
    // return aToken ? (
    <div className='bg-container'>
      <ToastContainer />
      <Navbar />
      <div className='d-flex align-items-start'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/all-appointments' element={<RequestList />} />
          <Route path='/blog' element={<CreateBlogPost />} />
          <Route path='/manage-blogs' element={<BlogManagement />} />
          <Route path='/edit-blog/:id' element={<EditBlogPost />} />
          <Route path='/create-user' element={<CreateUser />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </div>

  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  )
}

export default App
