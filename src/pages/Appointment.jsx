import React from 'react'
import AppointmentForm from '../components/AppointmentForm'

const Appointment = ({ closeModal }) => {
  return (
    <div>
      <button className='absolute lg:left-[410px] sm:left-[30px] top-[40px] border-gray-400' onClick={closeModal}
      >X</button>
      <AppointmentForm />
    </div>
  )
}

export default Appointment
