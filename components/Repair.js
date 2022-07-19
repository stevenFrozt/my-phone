import React from "react"
import Link from "next/link"
import { ChevronRightIcon } from "@heroicons/react/outline"
export default function Repair({ name, path }) {
  return (
    <div className="rounded-sm bg-[#f1f1f1f1] dark:bg-slate-800 p-5">
      <Link href="repair_form">
        <a className="flex justify-between items-center">
          <h1>{name}</h1>
          <ChevronRightIcon className="h-5 cursor-pointer" />
        </a>
      </Link>
    </div>
  )
}
