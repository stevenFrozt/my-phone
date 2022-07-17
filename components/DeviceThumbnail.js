import React from "react"

export default function DeviceThumbnail({ image, name }) {
  return (
    <div className=" p-4 border flex flex-col justify-center items-center rounded-xl">
      <img src={image} alt="" />
      <p className="text-sm py-2">{name}</p>
    </div>
  )
}
