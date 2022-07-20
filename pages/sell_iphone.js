import React from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Device from "../components/Device"

export default function sell_iphone() {
  const devices = [
    {
      name: "Iphone 13 Pro Max",
      image: "images/buy_smart/iphones/13 pro max only.png",
      path: "sell_details",
    },
    {
      name: "Iphone 13 Pro Max",
      image: "images/buy_smart/iphones/13 pro max only.png",
      path: "sell_details",
    },
    {
      name: "Iphone 13 Pro Max",
      image: "images/buy_smart/iphones/13 pro max only.png",
      path: "sell_details",
    },
    {
      name: "Iphone 13 Pro Max",
      image: "images/buy_smart/iphones/13 pro max only.png",
      path: "sell_details",
    },
    {
      name: "Iphone 13 Pro Max",
      image: "images/buy_smart/iphones/13 pro max only.png",
      path: "sell_details",
    },
    {
      name: "Iphone 13 Pro Max",
      image: "images/buy_smart/iphones/13 pro max only.png",
      path: "sell_details",
    },
    {
      name: "Iphone 13 Pro Max",
      image: "images/buy_smart/iphones/13 pro max only.png",
      path: "sell_details",
    },
    {
      name: "Iphone 13 Pro Max",
      image: "images/buy_smart/iphones/13 pro max only.png",
      path: "sell_details",
    },
    {
      name: "Iphone 13 Pro Max",
      image: "images/buy_smart/iphones/13 pro max only.png",
      path: "sell_details",
    },
    {
      name: "Iphone 13 Pro Max",
      image: "images/buy_smart/iphones/13 pro max only.png",
      path: "sell_details",
    },
    {
      name: "Iphone 13 Pro Max",
      image: "images/buy_smart/iphones/13 pro max only.png",
      path: "sell_details",
    },
    {
      name: "Iphone 13 Pro Max",
      image: "images/buy_smart/iphones/13 pro max only.png",
      path: "sell_details",
    },
    {
      name: "Iphone 13 Pro Max",
      image: "images/buy_smart/iphones/13 pro max only.png",
      path: "sell_details",
    },
    // {
    //   name: "Iphone 13 Pro Max",
    //   image: "images/buy_smart/iphones/13 pro max only.png",
    //   path: "sell_details",
    // },
    // {
    //   name: "Iphone 13 Pro ",
    //   image: "images/buy_smart/iphones/13 pro only.png",
    //   path: "",
    // },
    // {
    //   name: "Iphone 13 ",
    //   image: "images/buy_smart/iphones/13 only.png",
    //   path: "",
    // },
    // {
    //   name: "Iphone 13 mini",
    //   image: "images/buy_smart/iphones/13 mini only.png",
    //   path: "",
    // },
    // {
    //   name: "Iphone 12 Pro Max",
    //   image: "images/buy_smart/iphones/iphone 12 pro.png",
    //   path: "",
    // },
    // {
    //   name: "Iphone 12 Pro ",
    //   image: "images/buy_smart/iphones/iphone 12.png",
    //   path: "",
    // },
    // {
    //   name: "Iphone 12 ",
    //   image: "images/buy_smart/iphones/iphone 12.png",
    //   path: "",
    // },
    // {
    //   name: "Iphone 12 mini",
    //   image: "images/buy_smart/iphones/iphone 12 mini.png",
    //   path: "",
    // },
    // {
    //   name: "Iphone 11 Pro Max",
    //   image: "images/buy_smart/iphones/iphone 11 pro m.png",
    //   path: "",
    // },
    // { name: "Iphone 11 Pro ", image: "images/buy_smart/iphones/", path: "" },
    // { name: "Iphone 11 ", image: "images/buy_smart/iphones/", path: "" },
    // { name: "Iphone xs max", image: "images/buy_smart/iphones/", path: "" },
    // { name: "Iphone xr", image: "images/buy_smart/iphones/", path: "" },
    // { name: "Iphone x ", image: "images/buy_smart/iphones/", path: "" },
    // { name: "Iphone xs ", image: "images/buy_smart/iphones/", path: "" },
    // { name: "Iphone 8 plus", image: "images/buy_smart/iphones/", path: "" },
    // { name: "Iphone 8 ", image: "images/buy_smart/iphones/", path: "" },
    // { name: "Iphone se 2020 ", image: "images/buy_smart/iphones/", path: "" },
    // { name: "Iphone 7 plus ", image: "images/buy_smart/iphones/", path: "" },
    // { name: "Iphone 7  ", image: "images/buy_smart/iphones/", path: "" },
    // { name: "Iphone 6s plus  ", image: "images/buy_smart/iphones/", path: "" },
    // { name: "Iphone 6 plus  ", image: "images/buy_smart/iphones/", path: "" },
    // { name: "Iphone 6s   ", image: "images/buy_smart/iphones/", path: "" },
    // { name: "Iphone 6  ", image: "images/buy_smart/iphones/", path: "" },
  ]
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-2 lg:grid-cols-10 lg:px-40 md:grid-cols-6 py-10 dark:bg-gray-900">
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
    </>
  )
}
