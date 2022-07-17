import React from "react"
import Link from "next/link"
export default function ServiceCards({ image, description, path }) {
  return (
    <Link href={path}>
      <a>
        <div
          className={
            "bg-blue-300 h-26 rounded-xl flex flex-col justify-center items-center text-sm w-full p-2"
          }
        >
          <img src={image} alt="" className="h-8 mb-4" />
          <h3 className="text-center">{description}</h3>
        </div>
      </a>
    </Link>
  )
}
