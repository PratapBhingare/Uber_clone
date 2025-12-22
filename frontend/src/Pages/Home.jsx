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
        
      </div>
    </div>

  )
}

export default Home