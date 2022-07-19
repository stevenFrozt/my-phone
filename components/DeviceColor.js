import React from "react"

export default function DeveiceColor({ name }) {
  const style = `p-6 border-4 rounded-full dark:border-none bg-[${name}] hover:-translate-y-1 transition-all duration-150 `
  return (
    <div className=" cursor-pointer">
      <div className={style}> </div>
    </div>
  )
}
