import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-gray-700'>
      <div className='grid grid-cols-2 text-white md:grid-cols-4  mx-auto w-full max-w-screen-xl '>

        <div className='leading-normal p-4 my-3 '>
          <h1>About Us</h1>
          <p className='text-justify'>The mission of India Hospital is to provide quality health services and facilities for the community, to promote wellness, to relieve suffering .</p>

        </div>
        <div className=' p-4 my-3'>
          <h1>Quick Links</h1>
          <p><Link to="/">Home</Link></p>

          <p><Link to="/about-us">About us</Link></p>
          <p><Link to="/treatment">Treatment</Link></p>
          <p><Link to="/contact-us">Contact Us</Link></p>
        </div>
        <div className=' p-4 my-3'>
          <h1> Follow Us</h1>
          <p><Link to="https://www.instagram.com/">Instagram</Link></p>
          <p><Link to="https://www.linkedin.com/">LinkedIn</Link></p>
          <p><Link to="https://www.facebook.com">Facebook</Link></p>
          <p><Link to="https://www.twitter.com">Twitter</Link></p>
        </div>
        <div className=' leading-normal justify-between p-4 my-3'>
          <h1 >Contact Address</h1>
          <p>Nagan Comunications </p>
          <p> Phone : +91 9443682111 </p>
          <p> Email : nagantv111@gmail.com</p>
          <p className='indent-1 tracking-tight'>Web : www.solutions.com </p>

        </div>

      </div>
      <div className='text-white bg-gray-800 text-center text-base py-3'>2024 © All Rights Reserved Designed and developed by sasi</div>
    </div>
  )
}

export default Footer
