import React, { useState } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Device from "../components/Device"
import BreadCrumbs from "../components/BreadCrumbs"

export default function Sell_Watch() {
  const deviceModels = [
    {
      name: "Apple Watch",
      image: "/images/watch/a.png",
      type: "model"
    },
    {
      name: "FitBit",
      image: "/images/watch/b.png",
      type: "model"
    },
    {
      name: "Samsung Watchs",
      image: "/images/watch/c.png",
      type: "model"
    }
  ]

  const AppleWatch = [
    {
      name: "Apple Watch Nike Series 7",
      image: "/images/watch/apple/1.png"
    },
    {
      name: "Apple Watch SE",
      image: "/images/watch/apple/2.png"
    },

    {
      name: "Apple Watch Series 7",
      image: "/images/watch/apple/3.png"
    },

    {
      name: "Apple Watch Series 1",
      image: "/images/watch/apple/4.png"
    },

    {
      name: "Apple Watch Series 2",
      image: "/images/watch/apple/5.png"
    },

    {
      name: "Apple Watch Series 3",
      image: "/images/watch/apple/6.png"
    },

    {
      name: "Apple Watch Series 4",
      image: "/images/watch/apple/7.png"
    },
    {
      name: "Apple Watch Series 5",
      image: "/images/watch/apple/8.png"
    },
    {
      name: "Apple Watch Hermes Series 7",
      image: "/images/watch/apple/9.png"
    },
    {
      name: "Apple Watch Series 6 (GPS + Cellular)",
      image: "/images/watch/apple/10.png"
    },
    {
      name: "Apple Watch Series 6 (GPS)",
      image: "/images/watch/apple/10.png"
    }
  ]

  const Fitbit = [
    {
      name: "FitBit Charge 4",
      image: "/images/watch/fitbit/1.png"
    },
    {
      name: "FitBit Sense",
      image: "/images/watch/fitbit/2.png"
    },
    {
      name: "FitBit Versa 2",
      image: "/images/watch/fitbit/3.png"
    },
    {
      name: "FitBit Versa 3",
      image: "/images/watch/fitbit/4.png"
    }
  ]

  const samsungWatch = [
    {
      name: "Galaxy Gear S3 Classic",
      image: "/images/watch/samsung/1.png"
    },
    {
      name: "Galaxy Watch 3",
      image: "/images/watch/samsung/2.png"
    }
  ]

  const [breadcrumbsData, setBreadcrumbsData] = useState([
    {
      name: "category",
      path: "sell_device"
    },
    {
      name: "Smart Watch"
    }
  ])

  const [model, setModel] = useState("")

  function addBreadCrumbs(name, path, active) {
    setBreadcrumbsData(prev => [...prev, { name, path, active }])
    console.log("name", name)
    console.log(breadcrumbsData)
  }

  return (
    <div className="dark:bg-gray-900">
      <Navbar />
      <BreadCrumbs
        data={breadcrumbsData}
        setData={setBreadcrumbsData}
        setModel={setModel}
        model={model}
      />

      {model == deviceModels[0].name ? (
        <>
          <div className="grid grid-cols-4 lg:grid-cols-10 lg:px-40 py-4 lg:py-10  md:grid-cols-6">
            {AppleWatch.map((item, index) => (
              <Device
                key={index}
                name={item.name}
                image={item.image}
                path={item.path}
                type={item.type}
                setModel={setModel}
                model={model}
                addBreadCrumbs={addBreadCrumbs}
              />
            ))}
          </div>
        </>
      ) : model == deviceModels[1].name ? (
        <>
          <div className="grid grid-cols-4 lg:grid-cols-10 lg:px-40 py-4 lg:py-10  md:grid-cols-6">
            {Fitbit.map((item, index) => (
              <Device
                key={index}
                name={item.name}
                image={item.image}
                path={item.path}
                type={item.type}
                setModel={setModel}
                model={model}
                addBreadCrumbs={addBreadCrumbs}
              />
            ))}
          </div>
        </>
      ) : model == deviceModels[2].name ? (
        <>
          <div className="grid grid-cols-4 lg:grid-cols-10 lg:px-40 py-4 lg:py-10  md:grid-cols-6">
            {samsungWatch.map((item, index) => (
              <Device
                key={index}
                name={item.name}
                image={item.image}
                path={item.path}
                type={item.type}
                setModel={setModel}
                model={model}
                addBreadCrumbs={addBreadCrumbs}
              />
            ))}
          </div>
        </>
      ) : (
        ""
      )}

      {model == "" ? (
        <>
          <div className="flex justify-center items-center py-4 text-lg font-medium lg:text-2xl lg:py-10">
            <h1>Choose Model</h1>
          </div>
          <div className="grid grid-cols-3 gap-4 justify-evenly scale-125  w-1/2 mx-auto py-4 lg:py-10">
            {deviceModels.map((item, index) => (
              <Device
                key={index}
                name={item.name}
                image={item.image}
                path={item.path}
                type={item.type}
                setModel={setModel}
                model={model}
                addBreadCrumbs={addBreadCrumbs}
              />
            ))}
          </div>
        </>
      ) : (
        ""
      )}

      <Footer />
    </div>
  )
}
