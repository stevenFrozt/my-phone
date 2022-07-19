import React from "react"

export default function Carrier({ image }) {
  return (
    <div className="flex flex-col justify-center items-center cursor-pointer dark:bg-white rounded">
      <img src={image} alt="" />
    </div>
  )
}
