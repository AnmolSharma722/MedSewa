import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Footer = () => {
    return (
        <div className='md:mx-10'>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                {/* left */}
                <div>
                    <div className='grid grid-cols-1'>
                        <img onClick={() => navigate("/")} className='w-36 cursor-pointer h-28' src={assets.duc} alt="" />
                        <p className='font-bold pl-8'>MedSewa</p>
                    </div>
                    <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni totam modi aliquid, qui aperiam sint iure distinctio nostrum necessitatibus exercitationem, perspiciatis at dolorem culpa laborum fuga molestias pariatur assumenda sed.</p>
                </div>

                {/* mid */}
                <div >
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='text-gray-600 flex flex-col gap-2'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Privay Policy</li>
                    </ul>
                </div>

                {/* right */}
                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='text-gray-600 flex flex-col gap-2'>
                        <li>+12345-67890</li>
                        <li>medsewadocs@gmail.com</li>
                    </ul>
                </div>
            </div>

            {/* copytright text */}
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2025@  - All Right Reseverd</p>
            </div>
        </div>
    )
}

export default Footer