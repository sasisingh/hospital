import React from 'react'

const TreatmentCard = ({ item }) => {
    return (
        <div data-aos="zoom-out" className='border rounded bg-white p-5 shadow-lg hover:shadow-black transition-all duration-500 my-5 mx-5'>
           <center>
           <img src={item.img} alt="treatment" />
           </center>
            <p className='text-center font-bold text-lg mt-2'>{item.title}</p> 
            <p className='text-clip mt-2'>{item.description}</p>
        </div>
    )
}

export default TreatmentCard
