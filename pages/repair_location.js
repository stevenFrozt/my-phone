import React from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { ChevronRightIcon } from "@heroicons/react/outline"
import Link from "next/link"
export default function repair_location() {
  return (
    <>
      <Navbar />
      <main className="xl:px-20">
        <div className="p-5 my-4 font-medium lg:text-xl lg:my-8">
          <div className="p-4 my-4 text-center font-medium lg:text-xl lg:my-8">
            <h1>How do you want to get cell phone fixed?</h1>
            <h1>Here&apos;s what&apos;s available in your areas:</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3  gap-5 mb-5">
            <div className="flex items-center justify-between border-2 rounded-lg p-2">
              <div className="ml-1">
                <h1 className="text-xl mb-2">Carry-In</h1>
                <h1 className="font-normal">
                  Phone repair in 4 hours or less. Free diagnostic.
                </h1>
              </div>
              <div>
                <Link href="repair_date">
                  <ChevronRightIcon className="h-5 cursor-pointer" />
                </Link>
              </div>
            </div>

            <div className="flex items-center justify-between border-2 rounded-lg p-2">
              <div className="ml-1">
                <h1 className="text-xl mb-2">We Come to You</h1>
                <h1 className="font-normal">
                  Phone repairs in 2 hours or less. Deposit required.
                </h1>
              </div>
              <div>
                <ChevronRightIcon className="h-5 cursor-pointer" />
              </div>
            </div>

            <div className="flex items-center justify-between border-2 rounded-lg p-2">
              <div className="ml-1">
                <h1 className="text-xl mb-2">Mail-in Repair</h1>
                <h1 className="font-normal">
                  Free shipping both ways and repairs are completed in less than
                  a week.
                </h1>
              </div>
              <div>
                <ChevronRightIcon className="h-5 cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 justify-evenly text-center bg-[#f1f1f1] text-[#d42828] rounded-lg p-10">
            <div className="flex flex-col justify-center items-center">
              <img className="w-16" src="images/icon/protect.png" alt="" />
              <h1>Lifetime warranty</h1>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img className="w-16" src="images/icon/clock.png" alt="" />
              <h1>Same day repairs</h1>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img className="w-16" src="images/icon/ribon.png" alt="" />
              <h1>Expert technicians</h1>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img className="w-16" src="images/icon/stars.png" alt="" />
              <h1>1 M+ devices fixed</h1>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
