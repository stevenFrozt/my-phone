import React from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { TbEdit } from "react-icons/tb"
import { HiOutlineTrash } from "react-icons/hi"

export default function profile() {
  return (
    <div className="dark:bg-gray-900">
      <Navbar />
      <main className="py-6 px-4 lg:border lg:w-[70%] lg:mx-auto lg:px-20 lg:rounded lg:my-8 lg:pb-20">
        <div>
          <div className="space-y-4">
            <h1 className="font-medium my-4 text-lg"> My Profile</h1>
            <p>View And Edit Your Personal Information Below.</p>
            <div className="flex justify-evenly items-center lg:w-[40%] lg:justify-around">
              <img
                src="images/profile.png"
                alt=""
                className="rounded-full h-10 w-10 lg:h-20 lg:w-20"
              />
              <div>
                <h1>Account email address:</h1>
                <div>
                  <h1>Hishamhosam20@Gmail.Com </h1>
                  <button className="text-blue-400 text-[.5rem] lg:text-sm">
                    Update Password
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="lg:border lg:bg-gray-100 lg:w-[80%] lg:my-16 lg:mx-auto lg:p-8 lg:rounded">
                <form
                  action=""
                  className="py-4 space-y-6 lg:space-x-4 lg:grid lg:grid-cols-2 items-center"
                >
                  <div className="flex flex-col lg:mt-[24px] lg:ml-[16px]">
                    <label htmlFor="name" className="dark:text-white">
                      name
                    </label>
                    <input
                      type="text"
                      placeholder="hisham hosam alkhlout"
                      className="border-b lg:bg-gray-100 "
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="phone" className="dark:text-white">
                      phone number
                    </label>
                    <input
                      type="text"
                      placeholder="0912471338757"
                      className="border-b lg:bg-gray-100"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="email" className="dark:text-white">
                      email
                    </label>
                    <input
                      type="text"
                      placeholder="Hishamhosam @Gmail.Com"
                      className="border-b lg:bg-gray-100"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="street" className="dark:text-white">
                      street address
                    </label>
                    <input
                      type="text"
                      placeholder="bgy remal seterr"
                      className="border-b lg:bg-gray-100"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="birthday" className="dark:text-white">
                      birthday
                    </label>
                    <input
                      type="text"
                      placeholder="16/11/22022"
                      className="border-b lg:bg-gray-100"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="gender" className="dark:text-white">
                      gender
                    </label>
                    <input
                      type="text"
                      placeholder="male"
                      className="border-b lg:bg-gray-100"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="state/city" className="dark:text-white">
                      state/city
                    </label>
                    <input
                      type="text"
                      placeholder="male"
                      className="border-b lg:bg-gray-100"
                    />
                  </div>
                  <div className="flex justify-end">
                    <button className="bg-red-500 text-white px-4 py-2 rounded">
                      <div className="flex items-center space-x-2">
                        <TbEdit className="text-lg mr-2" />
                        edit profile
                      </div>
                    </button>
                  </div>
                </form>
              </div>

              <div className="my-8 lg:w-[40%] ">
                <h1 className="font-medium">Payment Type:</h1>
                <div className="bg-gray-200 w-[90%] mx-auto p-4 rounded my-4 space-y-4">
                  <img src="images/sell_smart/checkout/visa.png" alt="" />
                  <h1 className="truncate dark:text-black">
                    hishamhosam20@gmail.com
                  </h1>
                  <div className="flex justify-end ">
                    <div className="flex dark:text-black">
                      <TbEdit className="text-lg mr-2" />
                      <HiOutlineTrash className="text-lg mr-2" />
                    </div>
                  </div>
                </div>
                <div className="w-[80%] mx-auto">
                  <h1 className="text-blue-500 text-sm">+ Add A New Payment</h1>
                </div>
              </div>

              <div className="space-y-2 mt-8 mb-4">
                <h1 className="font-medium">My Address</h1>
                <p>Add and manage the addresses you use regularly.</p>
              </div>

              <div>
                <h1 className="py-2">Manage your address:</h1>
                <div>
                  <input
                    type="text"
                    placeholder="hisham remall street plasitine 990123"
                    className="border-b w-full px-4"
                  />
                  <div className="flex justify-between items-center py-2">
                    <h1 className="text-blue-500 text-sm">
                      + Add A New Payment
                    </h1>
                    <div className="flex">
                      <TbEdit className="text-lg mr-2" />
                      <HiOutlineTrash className="text-lg mr-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
