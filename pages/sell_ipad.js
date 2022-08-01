import React, { useState } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Device from "../components/Device"
import BreadCrumbs from "../components/BreadCrumbs"

export default function Sell_Ipad() {
  const deviceModels = [
    {
      name: "iPad",
      image: "/images/ipad/1.png",
      type: "model"
    },
    {
      name: "iPad Air",
      image: "/images/ipad/2.png",
      type: "model"
    },
    {
      name: "iPad Mini",
      image: "/images/ipad/3.png",
      type: "model"
    },
    {
      name: "iPad Pro",
      image: "/images/ipad/4.png",
      type: "model"
    }
  ]

  const ipad = [
    {
      name: "IPAD 9TH GENERATION",
      image: "/images/ipad/ipad/1.png"
    },
    {
      name: "iPad (8th Gen)",
      image: "/images/ipad/ipad/2.png"
    },
    {
      name: "iPad (7th Gen)",
      image: "/images/ipad/ipad/3.png"
    },
    {
      name: "iPad (6th Gen)",
      image: "/images/ipad/ipad/4.png"
    },
    {
      name: "iPad (5th Gen)",
      image: "/images/ipad/ipad/5.png"
    },
    {
      name: "iPad (4th Gen)",
      image: "/images/ipad/ipad/6.png"
    },
    {
      name: "iPad (3rd Gen)",
      image: "/images/ipad/ipad/7.png"
    }
  ]

  const ipad_air = [
    {
      name: "iPad Air 4",
      image: "/images/ipad/air/1.png"
    },
    {
      name: "iPad Air 3",
      image: "/images/ipad/air/2.png"
    },
    {
      name: "iPad Air",
      image: "/images/ipad/air/3.png"
    }
  ]

  const ipad_mini = [
    {
      name: "iPad Mini (5th Gen)",
      image: "/images/ipad/mini/1.png"
    },
    {
      name: "iPad Mini (6th gen)",
      image: "/images/ipad/mini/2.png"
    },
    {
      name: "iPad Mini (4th Gen)",
      image: "/images/ipad/mini/3.png"
    },
    {
      name: "iPad Mini (3rd Gen)",
      image: "/images/ipad/mini/4.png"
    },
    {
      name: "iPad Mini (2nd Gen)",
      image: "/images/ipad/mini/5.png"
    },
    {
      name: "iPad Mini (1st Gen)",
      image: "/images/ipad/mini/5.png"
    }
  ]

  const ipad_pro = [
    {
      name: "iPad Pro 12.9″ (4th Gen)",
      image: "/images/ipad/pro/1.png"
    },
    {
      name: "iPad Pro 12.9″ (5th Gen)",
      image: "/images/ipad/pro/2.png"
    },
    {
      name: "iPad Pro 12.9″ (3rd Gen)",
      image: "/images/ipad/pro/3.png"
    },
    {
      name: "iPad Pro 12.9″ (2nd Gen)",
      image: "/images/ipad/pro/4.png"
    },
    {
      name: "iPad Pro 12.9″ (1st Gen)",
      image: "/images/ipad/pro/5.png"
    },
    {
      name: "iPad Pro 11″ (2nd Gen)",
      image: "/images/ipad/pro/6.png"
    },
    {
      name: "iPad Pro 11″ (3rd gen)",
      image: "/images/ipad/pro/7.png"
    },
    {
      name: "iPad Pro 11″ (1st Gen)",
      image: "/images/ipad/pro/8.png"
    },
    {
      name: "iPad Pro 10.5″",
      image: "/images/ipad/pro/9.png"
    },
    {
      name: "iPad Pro 9.7″",
      image: "/images/ipad/pro/10.png"
    }
  ]

  const [breadcrumbsData, setBreadcrumbsData] = useState([
    {
      name: "category",
      path: "sell_device"
    },
    {
      name: "iPad"
    }
  ])

  const [model, setModel] = useState("")

  function addBreadCrumbs(name, path, active) {
    setBreadcrumbsData(prev => [...prev, { name, path, active }])
    console.log("name", name)
    console.log(breadcrumbsData)
  }

  // conditional Rendering
  function render(data, type = false) {
    return (
      <>
        {type ? (
          <div className="flex justify-center items-center py-4 text-lg font-medium lg:text-2xl lg:py-10">
            <h1>Choose Model</h1>
          </div>
        ) : (
          ""
        )}
        <div
          className={
            type
              ? "lg:flex lg:gap-4 lg:justify-evenly lg:w-1/2 lg:mx-auto py-4 lg:py-10 grid grid-cols-4 lg:grid-cols-10 lg:px-40  md:grid-cols-6"
              : "grid grid-cols-4 lg:grid-cols-10 lg:px-40 py-4 lg:py-10  md:grid-cols-6"
          }
        >
          {data.map((item, index) => (
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
    )
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

      {model == deviceModels[0].name
        ? render(ipad)
        : model == deviceModels[1].name
        ? render(ipad_air)
        : model == deviceModels[2].name
        ? render(ipad_mini)
        : model == deviceModels[3].name
        ? render(ipad_pro)
        : render(deviceModels, true)}

      <Footer />
    </div>
  )
}
