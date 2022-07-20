import React from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
export default function login() {
  return (
    <div className="dark:bg-gray-900">
      <Navbar />
      <main>
        <div className="px-4 py-8 lg:border lg:w-[30%] lg:mx-auto lg:my-10 lg:rounded lg:p-10 pt-20 lg:mt-20">
          <h1 className="font-medium lg:text-xl lg:mb-10">Login to My Phone</h1>
          <form action="" className="">
            <div className="my-8">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                placeholder="Enter Your Username or Email"
                className="border-b block w-full my-4 px-1 outline-0"
              />
            </div>
            <div className="my-8">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                placeholder="Enter Your Password"
                className="border-b block w-full my-4 px-1 outline-0"
              />
              <div className="flex justify-end">
                <span className="text-blue-500 font-medium">
                  Forgot password?
                </span>
              </div>
            </div>

            <button className="bg-red-500 px-4 py-2 text-white w-full rounded my-4">
              Login
            </button>
            <hr />
            <h1 className="py-4 text-sm text-center">
              Not registered yet?{" "}
              <span className="text-blue-500 font-medium">
                <a href="/register">Creat an Account</a>
              </span>
            </h1>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}
