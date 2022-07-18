import Link from "next/link"
import React from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import ServiceCards from "../components/ServiceCards"

export default function Home() {
  return (
    <>
      <Navbar />

      {/* MOBILE */}
      <main className="pt-8 px-4 lg:hidden dark:bg-gray-900">
        {/* title and description */}
        <div className="pb-6">
          <h1 className="font-bold">Sell, Buy or Repair a device</h1>
          <p className="text-xs">
            Sell, Buy or Repair iphones, tablets , ipods and more
          </p>
        </div>
        {/* landing pic and button */}
        <div className="flex justify-around md:justify-center px-4">
          <button className="bg-red-500 text-white h-7 p-2 flex items-center rounded mt-4">
            let&apos;s go
          </button>
          <img
            src="images/sell_smart/landing.png"
            alt=""
            className="h-28 md:h-36"
          />
        </div>

        {/* services cards */}
        <div className="py-2 md:my-8">
          <h1 className="p-4 font-bold">Choose your Service</h1>
          <div className="grid grid-cols-1 md:gird-cols-2 gap-2">
            <ServiceCards
              description="SELL A DEVICE"
              image="images/sell_smart/trading.png"
              path="sell_device"
            />
            <ServiceCards
              description="BUY A DEVICE"
              image="images/sell_smart/add_cart.png"
              path="buy_device"
            />
            <ServiceCards
              description="REPAIR A DEVICE"
              image="images/sell_smart/repair.png"
              path="Sell_Device"
            />
            <ServiceCards
              description="Test A DEVICE"
              image="images/sell_smart/repair.png"
              path="Sell_Device"
            />
            {/* <div className="bg-red-500">test</div>
            <div className="bg-red-500">test</div>
            <div className="bg-red-500">test</div>
            <div className="bg-red-500">test</div> */}
          </div>
          <img
            src="images/sell_smart/group_device.png"
            alt=""
            className="w-full md:w-[300px] md:mx-auto mt-8 mb-2"
          />
        </div>
      </main>

      {/* DESKTOP */}

      <main className="px-20 hidden lg:block dark:bg-gray-900">
        <div className="bg-my_bg_image mt-8 p-6 bg-cover bg-no-repeat">
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-start space-y-4">
              <h1 className="font-bold text-[4rem]">sell your Device</h1>
              <p>
                we make it convenient to get the most for your old tech, test
                your device from home before selling it to know what it&apos;s
                worth
              </p>
              <Link href="sell_device">
                <button className="cursor-pointer bg-red-500 text-white text-lg px-8 py-2 rounded-full">
                  Sell Now
                </button>
              </Link>
            </div>
            <img
              src="images/sell_smart/CompositeLayer.png"
              alt=""
              className="h-[400px]"
            />
          </div>
          <div className="grid grid-cols-2 ">
            <div className="flex ">
              {/* buy your device */}

              <div className="space-y-4">
                <h1 className="font-bold text-[3rem]">buy your device </h1>
                <p>
                  all our gently used devices are certified and undergo a 90
                  point inspection test and are PhoneCheck certified!
                </p>
                <Link href="buy_device">
                  <button className="cursor-pointer bg-red-500 text-white text-lg px-8 py-2 rounded-full">
                    Buy Now
                  </button>
                </Link>
              </div>
              <img
                src="images/sell_smart/ipods.png"
                alt=""
                className="h-[300px]"
              />
            </div>

            <div className="pl-36 relative ">
              <div className="space-y-4 z-10">
                <h1 className="font-bold text-[3rem]">Repair your device </h1>
                <p>
                  all our gently used devices are certified and undergo a 90
                  point inspection test and are PhoneCheck certified!
                </p>
                <button className="cursor-pointer bg-red-500 text-white text-lg px-8 py-2 rounded-full">
                  Buy Now
                </button>
              </div>
              <img
                src="images/sell_smart/brokenLaptop.png"
                alt=""
                className="h-[200px] absolute right-0 -bottom-10 z-0"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
