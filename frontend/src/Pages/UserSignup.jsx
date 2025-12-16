import React, { useState } from 'react'
import BackBtn from '../Components/BackBtn'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../Context/UserContext';

function UserSignup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const { user, setUser } = React.useContext(UserDataContext);

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const newUser = {
      fullname: {
        firstname: firstname,
        lastname: lastname
      },
      email: email,
      password: password,
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);

    if (response.status === 201) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem('token', data.token);
      navigate('/home');
    }

    // console.log(newUser);

    setEmail(''),
    setPassword('');
    setFirstname('');
    setLastname('');
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

          <button className='bg-black text-white rounded w-full px-4 py-2 font-semibold text-lg mb-6'>Create Account</button>
          <p className='text-center'>Already have an account? <Link to='/login' className='text-blue-600'>Login Here</Link> </p>
        </form>
      </div>
    </div>
  )
}

export default UserSignup