import Link from "next/link"
import React from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
export default function contact_us() {
  return (
    
    <div className="dark:bg-gray-900">
      <Navbar />
      <main>
        <div className="px-4 py-8 lg:border lg:w-[50%] lg:mx-auto lg:my-10 lg:rounded lg:p-10 pt-20 lg:mt-20">
          <h1 className="font-medium lg:text-xl lg:mb-10">Contact Us</h1>
          <form action="" className="">
            <div className="my-8">
              <label htmlFor="email">Name</label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="border-b block w-full my-4 px-1 outline-0"
              />
            </div>
            <div className="my-8">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                placeholder="Enter Your Email"
                className="border-b block w-full my-4 px-1 outline-0"
              />
            </div>
            <div className="my-8">
              <label htmlFor="password">Message</label>
             <textarea placeholder="Enter Your Username or Email"
                className="border-b block w-full my-4 px-1 outline-0" >
             </textarea>
            </div>

            <button className="bg-red-500 px-4 py-2 hover:bg-red-600 text-white w-full rounded my-4">
              Send
            </button>
            <hr />
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}
