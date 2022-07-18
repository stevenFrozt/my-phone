import React from 'react'
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
export default function repair_form() {
  return (
    <>
        <Navbar/>
        <main className="xl:px-20">
            <div className="p-5 my-4 font-medium lg:text-xl lg:my-8">
                <div className="grid grid-cols-1 justify-center items-center lg:grid-cols-2 lg:col-span-3">
                   <div className="flex flex-col items-center lg:items-end mb-10 lg:col-start-2 lg:col-end-4 ">
                        <div className="">
                            <img  className="lg:w-96" src="images/iphone/5.png" alt="" />
                            <h1 className="text-center">IPHONE 13 PRO MAX</h1>
                        </div>
                   </div>

                   <div className="flex flex-col gap-1 font-normal px-3 lg:p-5 lg:border-2 lg:rounded-lg lg:row-start-1 lg:col-end-2">
                        <h1>Name</h1>
                        <input className="outline-0 border-b-2 text-sm" placeholder="hisham hosam alkhlout" type="text" />

                        <h1>Phone Number</h1>
                        <input className="outline-0 border-b-2 text-sm" placeholder="09504672234" type="text" />

                        <h1>E-mail</h1>
                        <input className="outline-0 border-b-2 text-sm" placeholder="email@gmail.com" type="text" />

                        <h1 className="pt-5">Tell us about your mobile problem</h1>
                        <textarea className="outline-0 border-2 p-1 text-sm" cols="30" rows="5"></textarea>
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
                    
                    <div className="mt-10 flex flex-col items-center">
                        <div className="flex items-center justify-center w-full h-10 bg-[#d42828] rounded-sm mb-4 ">
                            <h1 className="text-center text-white">Get free estimate</h1>
                        </div>

                        <h1 className="font-normal text-xs">* By Submitting this estimate form I understand I may receive an email, text or phone call regarding  my repair estimate. You can unsubscribe at any time.</h1>
                    </div>
                   </div>
                   
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-10 my-12 text-center gap-x-1 gap-y-12  mt-20">
                    <div className="border-2 border-black pb-6 relative">
                        <h1 className="text-[#3681b8] mt-5">Lifetime Warranty</h1>
                        <h1 className="text-sm font-normal m-1">Replacement parts and workmanship are covered under our warranty policy.</h1>
                        <img className="absolute -top-6 left-4 bg-white p-2" src="images/icon/quality.png" alt="" />
                    </div>
                    <div className="border-2 border-black pb-6 relative">
                        <h1 className="text-[#3681b8] mt-5">Same Day Repairs</h1>
                        <h1 className="text-sm font-normal m-1">We offer same day repair solutions for a wide variety of common issues.</h1>
                        <img className="absolute -top-6 left-4 bg-white p-2" src="images/icon/on-time.png" alt="" />

                    </div>
                    <div className="border-2 border-black pb-6 relative">
                        <h1 className="text-[#3681b8] mt-5">Expert Technicians</h1>
                        <h1 className="text-sm font-normal m-1">Our expert technicians have completed extensive technical training</h1>
                        <img className="absolute -top-6 left-4 bg-white p-2" src="images/icon/rating.png" alt="" />
                    </div>
                    <div className="border-2 border-black pb-6 relative">
                        <h1 className="text-[#3681b8] mt-5">1M+ Devices Fixed</h1>
                        <h1 className="text-sm font-normal m-1">From phones and tablets to drones and more; you name– we’ve fixed it!</h1>
                        <img className="absolute -top-6 left-4 bg-white p-2" src="images/icon/maintenance.png" alt="" />
                    </div>
                    
                </div>
                
            </div>
            
        </main>
        <Footer />
    </>
  )
}
