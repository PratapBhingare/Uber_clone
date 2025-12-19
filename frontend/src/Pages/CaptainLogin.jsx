import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import BackBtn from '../Components/BackBtn'
import { CaptainDataContext } from '../Context/CaptainContext';
import axios from 'axios';

function CaptainLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { captain, setCaptain } = useContext(CaptainDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {

    e.preventDefault()

    const logCaptain = ({
      email: email,
      password: password
    })

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, logCaptain);

    if (response.status === 200) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem('token', data.token);
      navigate('/captain-home');
    }

    // console.log(newCaptain);

    setEmail('');
    setPassword('');
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <BackBtn />
        <form onSubmit={(e) => submitHandler(e)}>
          <h3 className='text-xl mb-3 font-semibold'>What's Your Email</h3>
          <input
            className='w-full bg-[#eeeeee] px-4 py-2 mb-6 rounded border-gray-300 border focus:ring-2 focus:ring-amber-400 focus:outline-none text-lg placeholder:text-sm'
            type="email"
            required
            placeholder='email@example.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h3 className='text-xl mb-3 font-semibold'>Enter Password</h3>
          <input
            className='w-full bg-[#eeeeee] px-4 py-2 mb-6 rounded border-gray-300 border focus:ring-2 focus:ring-amber-400 focus:outline-none text-lg placeholder:text-sm'
            type="password"
            required
            placeholder='example123'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className='bg-black text-white rounded w-full px-4 py-2 font-semibold text-lg mb-2'>Login</button>
          <p className='text-center'>Wanna be Captain? <Link to='/captain-signup' className='text-blue-600'>Create New Account</Link> </p>
        </form>
      </div>
      <div>
        <Link to='/login' className='flex justify-center bg-green-400 text-white rounded w-full px-4 py-2 font-semibold text-lg mb-6'>Sign in as User</Link>
      </div>
    </div>
  )
}

export default CaptainLogin