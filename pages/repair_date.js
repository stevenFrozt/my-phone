import React from 'react'
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Link from "next/link"
export default function repair_date() {
  return (
    <>
        <Navbar/>
            <main className="xl:px-20">
                <div className="p-5 my-4 font-medium lg:text-xl lg:my-8">
                    <div className="p-4 my-4 text-center font-medium lg:text-xl lg:my-8">
                        <h1>When do you want to come in?</h1>
                    </div>

                    <h1>Choose a day.</h1>
                    
                    <div className="grid grid-cols-7 items-center my-8 gap-10 lg:gap-0">
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="text-[#d42828] my-1">Tomorrow</h1>

                            <div className="flex flex-col justify-center items-center rounded-xl border-4 w-16 h-16 lg:w-24 lg:h-24">
                                <h1>Thu</h1>
                                <h1>5/11</h1>
                            </div>          
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="text-[#d42828] my-1 invisible">Tomorrow</h1>

                            <div className="flex flex-col justify-center items-center rounded-xl border-4 w-16 h-16 lg:w-24 lg:h-24">
                                <h1>Thu</h1>
                                <h1>5/11</h1>
                            </div>          
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="text-[#d42828] my-1 invisible">Tomorrow</h1>

                            <div className="flex flex-col justify-center items-center rounded-xl border-4 w-16 h-16 lg:w-24 lg:h-24">
                                <h1>Thu</h1>
                                <h1>5/11</h1>
                            </div>          
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="text-[#d42828] my-1 invisible">Tomorrow</h1>

                            <div className="flex flex-col justify-center items-center rounded-xl border-4 w-16 h-16 lg:w-24 lg:h-24">
                                <h1>Thu</h1>
                                <h1>5/11</h1>
                            </div>          
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="text-[#d42828] my-1 invisible">Tomorrow</h1>

                            <div className="flex flex-col justify-center items-center rounded-xl border-4 w-16 h-16 lg:w-24 lg:h-24">
                                <h1>Thu</h1>
                                <h1>5/11</h1>
                            </div>          
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="text-[#d42828] my-1 invisible">Tomorrow</h1>

                            <div className="flex flex-col justify-center items-center rounded-xl border-4 w-16 h-16 lg:w-24 lg:h-24">
                                <h1>Thu</h1>
                                <h1>5/11</h1>
                            </div>          
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="text-[#d42828] my-1 invisible">Tomorrow</h1>

                            <div className="flex flex-col justify-center items-center rounded-xl border-4 w-16 h-16 lg:w-24 lg:h-24">
                                <h1>Thu</h1>
                                <h1>5/11</h1>
                            </div>          
                        </div>
                    </div>

                    <div className="grid grid-cols-2 my-8 gap-2">
                        <div>
                            <h1 className="invisible">Choose a date</h1>
                            <div className="w-full border-2 rounded-md p-2">
                                <input className="outline-0"
                                type="date" />
                            </div>
                        </div>

                        <div>
                            <h1>Choose a time Thu 5/11.</h1>
                            <div className="w-full border-2 rounded-md p-2">
                            <input className="outline-0"
                            type="time" />
                        </div>
                        </div>
                        
                    </div>
                    <Link href="repair_contact">
                        <div className="bg-[#d42828] rounded-sm flex justify-center items-center h-16 mx-auto w-40">
                            <a className="text-center text-white">Continue</a>
                        </div>
                    </Link>
                </div>
            </main>
        <Footer />
    </>
  )
}
