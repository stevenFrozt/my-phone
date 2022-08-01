import React, { useState } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Device from "../components/Device"
import BreadCrumbs from "../components/BreadCrumbs"

export default function Sell_console() {
  const deviceModels = [
    {
      name: "Nintendo",
      image: "/images/console/a.png",
      type: "model"
    },
    {
      name: "Playstation",
      image: "/images/console/b.png",
      type: "model"
    },
    {
      name: "Xbox",
      image: "/images/console/c.png",
      type: "model"
    }
  ]

  const nintendo = [
    {
      name: "Nintendo Switch",
      image: "/images/console/a/1.png"
    },
    {
      name: "Nintendo Switch Lite",
      image: "/images/console/a/2.png"
    }
  ]

  const playstation = [
    {
      name: "Playstation 4",
      image: "/images/console/b/1.png"
    },
    {
      name: "Playstation 4 Pro",
      image: "/images/console/b/2.png"
    },
    {
      name: "Playstation 4 Slim",
      image: "/images/console/b/3.png"
    },
    {
      name: "Playstation 5",
      image: "/images/console/b/4.png"
    },
    {
      name: "Playstation 5 Digital Edition",
      image: "/images/console/b/5.png"
    }
  ]

  const xbox = [
    {
      name: "Xbox One",
      image: "/images/console/c/1.png"
    },
    {
      name: "Xbox One S",
      image: "/images/console/c/2.png"
    },
    {
      name: "Xbox One S Digital Edition",
      image: "/images/console/c/3.png"
    },
    {
      name: "Xbox One S Digital Edition",
      image: "/images/console/c/4.png"
    },
    {
      name: "Xbox Series S",
      image: "/images/console/c/5.png"
    },
    {
      name: "Xbox Series X",
      image: "/images/console/c/6.png"
    }
  ]

  const [breadcrumbsData, setBreadcrumbsData] = useState([
    {
      name: "category",
      path: "sell_device"
    },
    {
      name: "game console"
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
        ? render(nintendo)
        : model == deviceModels[1].name
        ? render(playstation)
        : model == deviceModels[2].name
        ? render(xbox)
        : render(deviceModels, true)}

      <Footer />
    </div>
  )
}
