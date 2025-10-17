import React, { useContext } from 'react'
import { assets } from '../assets/assets_admin/assets'
import { AdminContext } from '../context/AdminContext'
import { useNavigate } from 'react-router-dom';
import { DoctorContext } from '../context/DoctorContext';

const Navbar = () => {

  const { aToken, setAToken } = useContext(AdminContext);
  const { dToken, setDToken } = useContext(DoctorContext);

  const navigate = useNavigate();


  const logout = () => {
    navigate('/');
    aToken && setAToken('');
    aToken && localStorage.removeItem('aToken');
    dToken && setDToken('');
    dToken && localStorage.removeItem('dToken');
  }

  return (
    <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white'>
      <div className='flex items-center gap-2 text-xs'>
        <div className='grid grid-cols-1'>
          <img onClick={() => navigate("/")} className='w-36 cursor-pointer h-28' src={assets.duc} alt="" />
          <p className='font-bold pl-8'>MedSewa</p>
        </div>
      </div>
      <p className='border px-2.5 py-0.5  border-gray-500 text-gray-600 hover:text-white hover:bg-black hover:transition-all hover:duration-75'>{aToken ? "Admin" : "Doctor"}</p>
      <button onClick={logout} className='bg-primary text-white text-sm px-10 py-2 rounded-full'>Logout</button>
    </div>
  )
}

export default Navbar