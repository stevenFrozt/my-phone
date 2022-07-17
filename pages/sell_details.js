import Link from "next/link"
import React from "react"
import Footer from "../components/Footer"
import GradientButton from "../components/GradientButton"
import Navbar from "../components/Navbar"

export default function sell_details() {
  return (
    <div>
      <Navbar />
      <main className="lg:flex lg:items-center lg:flex-row-reverse lg:justify-around">
        <div className="flex flex-col items-center py-4 lg:scale-150 lg:mt-40 lg:self-start">
          <img
            src="images/sell_smart/IPHONE XS MAX.png"
            alt=""
            className="h-[150px]"
          />
          <h1 className="mt-4">YOUR DEVICE VALUE</h1>
          <h1>$1,020.00</h1>
        </div>

        {/* Details */}
        <div className="px-2">
          <h1 className="lg:pt-20 lg:text-[2rem] lg:font-bold">
            Iphone 13 PRO MAX
          </h1>
          <div className="pt-4">
            <h3 className="py-2">CONDITION</h3>
            <div className="grid-cols-3 grid gap-y-4 gap-x-2 lg:gap-x-4">
              <GradientButton text="Brand New" />
              <GradientButton text="Excellent" />
              <GradientButton text="Good" />
              <GradientButton text="Fair" />
              <GradientButton text="Dead" />
            </div>
          </div>
          <div className="pt-4">
            <h3 className="py-2">CARRIER</h3>
            <div className="grid-cols-3 grid gap-y-4 gap-x-2 lg:gap-x-4">
              <GradientButton text="UNLOCKED" />
              <GradientButton text="LOCKED" />
            </div>
          </div>
          <div className="pt-4">
            <h3 className="py-2">STORAGE</h3>
            <div className="grid-cols-3 grid gap-y-4 gap-x-2 lg:gap-x-4">
              <GradientButton text="128GB" />
              <GradientButton text="256GB" />
              <GradientButton text="512GB" />
              <GradientButton text="1TB" />
            </div>
          </div>
          <div className="pt-4">
            <h3 className="py-2">PHONE STATUS</h3>
            <div className="grid-cols-3 grid gap-y-4 gap-x-2 lg:gap-x-4">
              <GradientButton text="NO LOCKS" />
              <GradientButton text="FINANCED" />
              <GradientButton text="BLACKLISTED/BLOCKED" />
              <GradientButton text="ACTIVATION LOCK" />
            </div>
          </div>
          <div className="pt-4">
            <h3 className="py-2">ARE THERE ANY CRACKS/CHIPS ON THE BACK?</h3>
            <div className="grid-cols-3 grid gap-y-4 gap-x-2 lg:gap-x-4">
              <GradientButton text="YES" />
              <GradientButton text="NO" />
            </div>
          </div>
          <div className="pt-4">
            <h3 className="py-2">ANY CRACKS/CHIPS ON FRONT SCREEN?</h3>
            <div className="grid-cols-3 grid gap-y-4 gap-x-2 lg:gap-x-4">
              <GradientButton text="YES" />
              <GradientButton text="NO" />
            </div>
          </div>
          <div className="pt-4">
            <h3 className="py-2">IS YOUR ICLOUD TURNED OFF?</h3>
            <div className="grid-cols-3 grid gap-y-4 gap-x-2 lg:gap-x-4">
              <GradientButton text="YES" />
              <GradientButton text="NO" />
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
