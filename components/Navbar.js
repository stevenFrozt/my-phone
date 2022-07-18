import React from "react"
import { useRouter } from "next/router"
import { ShoppingCartIcon, MenuAlt4Icon } from "@heroicons/react/outline"
import { FaRegUser, FaSearch } from "react-icons/fa"
import { RiSearchLine, RiShoppingBagLine } from "react-icons/ri"
import { MdModeNight, MdLightMode } from "react-icons/md"
import Link from "next/link"
import {useTheme} from 'next-themes'

export default function Navbar() {
const {theme, setTheme} = useTheme()

  const activeNavStyle =
    "border h-24 pt-8 px-4 flex items-center mb-4 bg-red-500 cursor-pointer rounded-xl text-white"
  const unActive = "h-24 pt-8 px-4 flex items-center mb-4  cursor-pointer"

  const router = useRouter()
  // console.log(router.pathname)

  return (
    <>
      {/* mobile */}

      <div className="flex justify-between items-center px-4 py-4  border-b-4 border-b-red-500 lg:hidden dark:bg-gray-900">
        <MenuAlt4Icon className="h-4" />
        <img src="images/logo.png" alt="" className="h-8" />
        <Link href="cart">
          <ShoppingCartIcon className="h-4 " />
        </Link>
      </div>

      {/* Desktop */}

      <div className="hidden lg:flex items-center justify-between px-20 -mt-2 border-b-red-500 border-b-[20px] dark:bg-gray-900">
        <img src="images/logoDesktop.png" alt="" className="h-16 mt-4 mr-20" />
        {/* links */}
        <div className="flex items-center space-x-8">
          <Link href="/">
            <a className={router.pathname == "/" ? activeNavStyle : unActive}>
              home
            </a>
          </Link>

          <Link href="sell_device">
            <a
              className={
                router.pathname == "/sell_device" ? activeNavStyle : unActive
              }
            >
              sell Smart
            </a>
          </Link>

          <Link href="buy_device">
            <a
              className={
                router.pathname == "/buy_device" ? activeNavStyle : unActive
              }
            >
              buy Smart
            </a>
          </Link>
          <Link href="sell_device">
            <a
              className={
                router.pathname == "/repair_device" ? activeNavStyle : unActive
              }
            >
              repair Smart
            </a>
          </Link>
          <Link href="sell_device">
            <a
              className={
                router.pathname == "/test_device" ? activeNavStyle : unActive
              }
            >
              test your Smart
            </a>
          </Link>
          <div className="flex space-x-8 pl-14 items-center">
            <Link href="profile">
              <a className=" h-24 pt-8  flex items-center mb-4  cursor-pointer hover:-translate-y-1 transition duration-100 hover:text-red-500">
                <FaRegUser className="h-5" />
              </a>
            </Link>

            <a className=" h-24 pt-8  flex items-center mb-4  cursor-pointer hover:-translate-y-1 transition duration-100 hover:text-red-500">
              <RiSearchLine className="text-[1.2rem]" />
            </a>
            <Link href="cart">
              <a className=" h-24 pt-8  flex items-center mb-4  cursor-pointer hover:-translate-y-1 transition duration-100 hover:text-red-500">
                <RiShoppingBagLine className="text-[1.2rem]" />
              </a>
            </Link>
           
              <a className=" h-24 pt-8  flex items-center mb-4  cursor-pointer hover:-translate-y-1 transition duration-100 hover:text-red-500" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                {theme == 'light'? (<MdModeNight className="text-[1.2rem]" />) : (<MdLightMode className="text-[1.2rem]" />) }
              </a>
         
          </div>
        </div>
        {/* icons */}
      </div>
    </>
  )
}
