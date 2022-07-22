import React from "react"

export default function DeveiceColor({ name, color, setColor }) {
  const active = `p-6 border-4 rounded-full  bg-[${name}] hover:-translate-y-1 transition-all duration-150 border-red-500 `
  const unActive = `p-6 border-4 rounded-full dark:border-none bg-[${name}] hover:-translate-y-1 transition-all duration-150 `
  return (
    <div
      className=" cursor-pointer"
      onClick={() => {
        setColor(name)
      }}
    >
      <div className={color == name ? active : unActive}> </div>
    </div>
  )
}
