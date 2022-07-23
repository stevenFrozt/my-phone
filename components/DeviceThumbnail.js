import Link from "next/link"
import React from "react"

export default function DeviceThumbnail({ image, name, path }) {
  return (
    <Link href={path || ""}>
      <div className=" p-4 border flex flex-col justify-center items-center rounded-xl cursor-pointer hover:scale-110 transition-all duration-100">
        <img src={image} alt="" />
        <p className="text-sm py-2 font-medium">{name}</p>
      </div>
    </Link>
  )
}
