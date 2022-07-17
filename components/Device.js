import Link from "next/link"
import React from "react"

export default function Device({ image, name, path }) {
  return (
    <Link href={path || ""}>
      <a>
        <div className=" p-4 flex flex-col justify-center items-center rounded-xl cursor-pointer hover:scale-110 transition-all duration-100">
          <img src={image} alt="" />
          <p className="text-sm py-2">{name}</p>
        </div>
      </a>
    </Link>
  )
}
