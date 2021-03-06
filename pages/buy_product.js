import React, { useState } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Carrier from "../components/Carrier"
import DeviceCondition from "../components/DeviceCondition"
import DeviceColor from "../components/DeviceColor"
import DeviceRelated from "../components/DeviceRelated"
export default function Buy_product() {
  const carries = [
    {
      image: "/images/carrier/unlocked.png",
      name: "unlocked",
    },
    {
      image: "/images/carrier/g12.png",
      name: "metro",
    },
    {
      image: "/images/carrier/at.png",
      name: "at&t",
    },
    {
      image: "/images/carrier/bost.png",
      name: "boost",
    },
    {
      image: "/images/carrier/Sprint_C.png",
      name: "sprint",
    },
    {
      image: "/images/carrier/Cricket_Wireles.png",
      name: "cricket",
    },
    {
      image: "/images/carrier/verizon.png",
      name: "verizon",
    },
    {
      image: "/images/carrier/tmobile.png",
      name: "tmobile",
    },
  ]

  const conditions = [
    {
      name: "Brand New",
    },
    {
      name: "Returbished",
    },
    {
      name: "Excellent (A)",
    },
    {
      name: "Very Good (B)",
    },
    {
      name: "Fair (C)",
    },
  ]

  const storages = [
    {
      name: "1TB",
    },
    {
      name: "256GB",
    },
    {
      name: "128GB",
    },
    {
      name: "512GB",
    },
  ]
  const colors = [
    {
      name: "#ffffff",
    },
    {
      name: "#02cc86",
    },
    {
      name: "#ffe67e",
    },
    {
      name: "#969696",
    },
  ]

  const relelated_devices = [
    {
      name: "iPhone 11",
      image: "images/iphone/1.png",
      price: "$33000",
    },
    {
      name: "iPhone 10",
      image: "images/iphone/2.png",
      price: "$35000",
    },
    {
      name: "iPhone 9",
      image: "images/iphone/3.png",
      price: "$33000",
    },
    {
      name: "iPhone 6",
      image: "images/iphone/4.png",
      price: "$5000",
    },
  ]

  const [carrier, setCarrier] = useState("")
  const [condition, setCondition] = useState("")
  const [storage, setStorage] = useState("")
  const [color, setColor] = useState("")
  return (
    <div className="dark:bg-gray-900">
      <div className="bg-[#ffffff] hidden" />
      <div className="bg-[#02cc86] hidden" />
      <div className="bg-[#ffe67e] hidden" />
      <div className="bg-[#969696] hidden" />

      <Navbar />
      <main className="xl:px-20">
        <div className="p-4 my-4 font-medium lg:text-xl lg:my-8  ">
          <div className="text-xl mb-3">
            <h1>IPHONE 13 PRO MAX</h1>
          </div>

          <div className="grid lg:grid-cols-3 lg:gap-4 lg:mb-10">
            <div>
              <h1>Carrier</h1>
              <div className="grid grid-cols-4 gap-4 py-3 h-15">
                {carries.map((item, index) => (
                  <Carrier
                    key={index}
                    image={item.image}
                    name={item.name}
                    isActive={carrier}
                    setActive={setCarrier}
                  />
                ))}
              </div>
              <h1>Condition</h1>
              <div className="grid grid-cols-3 gap-4 py-3">
                {conditions.map((item, index) => (
                  <DeviceCondition
                    key={index}
                    name={item.name}
                    isCondition={true}
                    condition={condition}
                    setCondition={setCondition}
                  />
                ))}
              </div>

              <h1>Storage</h1>
              <div className="grid grid-cols-4 gap-4 py-3">
                {storages.map((item, index) => (
                  <DeviceCondition
                    key={index}
                    isCondition={false}
                    storageName={item.name}
                    name={item.name}
                    storage={storage}
                    setStorage={setStorage}
                  />
                ))}
              </div>

              <h1>Color</h1>
              <div className="flex flex-wrap gap-3 py-3 items-center">
                {colors.map((item, index) => (
                  <DeviceColor
                    key={index}
                    name={item.name}
                    color={color}
                    setColor={setColor}
                  />
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="my-10">
                <img
                  className="w-full object-cover"
                  src="/images/iphone/base.png"
                  alt=""
                />
              </div>
            </div>
          </div>

          <h1 className="text-lg">Related Products</h1>
          <div className="grid grid-cols-4  gap-4 py-3">
            {relelated_devices.map((item, index) => (
              <DeviceRelated
                key={index}
                name={item.name}
                image={item.image}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
