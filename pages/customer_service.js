import React from 'react'
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
export default function customer_service() {
  return (
    <>
        <Navbar/>
        <main className="xl:px-20">
        <div className="p-4 my-4 font-medium lg:text-xl lg:my-8">
           <h1 className='text-xl mb-3'>Customer Service</h1>
           
           <h1 className=''>We're here to help! Send us your message and
            our representative will get back to you 
            as soon as possible.
            </h1>
        </div>
        </main>   
        <Footer/>
    </>
  )
}
