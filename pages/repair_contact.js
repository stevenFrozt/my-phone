import React from 'react'
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Link from "next/link"
export default function repair_contact() {
  return (
    <>
        <Navbar/>
            <main className="xl:px-20">
                <div className="p-5 my-4 font-medium lg:text-xl lg:my-8">
                    <div className="p-4 my-4 text-center font-medium lg:text-xl lg:my-8">
                        <h1>Last step! How can we reach you?</h1>
                    </div>

                    <div className="grid grid-cols-2 gap-5">
                        <div className="border-2 rounded-sm p-2">
                            <input className="w-full outline-0" placeholder="First Name" type="text" />
                        </div>
                        <div className="border-2 rounded-sm p-2">
                            <input className="w-full outline-0" placeholder="Last Name" type="text" />
                        </div>

                        <div className="w-full border-2 rounded-sm p-2 col-span-2 lg:col-span-1">
                            <input className="outline-0" placeholder="Email" type="text" />
                        </div>
                        <div className="w-full border-2 rounded-sm p-2 col-span-2 lg:col-span-1">
                            <input className="outline-0" placeholder="Phone Number" type="text" />
                        </div>
                    </div>

                    <div className="my-2">
                        <h1>You can contact me by</h1>
                    </div>
                    <div className="grid grid-cols-3 justify-evenly gap-3 font-normal text-sm">
                        <div className="flex gap-1">
                            <input type="checkbox" />
                            <h1>Phone</h1>
                        </div>
                        <div className="flex gap-1">
                            <input type="checkbox" />
                            <h1>Email</h1>
                        </div>
                        <div className="flex gap-1">
                            <input type="checkbox" />
                            <h1>SMS/Text</h1>
                        </div>
                    </div>

                    <div className="mt-6">
                        <h1>Apoinmentment Time</h1>
                    </div>

                    <div class="grid">
                        <div className="flex ">
                            <div className="flex flex-col">
                                <img  src="images/icon/appointment.png" alt="" />
                            </div>
                            <h1>Tue, May 11, 2022</h1>
                            <div className="flex flex-col">
                                <h1>12 pm</h1>
                            </div>
                        </div>
                    </div>
                    <Link href="/">
                        <div className="flex items-center justify-center w-full h-10 bg-[#d42828] rounded-sm my-10 p-2 cursor-pointer">
                            <a className="text-center text-white">Confirm your repair appointment   </a>
                        </div>
                    </Link>
                </div>
            </main>
        <Footer />
    </>
  )
}
