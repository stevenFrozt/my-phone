import React from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
export default function customer_service() {
  return (
    <>
      <Navbar />
      <main className="xl:px-20">
        <div className="p-4 my-4 font-medium lg:text-xl lg:my-8 lg:border-2 lg:rounded-lg">
          <h1 className="text-xl mb-3">Customer Service</h1>

          <div className="font-normal">
            <h1>
              We&apos;re here to help! Send us your message and our
              representative will get back to you as soon as possible.
            </h1>
            <h1 className="my-4 text-xl">Your Message:</h1>
          </div>

          <div
            className="border-2 rounded-xl pb-60 font-normal max-h-1 overflow-auto
          "
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img className="m-3" src="images/Subtraction 1.png" alt="" />
                <span>wireless my phone</span>
              </div>
              <div className="mr-3">
                <h1>11/5/2022 04:25:22</h1>
              </div>
            </div>
            <div className=" m-4 rounded-xl w-12 max-w bg-[#d8d5d5]">
              <p className="m-4">hi</p>
            </div>
          </div>

          <div className="border-2 rounded-3xl mt-4 border-red-300">
            <div className="flex items-center">
              <input
                placeholder="input your message"
                className=" w-full m-2 p-2 outline-0"
                type="text"
              />
              <h1 className="text-xl mr-4">Send</h1>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
