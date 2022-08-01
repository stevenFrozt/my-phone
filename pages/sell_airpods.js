import React, { useState } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Device from "../components/Device"
import BreadCrumbs from "../components/BreadCrumbs"
import { FaApple } from "react-icons/fa"

export default function Sell_airpods() {
  const devices = [
    {
      name: "AIRPODS MAX",
      image: "/images/airpods/1.png",
      path: "sell_details"
    },
    {
      name: "AirPods (1st Gen)",
      image: "/images/airpods/2.png",
      path: "sell_details"
    },

    {
      name: "AirPods (2nd. Gen, wireless charging case)",
      image: "/images/airpods/3.png",
      path: "sell_details"
    },

    {
      name: "AirPods (2nd. Gen)",
      image: "/images/airpods/4.png",
      path: "sell_details"
    },

    {
      name: "AirPods Max",
      image: "/images/airpods/5.png",
      path: "sell_details"
    },

    {
      name: "AirPods Pro",
      image: "/images/airpods/6.png",
      path: "sell_details"
    }
  ]

  const [breadcrumbsData, setBreadcrumbsData] = useState([
    {
      name: "category",
      path: "sell_device"
    },
    {
      name: "Airpods"
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
