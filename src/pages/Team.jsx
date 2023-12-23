import React from 'react'
import dr1 from "../assets/dr1.png"
import dr2 from "../assets/dr2.png"
import dr3 from "../assets/dr3.png"
import dr4 from "../assets/dr4.png"
const Team = () => {
  return (
    <div>
      <div className='mt-7'>
        <h1 className='text-center font-bold text-3xl font-serif'>Our Team</h1>
        <p className='text-center  text-base my-2 font-serif'>Meet our expert team of Docters</p>
      </div>
      <div className='grid sm:grid-cols-2 lg:grid-cols-4 lg:mx-[170px] md:mx-[120px] sm:mx-[0px]'>

        <div className='border rounded shadow-lg shadow-slate-200 mx-5 my-10'>
          <img src={dr1} alt='team' className='h-56  w-42 mx-auto' />
          <h1 className='text-center text-lg font-serif'>Reema Goyal</h1>
          <p className='text-center font-serif mb-1'>Specialist</p>
        </div>
        <div className='border rounded shadow-lg shadow-slate-200 mx-5 my-10'>
          <img src={dr2} alt='team' className='h-56 mt-2 w-42 mx-auto' />
          <h1 className='text-center text-lg font-serif'>Reema Goyal</h1>
          <p className='text-center font-serif mb-1'>Specialist</p>
        </div>
        <div className='border rounded shadow-lg shadow-slate-200 mx-5 my-10'>
          <img src={dr3} alt='team' className='h-56 mt-2 w-42 mx-auto' />
          <h1 className='text-center text-lg font-serif'>Reema Goyal</h1>
          <p className='text-center font-serif mb-1'>Specialist</p>
        </div>
        <div className='border rounded shadow-lg shadow-slate-200 mx-5 my-10'>
          <img src={dr4} alt='team' className='h-56 mt-2 w-42 mx-auto' />
          <h1 className='text-center text-lg font-serif'>Reema Goyal</h1>
          <p className='text-center font-serif mb-1'>Specialist</p>
        </div>

      </div>

    </div>
  )
}

export default Team
