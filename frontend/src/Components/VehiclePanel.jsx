import { ChevronDown } from 'lucide-react'
import React from 'react'

function VehiclePanel(props) {
    return (
        <div>
            <div className='flex justify-center items-center pb-3'><ChevronDown className='text-gray-200' size={42} strokeWidth={1.25} onClick={() => {
                props.setVehiclePanel(false)
            }} /></div>
            <h2 className='font-bold text-2xl mb-5'>Choose your ride</h2>
            <div className='flex border-2 border-gray-300 active:border-black rounded-xl p-3 w-full items-center mb-2'>
                <img className='h-14  mr-3' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
                <div className='w-1/2 flex gap-1 flex-col'>
                    <h4 className='text-lg font-semibold'>Uber Go <span className='text-base font-medium'><i className="ri-user-3-fill"></i> 4</span></h4>
                    <h5 className='text-sm font-semibold'>2 min away</h5>
                    <p className='font-normal text-gray-600 text-xs'>Affordable, compact ride.</p>
                </div>
                <div className='flex justify-end w-1/3'><h2 className='text-xl font-semibold'>₹192.50</h2></div>
            </div>
            <div className='flex border-2 border-gray-300 active:border-black rounded-xl p-3 w-full items-center mb-2'>
                <img className='h-14  mr-5' src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8yYzdmYTE5NC1jOTU0LTQ5YjItOWM2ZC1hM2I4NjAxMzcwZjUucG5n" alt="" />
                <div className='w-1/2 flex gap-1 flex-col'>
                    <h4 className='text-lg font-semibold'>Moto <span className='text-base font-medium'><i className="ri-user-3-fill"></i> 1</span></h4>
                    <h5 className='text-sm font-semibold'>2 min away</h5>
                    <p className='font-normal text-gray-600 text-xs'>Affordable, motorcycle ride.</p>
                </div>
                <div className='flex justify-end w-1/3'><h2 className='text-xl font-semibold'>₹62.50</h2></div>
            </div>
            <div className='flex border-2 border-gray-300 active:border-black rounded-xl p-3 w-full items-center mb-2'>
                <img className='h-14  mr-5' src="https://clipart-library.com/2023/Uber_Auto_312x208_pixels_Mobile.png" alt="" />
                <div className='w-1/2 flex gap-1 flex-col'>
                    <h4 className='text-lg font-semibold'>UberAuto <span className='text-base font-medium'><i className="ri-user-3-fill"></i> 3</span></h4>
                    <h5 className='text-sm font-semibold'>2 min away</h5>
                    <p className='font-normal text-gray-600 text-xs '>Affordable, auto ride.</p>
                </div>
                <div className='flex justify-end w-1/3'><h2 className='text-xl font-semibold'>₹112.50</h2></div>
            </div>
        </div>
    )
}

export default VehiclePanel