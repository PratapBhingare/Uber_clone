import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Start() {

  const images = [
    "https://images.unsplash.com/photo-1593950315186-76a92975b60c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1731842686156-74895c29a87b?q=80&w=386&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1657366123794-dcff74c6c4c9?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((pre) => (pre + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div>
      <div className="pt-8 bg-cover bg-center h-screen w-full flex flex-col justify-between transition-all duration-400" style={{ backgroundImage: `url(${images[index]})` }}>
        <img className='w-25 ml-4' src="https://download.logo.wine/logo/Uber/Uber-White-Logo.wine.png" alt="" />
        <div className='bg-white pb-7 py-4 px-4 '>
          <h2 className='text-3xl font-bold mb-4'>Get Started With Uber</h2>
          <Link to='/login' className='flex justify-center bg-black text-white py-3 w-full rounded text-xl mt-5 font-bold'>Continue</Link>
        </div>
      </div>
    </div>

  )
}

export default Start