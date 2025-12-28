import React from 'react'

function LocationSearchPanel(props) {

  const locations = [
    "Flat 302, Shree Sai Residency, Andheri East, Mumbai, Maharashtra 400069",
    "Plot 45, Green Valley Layout, Whitefield, Bengaluru, Karnataka 560066",
    "House No. 18, Shanti Nagar, Jaipur, Rajasthan 302019",
    "Flat 12B, Sunrise Apartments, MG Road, Pune, Maharashtra 411001",
    "Villa 7, Palm Meadows, Sector 50, Gurugram, Haryana 122018"
  ];

  return (
    <>
      {
        locations.map((loc) => {
          return (
            <div key={loc} onClick={() => {
              props.setVehiclePanel(true)
              props.setPanelOpen(false) }
        } className = 'cursor-pointer flex justify-start border-2 border-gray-200 active:border-black rounded-xl p-3 items-center gap-6 text-wrap mb-3' >
              <div className='h-8 w-15 rounded-full bg-gray-200 flex justify-center items-center'><i className="ri-map-pin-fill"></i></div>
              <h3 className='text-md font-medium'>{loc}</h3>
            </div >
          )
})
      }

    </>
  )
}

export default LocationSearchPanel