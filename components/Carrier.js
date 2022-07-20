import React from "react"

export default function Carrier({ image, name, isActive, setActive }) {
  const active =
    "flex flex-col justify-center items-center cursor-pointer dark:bg-white rounded border-red-500 border dark:border-4 border-2 hover:-translate-y-1 duration-150 transition-all"
  const unActive =
    "flex flex-col justify-center items-center cursor-pointer dark:bg-white rounded hover:-translate-y-1 duration-150 transition-all"
  return (
    <div
      className={isActive == name ? active : unActive}
      onClick={() => setActive(name)}
    >
      <img src={image} alt="" />
    </div>
  )
}
