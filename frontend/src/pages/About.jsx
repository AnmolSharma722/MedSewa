import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>
      <div className='flex flex-col my-10 md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to PRESCRIPTO , your trusted partner is managing you heealthcare needs convieniently and efficiently </p>
          <p>Prescripto is commited to excellence in the healthcare technology</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Our vision is to create a seamkess healthcare experience for the every user. we aim to bridge the gap between the patients and the healthcare providers.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>

        <div className='border px-10 md:px-16 py-8 sm:py16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer text-gray-600'>
          <b>EFFICIENCY</b>
          <p>Stramlined Appointments scheduling that fits  into your busy lifestyle.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer text-gray-600'>
          <b>CONVENIENCE</b>
          <p>Access to the wide network of healthcare professionals in you area.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer text-gray-600'>
          <b>PERSONALIZATION</b>
          <p>
            Tailored healthcare solutions that cater to your unique needs and preferences.
          </p>
        </div>

      </div>
    </div>
  )
}

export default About