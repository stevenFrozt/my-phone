import React from "react"

export default function DeviceRelated({ image, name, price }) {
  return (
    <div className=" hover:-translate-y-1 duration-150 transition">
      <div className="flex flex-col justify-center items-center cursor-pointer">
        <img src={image} alt="" />
        <div className="leading-8 text-sm">
          <h1>{name}</h1>
          <h1>{price}</h1>
        </div>
      </div>
    </div>
  )
}
