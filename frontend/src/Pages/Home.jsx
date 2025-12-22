import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ChevronDown, LocateFixed, MapPinHouse } from 'lucide-react'
import LocationSearchPanel from '../Components/LocationSearchPanel'

function Home() {
  const [panelOpen, setPanelOpen] = useState(false)
  const [pickLocation, setPickLocation] = useState("")
  const [destination, setDestination] = useState("")
  const panelRef = useRef(null)

  const submitHandler = (e) => {
    e.preventDefault();
  }

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%'
      })
    } else {
      gsap.to(panelRef.current, {
        height: '0%'
      })
    }
  }, [panelOpen])



  return (
    <div className='relative h-screen overflow-hidden'>
      <img className='w-15 absolute left-6 top-3' src="https://freepnglogo.com/images/all_img/uber-logo-c96a.png" alt="" />
      <div className='h-screen w-screen'>
        <img className='h-full w-full object-cover' src="https://miro.medium.com/max/1280/0*gwMx05pqII5hbfmX.gif" alt="" />
        <div className='absolute flex flex-col justify-end h-screen w-full top-0'>
          <div className={`h-[30%] bg-white px-6 py-6 ${!panelOpen ? 'rounded-t-3xl' : ''}`}>
            <form onSubmit={(e) => { submitHandler(e) }} className='  relative'>
              <div className='flex justify-between'>
                <h3 className='ml-2 text-3xl font-semibold'>Find a trip</h3>
                <ChevronDown className={`${!panelOpen ? 'hidden' : ''}`} size={32} strokeWidth={1.25} onClick={() => {
                  setPanelOpen(false)
                }} />
              </div>
              <MapPinHouse strokeWidth={0.75} className="absolute left-3 top-1/2 -translate-y-1/2 " />
              <input type="text"
                onFocus={() => {
                  setPanelOpen(true)
                }}
                placeholder='Add a pick up location'
                className='w-full px-13 py-3 bg-gray-200 border-0 rounded-xl mt-8 focus:ring-2 focus:ring-amber-400 focus:outline-none'
                value={pickLocation}
                onChange={(e) => setPickLocation(e.target.value)}
              />
              <LocateFixed strokeWidth={0.75} className="absolute left-3 top-6/7 -translate-y-1/2" />
              <input type="text"
                onFocus={() => {
                  setPanelOpen(true)
                }}
                placeholder='Enter your destination'
                className='w-full px-13 py-3 bg-gray-200 border-0 rounded-xl mt-4 focus:ring-2 focus:ring-amber-400 focus:outline-none'
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
              <div className='h-8 w-0.5 bg-gray-600 absolute left-[6.2%] top-[59%] rounded-full'></div>
            </form>
          </div>
          <div ref={panelRef} className='h-0 bg-white px-6'>
            <LocationSearchPanel/>
          </div>
        </div>
        <div className='fixed z-10 bottom-0 p-3 py-6 bg-white w-full hidden'>
          <h2 className='font-bold text-2xl mb-5'>Choose your ride</h2>
          <div className='flex border-2 border-black rounded-xl p-3 w-full items-center mb-2'>
            <img className='h-14  mr-3' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
            <div className='w-1/2 flex gap-1 flex-col'>
              <h4 className='text-lg font-semibold'>Uber Go <span className='text-base font-medium'><i className="ri-user-3-fill"></i> 4</span></h4>
              <h5 className='text-sm font-semibold'>2 min away</h5>
              <p className='font-normal text-gray-600 text-xs'>Affordable, compact ride.</p>
            </div>
            <div className='flex justify-end w-1/3'><h2 className='text-xl font-semibold'>₹192.50</h2></div>
          </div>
          <div className='flex border-2 border-black rounded-xl p-3 w-full items-center mb-2'>
            <img className='h-14  mr-5' src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8yYzdmYTE5NC1jOTU0LTQ5YjItOWM2ZC1hM2I4NjAxMzcwZjUucG5n" alt="" />
            <div className='w-1/2 flex gap-1 flex-col'>
              <h4 className='text-lg font-semibold'>Moto <span className='text-base font-medium'><i className="ri-user-3-fill"></i> 1</span></h4>
              <h5 className='text-sm font-semibold'>2 min away</h5>
              <p className='font-normal text-gray-600 text-xs'>Affordable, motorcycle ride.</p>
            </div>
            <div className='flex justify-end w-1/3'><h2 className='text-xl font-semibold'>₹62.50</h2></div>
          </div>
          <div className='flex border-2 border-black rounded-xl p-3 w-full items-center mb-2'>
            <img className='h-14  mr-5' src="https://clipart-library.com/2023/Uber_Auto_312x208_pixels_Mobile.png" alt="" />
            <div className='w-1/2 flex gap-1 flex-col'>
              <h4 className='text-lg font-semibold'>UberAuto <span className='text-base font-medium'><i className="ri-user-3-fill"></i> 3</span></h4>
              <h5 className='text-sm font-semibold'>2 min away</h5>
              <p className='font-normal text-gray-600 text-xs '>Affordable, auto ride.</p>
            </div>
            <div className='flex justify-end w-1/3'><h2 className='text-xl font-semibold'>₹112.50</h2></div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Home