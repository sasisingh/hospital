import React, { useState } from 'react';
import { FaLessThan, FaGreaterThan } from "react-icons/fa";
import "../components/styles/Testimonial.css"
const testimonials = [
    {
        id: 1, name: 'Janshon', address: " Mumbai", comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTois4ch39QVlapnSbEuKTgMFrfZMc0CtQj5wRjCeu1iqnU3t7Q"
    },
    {
        id: 2, name: 'Steve Thomsan', address: "Chenni", comment: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTvgjMMfIcy6dYAQu5zoS8o5TjLM_EuH8pRessR8Bg7mxk5RxD"
    },
    {
        id: 3, name: 'Kristana', address: "Delhi", comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ8DZIC064VqrSLYsSwR4xOWJMncSiuBqimVbU_2D6ZMaC1AOw7"
    }

];

const Testimonials = () => {

    const [startIndex, setStartIndex] = useState(0);

    const handleNext = () => {
        setStartIndex((prevIndex) => (prevIndex === testimonials.length - 2 ? 0 : prevIndex + 1));
    };

    const handlePrev = () => {
        setStartIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 2 : prevIndex - 1));
    };
    return (
        <div className='bg-sky-600'>
            <h1 className='text-center  pt-5 font-bold text-3xl font-serif'>Our Testimonial</h1>

            <p className='text-center  text-base my-2 font-serif'>What our Patients say about Us</p>

            <div className="testimonial-carousel py-5  border-gray-200 ">
                <div className="row">
                    {testimonials.slice(startIndex, startIndex + 2).map((testimonial) => (
                        <div key={testimonial.id} className="column">
                            <div className='grid sm:grid-cols-2 lg:grid-cols-4 ' >
                                <img src={testimonial.img} alt="review" height="100px" width="100px" className='rounded-full ' />
                                <div className='font-serif mt-5 pt-5 lg-ps-5 lg:w-52'>
                                    <h3><b>{testimonial.name}</b></h3>
                                    <p>{testimonial.address}</p>
                                </div>
                            </div>
                            <p>{testimonial.comment}</p>
                        </div>
                    ))}
                </div>
                <div className="controls text-center pb-5">
                    <button className='bg-white p-3 mx-2 rounded-3xl' onClick={handlePrev}><FaLessThan /></button>
                    <button className='bg-white p-3 mx-2 rounded-3xl' onClick={handleNext}><FaGreaterThan /></button>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
