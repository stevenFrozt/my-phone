import React from 'react'

export default function DeviceCondition({name}) {
  return (
    <div className="flex flex-col justify-center items-center cursor-pointer border-2 rounded py-1">
        <h1 className="text-sm m-1">{name}</h1>
    </div>
  )
}
