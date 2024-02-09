import React from 'react'
import About from '../assets/about.webp'
import aboutBackground from "../assets/about-background.jpg"
import AboutAccordian from './Accordian'
const AboutUs = () => {
  return (
    <div className=''>
      <div className='grid md:grid-cols-2 md:mx-[80px] sm:grid-cols-1 sm:mx-[150px] lg:grid-cols-2 gap-10 p-10  lg:mx-[200px]'>
        <div className=''>
          <img src={About} alt='about' loading='lazy' className=' border-8 shadow-lg shadow-slate-400 border-white' />
        </div>
        <div className='text-justify leading-normal'>
          <h1 className='text-center text-xl font-bold'>Welcome to our Hospital</h1>
          <p className='mt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus ipsa laboriosam pariatur sint ad explicabo omnis consequuntur, perspiciatis nam aspernatur!</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis id blanditiis corrupti dolorem possimus inventore libero voluptate itaque. Reprehenderit ad distinctio possimus ab quae aspernatur dolorem officiis voluptate aperiam dolorum.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, nisi?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum dolore a reiciendis temporibus quasi neque.</p>
        </div>
      </div>
      <div className=''>
        {/* <img src={aboutBackground} alt='' className='w-full opacity-10 h-[400px] absolute ' /> */}
        <div className='grid md:grid-cols-2 md:mx-[80px] sm:grid-cols-1 sm:mx-[150px] lg:grid-cols-2 gap-10 p-10  lg:mx-[200px]'>
          <div>
            <table className='table-auto border border-collapse w-full bg-slate-50 text-center border-slate-500'>
              <thead>
                <tr>
                  <td colspan="2" className="border px-3 py-2 border-slate-300 bg-slate-500 text-center">Openeing Hours</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-3 py-2 border-slate-300">Sunday</td>
                  <td className="border px-3 py-2 border-slate-300">5.30 PM to 8.30 PM</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2 border-slate-300">Monday</td>
                  <td className="border px-3 py-2 border-slate-300">8.00AM to 12.30PM, 5.30 PM to 8.30 PM</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2 border-slate-300">Tuesday</td>
                  <td className="border px-3 py-2 border-slate-300">8.00AM to 12.30PM, 5.30 PM to 8.30 PM</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2 border-slate-300">Wednesday</td>
                  <td className="border px-3 py-2 border-slate-300">5.30 PM to 8.30 PM</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2 border-slate-300">Thursday</td>
                  <td className="border px-3 py-2 border-slate-300">5.30 PM to 8.30 PM</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2 border-slate-300">Friday</td>
                  <td className="border px-3 py-2 border-slate-300">8.00AM to 12.30PM, 5.30 PM to 8.30 PM</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2 border-slate-300">Saturday</td>
                  <td className="border px-3 py-2 border-slate-300"> 8.00AM to 12.30PM, 5.30 PM to 8.30 PM</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className=''>
  
            <AboutAccordian/>

          </div>
        </div>
      </div>
    </div>


  )
}

export default AboutUs
