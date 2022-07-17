import React from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import ServiceCards from "../components/ServiceCards"
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-8 px-4">
        {/* title and description */}
        <div className="pb-6">
          <h1 className="font-bold">Sell, Buy or Repair a device</h1>
          <p className="text-xs">
            Sell, Buy or Repair iphones, tablets , ipods and more
          </p>
        </div>
        {/* landing pic and button */}
        <div className="flex justify-between px-4">
          <button className="bg-red-500 text-white h-7 p-2 flex items-center rounded mt-4">
            let's go
          </button>
          <img src="images/landing.png" alt="" className="h-28" />
        </div>
        {/* services cards */}
        <div className="py-2">
          <h1>choose</h1>
          <h1>your sevice</h1>
          <div className="flex space-x-2 py-4 items-end">
            <ServiceCards
              description="SELL A DEVICE"
              image="images/trading.png"
              isActive={true}
            />
            <ServiceCards
              description="BUY A DEVICE"
              image="images/add_cart.png"
              isActive={false}
            />
            <ServiceCards
              description="REPAIR A DEVICE"
              image="images/repair.png"
              isActive={false}
            />
          </div>

          <img src="images/group_device.png" alt="" />
        </div>
      </main>
    </>
  )
}
