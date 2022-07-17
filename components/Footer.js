import Link from "next/link"
import React from "react"
import { FaFacebookF, FaInstagram } from "react-icons/fa"

export default function Footer() {
  return (
    <>
      {/* MOBILE */}
      <div className="text-center py-8">
        <div className=" lg:hidden flex flex-col justify-center items-center border-t pt-8 border-black max-w-[280px] mx-auto mt-2 space-y-4">
          <img src="images/logo.png" alt="" className="h-6" />
          <Link href="/">
            <a className="w-32">home</a>
          </Link>
          <Link href="/">
            <a className="w-32">sell Smart</a>
          </Link>
          <Link href="/">
            <a className="w-32">Buy Smart</a>
          </Link>
          <Link href="/">
            <a className="w-32">Repair Smart</a>
          </Link>
          <Link href="/">
            <a className="w-32">Test a Smart</a>
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="https://facebook.com">
              <a>
                <FaFacebookF className="" />
              </a>
            </Link>
            <Link href="https://instagram.com">
              <a>
                <FaInstagram className="h-5" />
              </a>
            </Link>
          </div>
        </div>
      </div>

      {/* DESKTOP */}
      <div className=" hidden lg:flex flex-col justify-center items-center border-t pt-8 max-w-[1400px] mx-auto mt-8">
        <img
          src="images/sell_smart/logoFooter.png"
          alt=""
          className="h-12 clas mt-4 mb-8"
        />
        <div className="flex space-x-4 items-center">
          <Link href="/">
            <a className="w-32">home</a>
          </Link>
          <Link href="sell_device">
            <a className="w-32">sell Smart</a>
          </Link>
          <Link href="/">
            <a className="w-32">Buy Smart</a>
          </Link>
          <Link href="/">
            <a className="w-32">Repair Smart</a>
          </Link>
          <Link href="/">
            <a className="w-32">Test a Smart</a>
          </Link>
        </div>
        <div className="flex items-center space-x-8 my-4 pt-8">
          <Link href="https://facebook.com">
            <a>
              <FaFacebookF className="hover:-translate-y-1 transition duration-100" />
            </a>
          </Link>
          <Link href="https://instagram.com">
            <a>
              <FaInstagram className="h-5 hover:-translate-y-1 transition duration-100" />
            </a>
          </Link>
        </div>
      </div>
    </>
  )
}
