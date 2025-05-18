import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css';
import '../src/styles/style.css';
import '../src/scss/bootstrap.scss'
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';


function App() {


  return (
    <>
      <Topbar />
      <Navbar />
      <Hero />
    </>
  )
}

export default App
