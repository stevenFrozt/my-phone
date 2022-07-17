import React from "react"
import { ShoppingCartIcon, MenuAlt4Icon } from "@heroicons/react/outline"

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-4 py-4 border">
      <MenuAlt4Icon className="h-4" />
      <img src="images/logo.png" alt="" className="h-8" />
      <ShoppingCartIcon className="h-4 " />
    </div>
  )
}
