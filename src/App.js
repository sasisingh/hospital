import React from 'react'
import Navbar from './components/Navbar'
import { treatments } from "./data"
import Main from './pages/Main'
import Treatment from './pages/Treatment.jsx'
import Footer from './pages/Footer.jsx'
import AboutUs from './pages/AboutUs.jsx'
import ContactUs from './pages/ContactUs.jsx'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main treatments={treatments} />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/treatment" element={<Treatment treatments={treatments} />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
