import React from "react"

export default function ServiceCards({ image, description, isActive }) {
  const active =
    "bg-blue-400 h-32 rounded-xl p-2 flex flex-col justify-center items-center text-sm"
  const notActive =
    "bg-blue-300 h-28 rounded-xl p-2 flex flex-col justify-center items-center text-sm"
  return (
    <div className={isActive ? active : notActive}>
      <img src={image} alt="" className="h-8 mb-4" />
      <h3 className="text-center">{description}</h3>
    </div>
  )
}
