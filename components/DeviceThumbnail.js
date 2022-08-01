import Link from "next/link"
import React from "react"
import {
  FaApple,
  FaClock,
  FaGamepad,
  FaHeadphones,
  FaLaptop,
  FaMobile,
  FaTablet
} from "react-icons/fa"

export default function DeviceThumbnail({ image, name, path }) {
  function icon() {
    if (name == "iPhone" || name == "iPod" || name == "iPad") {
      return <FaApple />
    } else if (name == "samsung") {
      return <FaMobile />
    } else if (name == "airpods") {
      return <FaHeadphones />
    } else if (name == "smart watch") {
      return <FaClock />
    } else if (name == "tablet") {
      return <FaTablet />
    } else if (name == "Macbook") {
      return <FaLaptop />
    } else if (name == "game console") {
      return <FaGamepad className="text-2 mt-2" />
    }
  }

  return (
    <Link href={path || ""}>
      <div className=" lg:p-4 overflow-hidden border flex flex-col justify-center items-center rounded-xl cursor-pointer scale-100 lg:hover:scale-110 transition-all duration-100">
        <img src={image} alt="" />
        <p className="text-sm py-2 font-medium flex items-center gap-1 text-center">
          {icon()}
          {name}
        </p>
      </div>
    </Link>
  )
}
