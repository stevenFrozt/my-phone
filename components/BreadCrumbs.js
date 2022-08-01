import Link from "next/link"
import React from "react"
import {
  FaApple,
  FaClock,
  FaHeadphones,
  FaMobile,
  FaRegClock
} from "react-icons/fa"

export default function BreadCrumbs({ data, setData, setModel, model }) {
  const unActive = "text-gray-400 cursor-pointer"
  const Active = "cursor-pointer"

  function clickHandler() {
    model ? setModel(prev => "") : ""
    setData((prev, index) => prev.slice(index, -1))
  }

  function icon(name) {
    if (
      name == "iPhone" ||
      name.includes("iPad") ||
      name == "iPods" ||
      name.toLowerCase().includes("macbook")
    ) {
      return <FaApple />
    }
    if (
      name == "Samsung" ||
      name.includes("samsung") ||
      name.includes("Samsung")
    ) {
      return <FaMobile />
    }
    if (name.toLowerCase() == "airpods") {
      return <FaHeadphones />
    }

    if (
      name.toLowerCase().includes("watch") ||
      name.toLowerCase().includes("fitbit")
    ) {
      return <FaClock className="mt-1" />
    }
  }

  return (
    <div className="w-[70%] mx-auto pt-5 flex space-x-2 scale-75 lg:scale-100">
      {data.map((items, index) => (
        <div key={index} className="flex space-x-2 items-center ">
          <Link href={items.path || ""}>
            <a className="flex items-center gap-1 hover:-translate-y-1 transition-all duration-200">
              {icon(items.name)}
              <p
                className={index == data.length - 1 ? Active : unActive}
                onClick={index == data.length - 1 ? null : clickHandler}
              >
                {items.name}
              </p>
            </a>
          </Link>
          {index == data.length - 1 ? (
            ""
          ) : (
            <p className="text-gray-400">{">"}</p>
          )}
        </div>
      ))}
    </div>
  )
}
