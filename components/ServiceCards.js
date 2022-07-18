import React from "react"
import Link from "next/link"
export default function ServiceCards({ description, path }) {
  return (
    <Link href={path}>
      <a>
        <div
          className={
            "bg-blue-300 h-26 rounded-xl flex flex-col justify-center items-center text-sm w-full p-4"
          }
        >
          <h3 className="text-center dark:text-black text-white">
            {description}
            hello
          </h3>
        </div>
      </a>
    </Link>
  )
}
