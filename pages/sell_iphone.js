import React, { useState } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Device from "../components/Device"
import BreadCrumbs from "../components/BreadCrumbs"
import { FaApple } from "react-icons/fa"

export default function Sell_iphone() {
  const devices = [
    {
      name: "Iphone 13",
      image: "images/iphone_devices/1.png",
      path: "sell_details"
    },
    {
      name: "iPhone 13 Mini",
      image: "images/iphone_devices/2.png",
      path: "sell_details"
    },
    {
      name: "IPHONE 13 PRO",
      image: "images/iphone_devices/3.png",
      path: "sell_details"
    },
    {
      name: "IPHONE 13 PRO MAX",
      image: "images/iphone_devices/26.png",
      path: "sell_details"
    },
    {
      name: "iPhone 12 Pro Max",
      image: "images/iphone_devices/4.png",
      path: "sell_details"
    },
    {
      name: "iPhone 12 Pro",
      image: "images/iphone_devices/5.png",
      path: "sell_details"
    },
    {
      name: "iPhone 12",
      image: "images/iphone_devices/6.png",
      path: "sell_details"
    },
    {
      name: "iPhone 11 Pro Max",
      image: "images/iphone_devices/7.png",
      path: "sell_details"
    },
    {
      name: "iPhone 11 Pro",
      image: "images/iphone_devices/8.png",
      path: "sell_details"
    },
    {
      name: "iPhone 11",
      image: "images/iphone_devices/9.png",
      path: "sell_details"
    },
    {
      name: "iPhone XS Max",
      image: "images/iphone_devices/10.png",
      path: "sell_details"
    },
    {
      name: "iPhone XS",
      image: "images/iphone_devices/11.png",
      path: "sell_details"
    },
    {
      name: "iPhone XR",
      image: "images/iphone_devices/12.png",
      path: "sell_details"
    },
    {
      name: "iPhone X",
      image: "images/iphone_devices/13.png",
      path: "sell_details"
    },
    {
      name: "iPhone 8 Plus",
      image: "images/iphone_devices/14.png",
      path: "sell_details"
    },
    {
      name: "iPhone 8",
      image: "images/iphone_devices/15.png",
      path: "sell_details"
    },
    {
      name: "iPhone SE 2020",
      image: "images/iphone_devices/16.png",
      path: "sell_details"
    },
    {
      name: "iPhone 7",
      image: "images/iphone_devices/17.png",
      path: "sell_details"
    },
    {
      name: "iPhone 7 Plus",
      image: "images/iphone_devices/18.png",
      path: "sell_details"
    },
    {
      name: "iPhone SE",
      image: "images/iphone_devices/19.png",
      path: "sell_details"
    },
    {
      name: "iPhone 6S Plus",
      image: "images/iphone_devices/20.png",
      path: "sell_details"
    },
    {
      name: "iPhone 6 Plus",
      image: "images/iphone_devices/21.png",
      path: "sell_details"
    },
    {
      name: "iPhone 5s",
      image: "images/iphone_devices/22.png",
      path: "sell_details"
    },
    {
      name: "iPhone 6S",
      image: "images/iphone_devices/23.png",
      path: "sell_details"
    },
    {
      name: "iPhone 5/5c",
      image: "images/iphone_devices/24.png",
      path: "sell_details"
    },
    {
      name: "iPhone 6",
      image: "images/iphone_devices/25.png",
      path: "sell_details"
    }
  ]

  const [breadcrumbsData, setBreadcrumbsData] = useState([
    {
      name: "category",
      path: "sell_device"
    },
    {
      name: "iPhone"
    }
  ])

  return (
    <div className="dark:bg-gray-900">
      <Navbar />
      <BreadCrumbs data={breadcrumbsData} setData={setBreadcrumbsData} />
      {/* <div className="flex justify-center items-center py-4 text-lg font-medium lg:text-2xl lg:hidden">
        <h1>IPHONE PRODUCTS</h1>
      </div> */}
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
