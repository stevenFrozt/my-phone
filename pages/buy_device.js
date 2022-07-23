import React from "react"
// import Device from "../components/Device"
import DeviceThumbnail from "../components/DeviceThumbnail"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

export default function Sell_Device() {
  const devices = [
    {
      name: "Iphone",
      image: "/images/client/Buy-iPhone_notext.jpg",
      path: "sell_iphone",
    },
    { name: "samsung", image: "/images/client/Buy-Samsung_notext.jpg" },
    { name: "smart watch", image: "/images/client/Buy-Watch_notext.jpg" },
    { name: "airpods", image: "/images/client/Buy-AirPods_notext.jpg" },
    { name: "ipad", image: "/images/client/Buy-iPad_notext.jpg" },
    { name: "Macbook", image: "/images/client/Buy-Mac_notext.jpg" },
    { name: "console", image: "/images/client/Buy-GameConsoles_notext.jpg" },

    {
      name: "Featured Products",
      image: "/images/client/ShopFeatured_notext.jpg",
    },
  ]
  return (
    <div className="dark:bg-gray-900">
      <Navbar />
      {/* MOBILE */}
      <main className="xl:px-20">
        <div className="p-4 my-4 text-center font-medium lg:text-2xl lg:my-8">
          <h1 className="text-2xl">Select your device to get started</h1>
          <h1>Buy your Device</h1>
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
