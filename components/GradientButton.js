import React, { useState } from "react"

export default function GradientButton({ text, toggle, setToggle }) {
  const [isSelect, setIsSelect] = useState(false)
  function selected() {
    setIsSelect((prev) => !isSelect)
    console.log("selected", isSelect)
    setToggle(text)
  }
  const selectStyle = `bg-gradient-to-b from-black to-red-800 text-white text-center rounded-md p-2 text-sm truncate cursor-pointer lg:text-[.8rem]`
  const defaultStyle =
    " bg-gradient-to-b from-black to-gray-300 text-white text-center rounded-md p-2 text-sm cursor-pointer truncate lg:text-[.8rem]"
  return (
    <div
      className={toggle == text ? selectStyle : defaultStyle}
      onClick={() => selected()}
    >
      {text}
    </div>
  )
}
