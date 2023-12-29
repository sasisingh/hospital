import React from 'react'
import AppointmentForm from '../components/AppointmentForm'
import dr5 from "../assets/dr5.png"
 import Appointment from "../assets/appointment.avif"
const AppFormDr = () => {
  return (
    <div  className=' bg-gray-200 bg-cover' style={{backgroundImage: `url(${Appointment})`}}>
      <div className='grid sm:grid-cols-1  md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 sm:mx-[100px] md:mx-[180px] '>
        <div data-aos="fade-right" className='p-6'>
          <AppointmentForm />
        </div>

        <div data-aos="fade-left" className='sm:mx-20 md:mx-0 xl:m-0 '>
        <img src={dr5} alt="DrImage" className='h-[500px]' />
        </div>
      </div>
    </div>
  )
}

export default AppFormDr
