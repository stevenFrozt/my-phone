import React from "react"
import DeviceThumbnail from "../components/DeviceThumbnail"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

export default function Sell_Device() {
  const devices = [
    { name: "Iphone", image: "/images/sell_smart/IPHONE XS.png" },
    { name: "samsung", image: "/images/sell_smart/SAMSUNG GALAXY .png" },
    { name: "smart watch", image: "/images/sell_smart/APPLE WATCH SER.png" },
    { name: "airpods", image: "/images/sell_smart/AIRPODS PROS.png" },
    { name: "airpods", image: "/images/sell_smart/IPHONE XS.png" },
    { name: "ipade", image: "/images/sell_smart/ipad pro 12.9 4.png" },
    { name: "Macbook", image: "/images/sell_smart/macbook-air-201.png" },
    { name: "consol", image: "/images/sell_smart/NINTENDO SWITCH.png" },
    {
      name: "Featured Products",
      image: "/images/sell_smart/IPHONE XS MAX.png",
    },
  ]
  return (
    <>
      <Navbar />
      {/* MOBILE */}
      <main>
        <div className="p-4 my-4 text-center">
          <h1 className="font-bold">Select your device to get started</h1>
          <h1>Sell your Device</h1>
        </div>

        <div className="grid-cols-2 grid gap-4 px-4">
          {devices.map((item, index) => (
            <DeviceThumbnail key={index} image={item.image} name={item.name} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
