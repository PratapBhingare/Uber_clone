import React, { useState, useContext } from 'react'
import BackBtn from '../Components/BackBtn'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../Context/CaptainContext';
import axios from 'axios';

function CaptainSignup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [color, setColor] = useState('');
  const [capacity, setCapacity] = useState('');
  const [type, setType] = useState('');
  const [number, setNumber] = useState('');

  const { captain, setCaptain } = useContext(CaptainDataContext)
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const newCaptain = ({
      fullname: {
        firstname: firstname,
        lastname: lastname
      },
      email: email,
      password: password,
      vehicle: {
        color: color,
        capacity: capacity,
        plate: number,
        vehicleType: type
      }
    })

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, newCaptain);

    if (response.status === 201) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem('token', data.token);
      navigate('/captain-home');
    }

    // console.log(logCaptain);

    setEmail(''),
    setPassword('');
    setFirstname('');
    setLastname('');
    setColor('');
    setCapacity('');
    setNumber('');
    setType('');

  }
  return (
    <div className='p-7'>
      <BackBtn />
      <div className='pt-3'>
        <form onSubmit={(e) => submitHandler(e)}>
          <div className='flex gap-4'>
            <div className='w-1/2'>
              <h3 className='text-lg mb-3 '>First Name</h3>
              <input
                className='w-full bg-[#eeeeee] px-4 py-1 mb-6 rounded border-gray-300 border focus:ring-2 focus:ring-amber-400 focus:outline-none text-lg placeholder:text-sm'
                type="text"
                required
                placeholder='John'
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
            </div>

            <div className='w-1/2'>
              <h3 className='text-lg mb-3 '>Last Name</h3>
              <input
                className='w-full bg-[#eeeeee] px-4 py-1 mb-6 rounded border-gray-300 border focus:ring-2 focus:ring-amber-400 focus:outline-none text-lg placeholder:text-sm'
                type="text"
                placeholder='snow'
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
          </div>

          <h3 className='text-lg mb-3 '>Enter Email Id</h3>
          <input
            className='w-full bg-[#eeeeee] px-4 py-2 mb-6 rounded border-gray-300 border focus:ring-2 focus:ring-amber-400 focus:outline-none text-lg placeholder:text-sm'
            type="email"
            required
            placeholder='email@example.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h3 className='text-lg mb-3 '>Set Password</h3>
          <input
            className='w-full bg-[#eeeeee] px-4 py-2 mb-6 rounded border-gray-300 border focus:ring-2 focus:ring-amber-400 focus:outline-none text-lg placeholder:text-sm'
            type="password"
            required
            placeholder='example123'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <h3 className='text-lg mb-3 '>What's your vehicle color?</h3>
          <input
            className='w-full bg-[#eeeeee] px-4 py-2 mb-6 rounded border-gray-300 border focus:ring-2 focus:ring-amber-400 focus:outline-none text-lg placeholder:text-sm'
            type="text"
            required
            placeholder='red'
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />

          <h3 className='text-lg mb-3 '>What's your vehicle's type</h3>
          <div className="w-full inline-block mb-6">
            <select
              className="w-full bg-[#eeeeee] px-4 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-amber-400 focus:outline-none text-lg placeholder:text-sm"
              required
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option className="text-sm" value="" disabled>Select vehicle type</option>
              <option className="text-sm" value="car">Car</option>
              <option className="text-sm" value="bike">Bike</option>
              <option className="text-sm" value="auto">Auto</option>
            </select>
          </div>


          <h3 className='text-lg mb-3 '>What's your vehicle's number Plate?</h3>
          <input
            className='w-full bg-[#eeeeee] px-4 py-2 mb-6 rounded border-gray-300 border focus:ring-2 focus:ring-amber-400 focus:outline-none text-lg placeholder:text-sm'
            type="text"
            required
            placeholder='MH 30 BR 1318'
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />

          <h3 className='text-lg mb-3 '>What's your vehicle's capacity?</h3>
          <input
            className='w-full bg-[#eeeeee] px-4 py-2 mb-6 rounded border-gray-300 border focus:ring-2 focus:ring-amber-400 focus:outline-none text-lg placeholder:text-sm'
            type="number"
            required
            placeholder='4'
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
          />

          <button className='bg-black text-white rounded w-full px-4 py-2 font-semibold text-lg mb-6'>Create Account</button>
          <p className='text-center'>Already have an account? <Link to='/login' className='text-blue-600'>Login Here</Link> </p>
        </form>
      </div>
    </div>
  )
}

export default CaptainSignup