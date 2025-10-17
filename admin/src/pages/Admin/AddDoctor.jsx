import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets_admin/assets'
import { AdminContext } from '../../context/AdminContext';
import { toast } from 'react-toastify';
import axios from 'axios';

const AddDoctor = () => {

  const [form, setForm] = useState({
    docImg: false,
    name: "",
    email: "",
    password: "",
    experience: "1 Year",
    fees: "",
    about: "",
    speciality: "General physician",
    degree: "",
    address1: "",
    address2: "",
  });

  const handleChange = (e) => {
    const { name, value, files, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value
    }))
  };

  const { backendUrl, aToken } = useContext(AdminContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (!form.docImg) {
        return toast.error("Image not selected");
      }

      const formData = new FormData();

      formData.append('image', form.docImg);
      formData.append('name', form.name);
      formData.append('email', form.email);
      formData.append('password', form.password);
      formData.append('experience', form.experience);
      formData.append('fees', form.fees);
      formData.append('about', form.about);
      formData.append('speciality', form.speciality);
      formData.append('degree', form.degree);
      formData.append('address', JSON.stringify({ line1: form.address1, line2: form.address2 }));


      const { data } = await axios.post(backendUrl + "/api/admin/add-doctor", formData, { headers: { aToken } });

      if (data.success) {
        toast.success(data.message);
        setForm({
          docImg: false,
          name: "",
          email: "",
          password: "",
          experience: "1 Year",
          fees: "",
          about: "",
          speciality: "General physician",
          degree: "",
          address1: "",
          address2: "",
        });
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }


  }

  return (
    <form onSubmit={onSubmitHandler} className='m-5 w-full' action="">
      <p className='mb-3 text-lg font-medium'>Add Doctor</p>

      <div className='bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll'>
        <div className='flex flex-col items-center gap-4 mb-8  text-gray-500 '>
          <label htmlFor="doc-img">
            <img className='w-16 bg-gray-100  cursor-pointer' src={form.docImg ? URL.createObjectURL(form.docImg) : assets.upload_area} alt="" />
          </label>

          <input onChange={handleChange} name='docImg' type="file" id='doc-img' hidden />
          <p>Upload doctor <br /> picture</p>

        </div>

        <div className='flex flex-col lg:flex-row items-start gap-10 text-gray-600'>
          <div className='w-full lg:flex-1 flex flex-col gap-4'>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Doctor name</p>
              <input onChange={handleChange} name='name' value={form.name} className='border rounded-full px-3 py-2' type="text" placeholder='Name' required />
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Doctor Email</p>
              <input onChange={handleChange} name='email' value={form.email} className='border rounded-full px-3 py-2' type="email" placeholder='Email' required />
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Doctor Password</p>
              <input onChange={handleChange} name='password' value={form.password} className='border rounded-full px-3 py-2' type="password" placeholder='Password' required />
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Experience</p>
              <select onChange={handleChange} name='experience' value={form.experience} className='border rounded-full px-3 py-2' >
                <option value="1 Year">1 Year</option>
                <option value="2 Year">2 Year</option>
                <option value="3 Year">3 Year</option>
                <option value="4 Year">4 Year</option>
                <option value="5 Year">5 Year</option>
                <option value="6 Year">6 Year</option>
                <option value="7 Year">7 Year</option>
                <option value="8 Year">8 Year</option>
                <option value="9 Year">9 Year</option>
                <option value="10 Year">10 Year</option>
              </select>
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Fees</p>
              <input onChange={handleChange} name='fees' value={form.fees} className='border rounded-full px-3 py-2' type="number" placeholder='fees' required />
            </div>

          </div>

          <div className='w-full lg:flex-1 flex flex-col gap-4'>
            <div className='flex-1 flex flex-col gap-1'>
              <p>Speciality</p>
              <select onChange={handleChange} name='speciality' value={form.speciality} className='border rounded-full px-3 py-2' id="">
                <option value="General physician">General physician</option>
                <option value="Gynecoligist">Gynecoligist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatricians">Pediatricians</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Gastroenterologist">Gastroenterologist</option>
              </select>
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Education</p>
              <input onChange={handleChange} name='degree' value={form.degree} className='border rounded-full px-3 py-2' type="text" placeholder='education' required />
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Address</p>
              <input onChange={handleChange} name='address1' value={form.address1} className='border rounded-full px-3 py-2' type="text" placeholder='address 1' required />
              <input onChange={handleChange} name='address2' value={form.address2} className='border rounded-full px-3 py-2' type="text" placeholder='address 2' required />
            </div>
          </div>
        </div>

        <div >
          <p className='mt-4 mb-2'>About Doctor</p>
          <textarea onChange={handleChange} name='about' value={form.about} className='w-full px-4 pt-2 border rounded' placeholder='write about doctor' rows={5} required />
        </div>

        <button type='submit' className='bg-primary text-white px-10 py-3 mt-4 rounded-full'>Add doctor</button>
      </div>
    </form>
  )
}

export default AddDoctor