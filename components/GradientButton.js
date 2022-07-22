import React, { useState } from "react"

export default function GradientButton({ text, toggle, setToggle }) {
  const [isSelect, setIsSelect] = useState(false)
  function selected() {
    setIsSelect((prev) => !isSelect)
    setToggle(text)
  }
  const selectStyle = `bg-gradient-to-b from-black to-red-800 text-white text-center rounded-md p-2 text-sm truncate cursor-pointer lg:text-[.8rem]`
  const defaultStyle =
    " bg-gradient-to-b from-black to-gray-300 text-white text-center rounded-md p-2 text-sm cursor-pointer truncate lg:text-[.8rem]"

  const newStyle =
    "bg-red dark:bg-slate-800 text-white text-center rounded-md p-2 text-sm cursor-pointer text-[12px] lg:text-[.8rem] border-red-500 dark:border-red-800 border-2 text-red-500"
  const newDefualtStyle =
    "bg-white dark:bg-slate-800 text-black text-center rounded-md p-2 text-sm cursor-pointer text-[12px] lg:text-[.8rem] border-2 dark:text-white"
  return (
    <div
      className={toggle == text ? newStyle : newDefualtStyle}
      onClick={() => selected(text)}
    >
      {text}
    </div>
  )
}
