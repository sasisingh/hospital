import React from 'react'
import TreatmentCard from '../components/TreatmentCard'


const Treatment = ({ treatments }) => {
  console.log(treatments)
  return (
    <div>
      <div className='bg-slate-200'>
        <div>
          <h1 className='text-center  pt-5 font-bold text-3xl font-serif'>Our Treatments</h1>

          <p className='text-center  text-base my-2 font-serif'>Take a Look at our Treatments</p>
        </div>

        <div className='grid md:grid-cols-2 pb-5 md:mx-[100px] lg:mx-[90px]  sm:grid-cols-1 sm:mx-[100px] lg:grid-cols-4  xl:grid-cols-4  ' >
          {
            treatments.map((item, index) => {
              return (
                <TreatmentCard item={item} />
              )
            })
          }
        </div>
      </div>
    </div>

  )
}

export default Treatment
