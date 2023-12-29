import React from 'react'

const TreatmentCard = ({ item }) => {
    return (
        <div data-aos="zoom-out" className='border h-52 rounded bg-white p-5 shadow-lg hover:shadow-black transition-all duration-500 my-5 mx-5'>
            <p className='text-center font-bold text-lg'>{item.title}</p> 
            <p className='text-clip mt-2'>{item.description}</p>
          
        </div>
    )
}

export default TreatmentCard
