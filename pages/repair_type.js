import React from 'react'
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Repair from '../components/Repair'
export default function repair_type() {

    const repair_type = [
        {
          name: "Screen damage",
          path: "screen_damage",
        },
        {
            name: "Battery Drains Fast ",
            path: "screen_damage",
        },
        {
            name: "Charging Issue",
            path: "screen_damage",
        },
        {
            name: "Rear Camera Issue",
            path: "screen_damage",
        },
        {
            name: "Front Camera Issue",
            path: "screen_damage",
        },
        {
            name: "Rear Camera Lens Damage",
            path: "screen_damage",
        },
        {
            name: "Glass Damage",
            path: "screen_damage",
        },
        {
            name: "Rear Camera Lens Damage",
            path: "screen_damage",
        },
        {
            name: "Water/Liquid Damage",
            path: "screen_damage",
        },
        {
            name: "Battery Drains Fast ",
            path: "screen_damage",
        },
        {
            name: "Battery Drains Fast ",
            path: "screen_damage",
        },
        {
            name: "Front Camera Issue",
            path: "screen_damage",
        },
        {
            name: "Front Camera Issue",
            path: "screen_damage",
        },
        {
            name: "Front Camera Issue",
            path: "screen_damage",
        },
        {
            name: "Front Camera Issue",
            path: "screen_damage",
        },
        {
            name: "Front Camera Issue",
            path: "screen_damage",
        },
    ]
  return (
    <>
        <Navbar/>
        <main className="xl:px-20">
            <div className="p-4 my-4 font-medium lg:text-xl lg:my-8">
                <h1 className='text-xl mb-6 text-center'>What's wrong with your smartphone </h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3">
                   {repair_type.map((item, index )=> (
                        <Repair
                            key={index}
                            name = {item.name}
                            path = {item.path}
                        />
                   ))}
                </div>
            </div>

            
        </main>
        <Footer />
    </>

  )
}
