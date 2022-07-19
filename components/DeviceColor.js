import React from "react"

export default function DeveiceColor({ name }) {
  const style = `p-6 border-4 rounded-full bg-[${name}]`
  return (
    <div className=" cursor-pointer">
      <div className={style}> </div>
    </div>
  )
}
