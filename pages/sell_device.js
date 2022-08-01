import React from "react"
import DeviceThumbnail from "../components/DeviceThumbnail"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

export default function Sell_Device() {
  const devices = [
    {
      name: "iPhone",
      image: "/images/client/Buy-iPhone_notext.jpg",
      path: "sell_iphone"
    },
    {
      name: "samsung",
      image: "/images/client/Buy-Samsung_notext.jpg",
      path: "sell_samsung"
    },
    {
      name: "smart watch",
      image: "/images/client/Buy-Watch_notext.jpg",
      path: "sell_watch"
    },
    {
      name: "iPod",
      image: "/images/client/ipod.jpg",
      path: "sell_ipod"
    },
    {
      name: "airpods",
      image: "/images/client/Buy-AirPods_notext.jpg",
      path: "sell_airpods"
    },
    {
      name: "iPad",
      image: "/images/client/Buy-iPad_notext.jpg",
      path: "sell_ipad"
    },
    {
      name: "Macbook",
      image: "/images/client/Buy-Mac_notext.jpg",
      path: "sell_macbook"
    },
    {
      name: "game console",
      image: "/images/client/Buy-GameConsoles_notext.jpg",
      path: "sell_console"
    },

    {
      name: "Featured Products",
      image: "/images/client/ShopFeatured_notext.jpg"
    }
  ]
  return (
    <div className="dark:bg-gray-900">
      <Navbar />
      <main className="lg:px-20 ">
        <div className="p-4 my-4  text-center font-medium lg:text-2xl lg:my-8">
          <h1 className="">Select your device to get started</h1>
          <h1>Sell your Device</h1>
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
