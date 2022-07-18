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
                    <Link href="repair_contact">
                        <div className="p-5 bg-[#d42828] rounded-sm mb-4 ">
                            <a className="text-center text-white">Continue</a>
                        </div>
                    </Link>
                </div>
            </main>
        <Footer />
    </>
  )
}
