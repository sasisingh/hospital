import React from 'react'
import Treatment from './Treatment'
import { treatments } from '../data'
import AppFormDr from './AppFormDr'
import Team from './Team'
import dr2 from "../assets/dr2.png"
import main from "../assets/main.jpg"


const Main = () => {

  return (
    <div>
      <div>
       <div style={{backgroundImage: `url(${main})`}} className='bg-cover'>
       <div className='grid sm:grid-cols-1 pt-10 sm:mx-20 md:grid-cols-2 md:mx-5 lg:grid-cols-2 mx-10'
         >
          <div data-aos="zoom-in" className='relative mx-auto'>
            <img src={dr2} alt="section2" />
          </div>
          <div>
            <h1 data-aos="fade-down" className='text-4xl font-bold text-sky-600 leading-normal'>SWEET TREATMENT<br /> FOR ALL YOUR PAINS</h1>
            <h3 data-aos="fade-down" className='text-2xl font-bold text-sky-600 leading-normal'>We Provide best Treatment for you</h3>
            <p data-aos="fade-down" className='text-lg text mt-3 leading-normal'>Our treatment is very benificial for people as it is<br />
              very useful and efficient in treating an immense range of diseases and long-term illness.
            </p>
            <button data-aos="fade-up" className='my-10 bg-sky-500 rounded-2xl px-3 py-2 font-bold text-white cursor-pointer hover:bg-sky-600'>Purchase This Now</button>

          </div>
        </div>
       </div>
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 text-white font-bold text-xl' >
          <div className='bg-sky-600 text-center py-5 h-20'>Care about your Health</div>
          <div className='bg-sky-500 text-center py-5 h-20'>Professional Doctors</div>
          <div className='bg-sky-600 text-center py-5 h-20'>15000+ People Treated</div>
          <div className='bg-sky-500 text-center py-5 h-20'>Fast and Flex Service</div>
        </div>
      </div>
      <Treatment treatments={treatments} />
      <AppFormDr />
      <Team />
    </div>

  )
}

export default Main
