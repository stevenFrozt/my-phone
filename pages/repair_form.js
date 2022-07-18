import React from 'react'
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
export default function repair_form() {
  return (
    <>
        <Navbar/>
        <main className="xl:px-20">
            <div className="p-5 my-4 font-medium lg:text-xl lg:my-8">
                <div className="grid grid-cols-1">
                   <div className="flex flex-col items-center mb-10">
                        <img src="images/iphone/5.png" alt="" />
                        <h1>IPHONE 13 PRO MAX</h1>
                   </div>

                   <div className="flex flex-col gap-1 font-normal px-3">
                        <h1>Name</h1>
                        <input className="outline-0 border-b-2" placeholder="hisham hosam alkhlout" type="text" />

                        <h1>Phone Number</h1>
                        <input className="outline-0 border-b-2" placeholder="09504672234" type="text" />

                        <h1>E-mail</h1>
                        <input className="outline-0 border-b-2" placeholder="email@gmail.com" type="text" />

                        <h1>Tell us about your mobile problem</h1>
                        <textarea className="outline-0 border-2 p-1" cols="30" rows="5"></textarea>
                   </div>
                   <div className="flex flex-col justify-start text-xs font-normal px-3 leading-4 mt-4">
                        <div className="flex mb-2">
                            <input className="mr-1"type="checkbox" />
                            <h1>Yes, email me coupons and special offers from CPR Cell Phone Repair. *</h1>
                        </div>

                        <div className="flex">
                            <input className="mr-1"type="checkbox" />
                            <h1>Yes, email me coupons and special offers from CPR Cell Phone Repair. *</h1>
                        </div>
                   </div>
                    
                    <div className="flex justify-center mt-10">
                        <div className="py-5 px-20 bg-[#d42828] rounded-sm ">

                        </div>
                    </div>

                </div>
            </div>
            
        </main>
        <Footer />
    </>
  )
}
