import Link from "next/link"
import React from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

export default function register() {
  return (
    <div className="dark:bg-gray-900">
      <Navbar />
      <main>
        <div className="px-4 py-8 lg:border lg:w-[30%] lg:mx-auto lg:my-10 lg:rounded lg:p-10">
          <h1 className="font-medium lg:text-xl lg:mb-10">
            Register to my phone
          </h1>
          <form action="" className="">
            <div className="my-8">
              <label htmlFor="fname">first name</label>
              <input
                type="text"
                placeholder="First name"
                className="border-b block w-full my-4 lg:p-4 py-2 px-1"
              />
            </div>
            <div className="my-8">
              <label htmlFor="lname">last name</label>
              <input
                type="text"
                placeholder="last name"
                className="border-b block w-full my-4 lg:p-4 py-2 px-1"
              />
            </div>

            <div className="my-8">
              <label htmlFor="lname">contact number</label>
              <input
                type="text"
                placeholder="contact number"
                className="border-b block w-full my-4 lg:p-4 py-2 px-1"
              />
            </div>
            <div className="my-8">
              <label htmlFor="lname">username</label>
              <input
                type="text"
                placeholder="username"
                className="border-b block w-full my-4 lg:p-4 py-2 px-1"
              />
            </div>
            <div className="my-8">
              <label htmlFor="lname">email</label>
              <input
                type="text"
                placeholder="email"
                className="border-b block w-full my-4 lg:p-4 py-2 px-1"
              />
            </div>
            <div className="my-8">
              <label htmlFor="lname">password</label>
              <input
                type="text"
                placeholder="password"
                className="border-b block w-full my-4 lg:p-4 py-2 px-1"
              />
            </div>
            <div className="my-8">
              <label htmlFor="lname">confirm password</label>
              <input
                type="text"
                placeholder="confirm password"
                className="border-b block w-full my-4 lg:p-4 py-2 px-1"
              />
            </div>
            <button className="bg-red-500 px-4 py-2 hover:bg-red-600 text-white w-full rounded my-4">
              Register
            </button>
            <hr />
            <h1 className="py-4 text-sm text-center">
              already have an account?{" "}
              <Link href="login">
                <span className="text-blue-500 font-medium cursor-pointer">
                  Login now
                </span>
              </Link>
            </h1>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}
