import Link from "next/link"
import React, { useState } from "react"
import Footer from "../components/Footer"
import GradientButton from "../components/GradientButton"
import Navbar from "../components/Navbar"

export default function Sell_details() {
  const [condition, setCondition] = useState()
  const [carrier, setCarrier] = useState()
  const [storage, setStorage] = useState()
  const [phone, setPhone] = useState()
  const [back, setBack] = useState()
  const [front, setFront] = useState()
  const [icloud, setIcloud] = useState()
  return (
    <div className="dark:bg-gray-900">
      <Navbar />
      <main className="lg:flex lg:items-center lg:flex-row-reverse lg:justify-evenly lg:w-[60%] lg:mx-auto ">
        <div className="flex flex-row-reverse items-center justify-center py-1  lg:mt-40 lg:self-start text-center lg:w-[80%] lg:flex-col z-0">
          <img
            src="images/sell_smart/IPHONE XS MAX.png"
            alt=""
            className="h-[100px] lg:h-[200px] hover:scale-105 transition-all duration-200 ease-in"
          />
          <div>
            <h1 className="mt-4">YOUR DEVICE VALUE</h1>
            <h1>$1,020.00</h1>
          </div>
          <h1 className="lg:pt-4 lg:text-[1rem] lg:font-bold">
            Iphone 13 PRO MAX
          </h1>
        </div>

        {/* Details */}
        <div className="px-2 w-full lg:pt-20 z-10">
          <div className="">
            <h3 className="text-sm py-1 lg:text-lg ">CONDITION</h3>
            <div className="grid-cols-3 grid gap-y-1 gap-x-2 lg:gap-x-1 lg:grid-cols-5 lg:py-1 lg:w-full">
              <GradientButton
                text="Brand New"
                setToggle={setCondition}
                toggle={condition}
              />
              <GradientButton
                text="Excellent"
                setToggle={setCondition}
                toggle={condition}
              />
              <GradientButton
                text="Good"
                setToggle={setCondition}
                toggle={condition}
              />
              <GradientButton
                text="Fair"
                setToggle={setCondition}
                toggle={condition}
              />
              <GradientButton
                text="Dead"
                setToggle={setCondition}
                toggle={condition}
              />
            </div>
          </div>
          <div className="">
            <h3 className="text-sm py-1 lg:text-lg">CARRIER</h3>
            <div className="grid-cols-3 grid gap-y-1 gap-x-2 lg:gap-x-1 lg:grid-cols-5 lg:py-1 lg:w-full">
              <GradientButton
                text="UNLOCKED"
                setToggle={setCarrier}
                toggle={carrier}
              />
              <GradientButton
                text="LOCKED"
                setToggle={setCarrier}
                toggle={carrier}
              />
            </div>
          </div>
          <div className="">
            <h3 className="text-sm py-1 lg:text-lg">STORAGE</h3>
            <div className="grid-cols-3 grid gap-y-1 gap-x-2 lg:gap-x-1 lg:grid-cols-5 lg:py-1 lg:w-full">
              <GradientButton
                text="128GB"
                setToggle={setStorage}
                toggle={storage}
              />
              <GradientButton
                text="256GB"
                setToggle={setStorage}
                toggle={storage}
              />
              <GradientButton
                text="512GB"
                setToggle={setStorage}
                toggle={storage}
              />
              <GradientButton
                text="1TB"
                setToggle={setStorage}
                toggle={storage}
              />
            </div>
          </div>
          <div className="">
            <h3 className="text-sm py-1 lg:text-lg">PHONE STATUS</h3>
            <div className="grid-cols-2 grid gap-y-1 gap-x-2 lg:gap-x-1 lg:grid-cols-3 lg:py-1 lg:w-full text-sm ">
              <GradientButton
                text="NO LOCKS"
                setToggle={setPhone}
                toggle={phone}
              />
              <GradientButton
                text="FINANCED"
                setToggle={setPhone}
                toggle={phone}
              />
              <GradientButton
                text="BLACKLISTED/BLOCKED"
                setToggle={setPhone}
                toggle={phone}
              />
              <GradientButton
                text="ACTIVATION LOCK"
                setToggle={setPhone}
                toggle={phone}
              />
            </div>
          </div>
          <div className="">
            <h3 className="text-sm py-1 lg:text-lg">
              ARE THERE ANY CRACKS/CHIPS ON THE BACK?
            </h3>
            <div className="grid-cols-3 grid gap-y-1 gap-x-2 lg:gap-x-1 lg:grid-cols-5 lg:py-1 lg:w-full">
              <GradientButton text="YES" setToggle={setBack} toggle={back} />
              <GradientButton text="NO" setToggle={setBack} toggle={back} />
            </div>
          </div>
          <div className="">
            <h3 className="text-sm py-1 lg:text-lg">
              ANY CRACKS/CHIPS ON FRONT SCREEN?
            </h3>
            <div className="grid-cols-3 grid gap-y-1 gap-x-2 lg:gap-x-1 lg:grid-cols-5 lg:py-1 lg:w-full">
              <GradientButton text="YES" setToggle={setFront} toggle={front} />
              <GradientButton text="NO" setToggle={setFront} toggle={front} />
            </div>
          </div>
          <div className="">
            <h3 className="text-sm py-1 lg:text-lg">
              IS YOUR ICLOUD TURNED OFF?
            </h3>
            <div className="grid-cols-3 grid gap-y-1 gap-x-2 lg:gap-x-1 lg:grid-cols-5 lg:py-1 lg:w-full">
              <GradientButton
                text="YES"
                setToggle={setIcloud}
                toggle={icloud}
              />
              <GradientButton text="NO" setToggle={setIcloud} toggle={icloud} />
            </div>
          </div>
          <div className="flex justify-center lg:justify-start py-8 mt-8">
            <Link href="sell_checkout">
              <button className="bg-red-500 px-8 py-2 rounded text-center text-lg text-white lg:text-[1.2rem] lg:px-20 lg:py-4 lg:my-10">
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
