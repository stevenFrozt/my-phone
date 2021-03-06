import React from "react"
// import Device from "../components/Device"
import DeviceThumbnail from "../components/DeviceThumbnail"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

export default function repair_device() {
  const devices = [
    {
      name: "Iphone",
      image: "/images/sell_smart/IPHONE XS.png",
      path: "repair_iphone",
    },
    {
      name: "samsung",
      image: "/images/sell_smart/SAMSUNG GALAXY .png",
      path: "repair_iphone",
    },
    {
      name: "smart watch",
      image: "/images/sell_smart/APPLE WATCH SER.png",
      path: "repair_iphone",
    },
    {
      name: "airpods",
      image: "/images/sell_smart/AIRPODS PROS.png",
      path: "repair_iphone",
    },
    {
      name: "airpods",
      image: "/images/sell_smart/IPHONE XS.png",
      path: "repair_iphone",
    },
    {
      name: "ipade",
      image: "/images/sell_smart/ipad pro 12.9 4.png",
      path: "repair_iphone",
    },
    {
      name: "Macbook",
      image: "/images/sell_smart/macbook-air-201.png",
      path: "repair_iphone",
    },
    {
      name: "consol",
      image: "/images/sell_smart/NINTENDO SWITCH.png",
      path: "repair_iphone",
    },
    {
      name: "Featured Products",
      image: "/images/sell_smart/IPHONE XS MAX.png",
    },
  ]
  return (
    <div className="dark:bg-gray-900/100">
      <Navbar />
      {/* MOBILE */}
      <main className="xl:px-20">
        <div className="p-4 my-4 text-center font-medium lg:text-xl lg:my-8">
          <h1 className="text-2xl">Select your device to get started</h1>
          <h1>Repair Your Device</h1>
        </div>

        <div className="grid-cols-2 lg:grid-cols-4 grid gap-4 lg:gap-8 px-4">
          {devices.map((item, index) => (
            <DeviceThumbnail
              key={index}
              image={item.image}
              name={item.name}
              path={item.path}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
