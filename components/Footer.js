import React from "react"
import { FaFacebookF, FaInstagram } from "react-icons/fa"

export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-center border-t pt-8 border-black max-w-[280px] mx-auto mt-2 space-y-2">
      <img src="images/logo.png" alt="" className="h-6" />
      <div>home</div>
      <div>sell Smart</div>
      <div>buy Smart</div>
      <div>repair Smart</div>
      <div className="flex items-center space-x-4">
        <FaFacebookF className="" />
        <FaInstagram className="h-5" />
      </div>
    </div>
  )
}
