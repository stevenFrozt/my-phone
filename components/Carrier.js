import React from 'react'

export default function Carrier({image}) {
  return (
    
    <div className="flex flex-col justify-center items-center cursor-pointer">
        <img
            src={image}
            alt=""
        />
    </div>
  )
}
