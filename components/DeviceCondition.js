import React from "react"

export default function DeviceCondition({
  name,
  condition,
  setCondition,
  isCondition,
  storage,
  setStorage,
}) {
  const active =
    "flex flex-col justify-center items-center cursor-pointer border-2 rounded py-1 dark:border-red-500 dark:bg-slate-800 border-red-500 dark:hover:bg-slate-600 "
  const unActive =
    "flex flex-col justify-center items-center cursor-pointer border-2 rounded py-1 dark:border-none dark:bg-slate-800 dark:hover:bg-slate-600"
  return (
    <div
      className={condition == name || storage == name ? active : unActive}
      onClick={() => {
        isCondition ? setCondition(name) : setStorage(name)
      }}
    >
      <h1 className="text-sm m-1">{name}</h1>
    </div>
  )
}
