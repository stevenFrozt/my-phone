import React, { useState } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Device from "../components/Device"
import BreadCrumbs from "../components/BreadCrumbs"

export default function Sell_samsung() {
  const deviceModels = [
    {
      name: "Samsung Note",
      image: "/images/samsung/a.png",
      type: "model"
    },
    {
      name: "Samsung Galaxy",
      image: "/images/samsung/b.png",
      type: "model"
    },
    {
      name: "Samsung Galaxy Note Z (Fold)",
      image: "/images/samsung/c.png",
      type: "model"
    }
  ]

  const samsung_note = [
    {
      name: "Galaxy Note 20 Ultra",
      image: "/images/samsung/samsung_note/1.png"
    },
    {
      name: "Galaxy Note 20 Ultra 5G",
      image: "/images/samsung/samsung_note/1.png"
    },
    {
      name: "Galaxy Note 20 Ultra 5G",
      image: "/images/samsung/samsung_note/2.png"
    },
    {
      name: "Galaxy Note 20 5G",
      image: "/images/samsung/samsung_note/3.png"
    },
    {
      name: "Galaxy Note 10 Plus",
      image: "/images/samsung/samsung_note/4.png"
    },
    {
      name: "Galaxy Note 10 Plus 5G",
      image: "/images/samsung/samsung_note/4.png"
    },
    {
      name: "Galaxy Note 10",
      image: "/images/samsung/samsung_note/4.png"
    },
    {
      name: "Galaxy Note 10 Lite",
      image: "/images/samsung/samsung_note/4.png"
    },
    {
      name: "Galaxy Note 9",
      image: "/images/samsung/samsung_note/5.png"
    },
    {
      name: "Galaxy Note 8",
      image: "/images/samsung/samsung_note/6.png"
    },
    {
      name: "Galaxy Note 5",
      image: "/images/samsung/samsung_note/7.png"
    },
    {
      name: "Galaxy Note 4",
      image: "/images/samsung/samsung_note/8.png"
    },
    {
      name: "Galaxy Note Edge",
      image: "/images/samsung/samsung_note/9.png"
    },
    {
      name: "Galaxy Note 3",
      image: "/images/samsung/samsung_note/10.png"
    }
  ]

  const galaxy = [
    {
      name: "Galaxy S21 Ultra 5G",
      image: "/images/samsung/galaxy/1.png"
    },
    {
      name: "Galaxy S21 Plus 5G",
      image: "/images/samsung/galaxy/2.png"
    },
    {
      name: "Galaxy S21 5G",
      image: "/images/samsung/galaxy/3.png"
    },
    {
      name: "Galaxy S20 Ultra",
      image: "/images/samsung/galaxy/4.png"
    },
    {
      name: "Galaxy S20 Plus",
      image: "/images/samsung/galaxy/5.png"
    },
    {
      name: "Galaxy S20",
      image: "/images/samsung/galaxy/6.png"
    },
    {
      name: "Galaxy S10 Plus",
      image: "/images/samsung/galaxy/7.png"
    },
    {
      name: "Galaxy S10E",
      image: "/images/samsung/galaxy/8.png"
    },
    {
      name: "Galaxy S10",
      image: "/images/samsung/galaxy/9.png"
    },
    {
      name: "Galaxy S9 Plus",
      image: "/images/samsung/galaxy/10.png"
    },
    {
      name: "Galaxy S9",
      image: "/images/samsung/galaxy/11.png"
    },
    {
      name: "Galaxy S8",
      image: "/images/samsung/galaxy/12.png"
    },
    {
      name: "Galaxy S7",
      image: "/images/samsung/galaxy/13.png"
    },
    {
      name: "Galaxy S6 Edge Plus",
      image: "/images/samsung/galaxy/14.png"
    },
    {
      name: "Galaxy S6 Edge",
      image: "/images/samsung/galaxy/15.png"
    },
    {
      name: "Galaxy S6",
      image: "/images/samsung/galaxy/16.png"
    },
    {
      name: "Samsung Galaxy S7 Edge",
      image: "/images/samsung/galaxy/17.png"
    },
    {
      name: "Samsung Galaxy S8 Plus",
      image: "/images/samsung/galaxy/18.png"
    },
    {
      name: "Galaxy S5",
      image: "/images/samsung/galaxy/19.png"
    }
  ]

  const fold = [
    {
      name: "Galaxy Fold",
      image: "/images/samsung/fold/1.png"
    },
    {
      name: "Galaxy Z Flip 5G",
      image: "/images/samsung/fold/2.png"
    },
    {
      name: "Galaxy Z Fold2 5G",
      image: "/images/samsung/fold/3.png"
    },
    {
      name: "Galaxy Z Flip",
      image: "/images/samsung/fold/4.png"
    }
  ]

  const [breadcrumbsData, setBreadcrumbsData] = useState([
    {
      name: "category",
      path: "sell_device"
    },
    {
      name: "Samsung"
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
        ? render(samsung_note)
        : model == deviceModels[1].name
        ? render(galaxy)
        : model == deviceModels[2].name
        ? render(fold)
        : render(deviceModels, true)}

      <Footer />
    </div>
  )
}
