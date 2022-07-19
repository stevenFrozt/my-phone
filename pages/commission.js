import React from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { MdContentCopy } from "react-icons/md"

export default function commission() {
  return (
    <div className="dark:bg-gray-900">
      <Navbar />
      <main className="text-sm lg:text-lg px-4 py-4 lg:border lg:m-20 lg:px-10 lg:py-5">
        <h1 className="py-4 font-medium">My Commission</h1>
        <p>The Commissions You Earn From Your Referral Are Displayed Here</p>
        <div className="py-4">
          <h3 className="py-2">Referral Commission</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-10 lg:w-[60%] ">
            <div className="bg-red-100 dark:bg-gray-600 rounded-lg text-center lg:py-8 lg:px-1 lg:space-y-4 p-2">
              <p className="text-[.5rem] lg:text-lg">Total commission</p>
              <h1 className="text-red-500 dark:text-blue-400 text-lg lg:text-[1.5rem]">
                $000.0
              </h1>
            </div>
            <div className="bg-red-100 dark:bg-gray-600 rounded-lg text-center lg:py-8 lg:px-1 lg:space-y-4 p-2">
              <p className="text-[.5rem] lg:text-lg">Available commission</p>
              <h1 className="text-red-500 dark:text-blue-400 text-lg lg:text-[1.5rem]">
                $000.0
              </h1>
            </div>
            <div className="bg-red-100 dark:bg-gray-600 rounded-lg text-center lg:py-8 lg:px-1 lg:space-y-4 p-2">
              <p className="text-[.5rem] lg:text-lg">Pending commission</p>
              <h1 className="text-red-500 dark:text-blue-400 text-lg lg:text-[1.5rem]">
                $000.0
              </h1>
            </div>
            <div className="bg-red-100 dark:bg-gray-600 rounded-lg text-center lg:py-8 lg:px-1 lg:space-y-4 p-2">
              <p className="text-[.5rem] lg:text-lg">Used commission</p>
              <h1 className="text-red-500 dark:text-blue-400 text-lg lg:text-[1.5rem]">
                $000.0
              </h1>
            </div>
          </div>
        </div>

        <div className="pb-4">
          <h3 className="py-2">Commission Composition</h3>
          <div className="grid grid-cols-2 gap-2 lg:w-[60%] lg:gap-10">
            <div className="bg-red-100 dark:bg-gray-600 rounded-lg text-center lg:py-8 lg:px-1 lg:space-y-4 p-2">
              <p className="text-[.5rem] lg:text-lg lg:text-[1.5rem]">
                Individual Invite Center
              </p>
              <h1 className="text-red-500 dark:text-blue-400 text-lg lg:text-[1.5rem]">
                $000.0
              </h1>
            </div>
            <div className="bg-red-100 dark:bg-gray-600 rounded-lg text-center lg:py-8 lg:px-1 lg:space-y-4 p-2">
              <p className="text-[.5rem] lg:text-lg lg:text-[1.5rem]">
                Brand Ambassador
              </p>
              <h1 className="text-red-500 dark:text-blue-400 text-lg lg:text-[1.5rem]">
                $000.0
              </h1>
            </div>
          </div>
        </div>

        <div className="bg-red-100 dark:bg-gray-600 text-center space-y-4 py-4 my-4 lg:text-left lg:p-4 lg:w-[60%] rounded">
          <p>
            Invite 2 Friends to complete their orders on my phone, then you can
            become a brand ambassador! you can earn unlimited commission!{" "}
          </p>
          <div>
            <button className="bg-red-500 text-white px-4 py-2">
              invite now
            </button>
          </div>
        </div>

        <div className="my-8">
          <div className="lg:w-[60%]">
            {" "}
            <h1 className="font-medium">My Coupon</h1>
            <p className="text-[.8rem]">
              Check Your Coupons And Use Them As Soon As Possible.
            </p>
            <nav className="flex justify-around my-8 lg:mx-40">
              <h1 className="border-b-2 border-blue-500 text-center">
                Coupon Avilable
              </h1>{" "}
              <h1 className="text-gray-300">Coupon Unavilable</h1>
            </nav>
            <div className="border-b p-4">
              <img
                src="images/sell_smart/coupon.png"
                alt=""
                className="mx-auto"
              />
              <div className="text-center">
                <h1>Oops, your have no available Coupon</h1>
                <h1>All your available coupon will be displayed here.</h1>
              </div>
            </div>
          </div>

          <div className="mt-4 lg:w-[30%] lg:mt-8">
            <h1 className="py-2 font-medium">Individual Invite Center</h1>
            <p>Your Referral Methods:</p>
            <div className="py-4">
              <h3>Share Your Invitation Code</h3>
              <div className="flex justify-between items-center">
                <input
                  type="text"
                  className="border-b p-2"
                  placeholder="mt294u7"
                />
                <button className="bg-red-500 text-white px-4 py-2 flex items-center rounded justify-center">
                  <MdContentCopy className="mx-1" />
                  copy
                </button>
              </div>
            </div>
            <div className="py-4">
              <h3>Share Your Referral Link</h3>
              <div className="flex justify-between items-center">
                <input
                  type="text"
                  className="border-b p-2"
                  placeholder="mt294u7"
                />
                <button className="bg-red-500 text-white px-4 py-2 flex items-center rounded justify-center">
                  <MdContentCopy className="mx-1" />
                  copy
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
