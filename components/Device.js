import Link from "next/link"
import React from "react"

export default function Device({
  image,
  name,
  type,
  path,
  setModel,
  model,
  addBreadCrumbs
}) {
  return (
    <Link href={path || ""}>
      <a
        onClick={() => {
          addBreadCrumbs ? (!model ? addBreadCrumbs(name, path, true) : "") : ""

          setModel ? (!model ? setModel(prev => name) : "") : ""
        }}
      >
        <div className=" p-2 flex flex-col justify-center items-center rounded-xl cursor-pointer lg:hover:scale-110 transition-all duration-100 w-full">
          <img src={image} alt="" className="lg:h-36 object-contain" />
          <p className="text-sm py-2 text-center max-w-[6rem]">{name}</p>
        </div>
      </a>
    </Link>
  )
}
