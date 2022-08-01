import React, { useState } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Device from "../components/Device"
import BreadCrumbs from "../components/BreadCrumbs"
import { FaApple } from "react-icons/fa"

export default function Sell_ipod() {
  const devices = [
    {
      name: "iPod Touch (5th Gen)",
      image: "/images/ipods/1.png",
      path: "sell_details"
    },
    {
      name: "iPod Touch (6th Gen)",
      image: "/images/ipods/2.png",
      path: "sell_details"
    },
    {
      name: "iPod Touch (7th Gen)",
      image: "/images/ipods/3.png",
      path: "sell_details"
    }
  ]

  const [breadcrumbsData, setBreadcrumbsData] = useState([
    {
      name: "category",
      path: "sell_device"
    },
    {
      name: "iPods"
    }
  ])

  return (
    <div className="dark:bg-gray-900">
      <Navbar />
      <BreadCrumbs data={breadcrumbsData} setData={setBreadcrumbsData} />

      <div className="grid grid-cols-4 lg:grid-cols-10 lg:px-40 py-4 lg:py-10 md:grid-cols-6">
        {devices.map((item, index) => (
          <Device
            key={index}
            name={item.name}
            image={item.image}
            path={item.path}
          />
        ))}
      </div>

      <Footer />
    </div>
  )
}
