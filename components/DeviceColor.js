import React from 'react'

export default function DeveiceColor({name}) {
  return (
    <div className=" cursor-pointer">
        <div className={`p-6 border-4 rounded-full bg-[${name}]`}> </div>
    </div>
  )
}
