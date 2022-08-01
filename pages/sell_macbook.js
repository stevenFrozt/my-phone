import React, { useState } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Device from "../components/Device"
import BreadCrumbs from "../components/BreadCrumbs"

export default function Sell_macbook() {
  const deviceModels = [
    {
      name: `MacBook 12${'"'}
      (2015-Present)`,
      image: "/images/macbook/a.png",
      type: "model"
    },
    {
      name: "MacBook Air (2009 - Present)",
      image: "/images/macbook/b.png",
      type: "model"
    },
    {
      name: "MacBook Pro - No Touch Bar (2016 - Present)",
      image: "/images/macbook/c.png",
      type: "model"
    },
    {
      name: "MacBook Pro Retina (2012-2015)",
      image: "/images/macbook/d.png",
      type: "model"
    },
    {
      name: "MacBook Pro - Touch Bar (2016 - Present)",
      image: "/images/macbook/e.png",
      type: "model"
    },
    {
      name: "MacBook Pro - Unibody (2009-2012)",
      image: "/images/macbook/f.png",
      type: "model"
    }
  ]

  const item1 = [
    {
      name: "Retina, 12 inch, 2017, MacBook10,1",
      image: "/images/macbook/a/1.png"
    },
    {
      name: "Retina, 12 inch, 2016, MacBook9,1",
      image: "/images/macbook/a/2.png"
    },
    {
      name: "Retina, 12 inch, 2015, MacBook8,1",
      image: "/images/macbook/a/3.png"
    }
  ]

  const item2 = [
    {
      name: 'MacBook Air 13"\
      (2009-2017)',
      image: "/images/macbook/b/1.png"
    },
    {
      name: 'MacBook Air 13"\
      (2018-2020)',
      image: "/images/macbook/b/2.png"
    }
  ]
  const item3 = [
    {
      name: "13 inch, 2016, Two Thunderbolt 3 ports, MacBookPro13,1",
      image: "/images/macbook/c/1.png"
    },
    {
      name: '13 inch, 2017, Two Thunderbolt 3 ports, MacBookPro14,1"\
      (2018-2020)',
      image: "/images/macbook/c/2.png"
    }
  ]
  const item4 = [
    {
      name: 'MacBook Pro Retina 13"',
      image: "/images/macbook/d/1.png"
    },
    {
      name: 'MacBook Pro Retina 15"\
    (2018-2020)',
      image: "/images/macbook/d/2.png"
    }
  ]
  const item5 = [
    {
      name: 'MacBook Pro 13" - Touch Bar',
      image: "/images/macbook/e/1.png"
    },
    {
      name: 'MacBook Pro 15" - Touch Bar',
      image: "/images/macbook/e/2.png"
    },
    {
      name: 'MacBook Pro 16"',
      image: "/images/macbook/e/3.png"
    }
  ]
  const item6 = [
    {
      name: 'MacBook Pro Unibody 13"',
      image: "/images/macbook/f/1.png"
    },
    {
      name: 'MacBook Pro Unibody 15"',
      image: "/images/macbook/f/2.png"
    },
    {
      name: 'MacBook Pro Unibody 17"',
      image: "/images/macbook/f/3.png"
    }
  ]

  const [breadcrumbsData, setBreadcrumbsData] = useState([
    {
      name: "category",
      path: "sell_device"
    },
    {
      name: "Macbook"
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
              ? "lg:flex lg:gap-4 lg:justify-evenly lg:w-1/2 lg:mx-auto py-4 lg:py-10 grid grid-cols-4 "
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
        ? render(item1)
        : model == deviceModels[1].name
        ? render(item2)
        : model == deviceModels[2].name
        ? render(item3)
        : model == deviceModels[3].name
        ? render(item4)
        : model == deviceModels[4].name
        ? render(item5)
        : model == deviceModels[5].name
        ? render(item6)
        : render(deviceModels, true)}

      <Footer />
    </div>
  )
}
