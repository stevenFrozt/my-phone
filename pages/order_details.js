import React from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { HiOutlineClipboardList } from "react-icons/hi"
import { BsTruck, BsBoxSeam } from "react-icons/bs"
import { TbLoader } from "react-icons/tb"
import { AiOutlineCheckCircle } from "react-icons/ai"

export default function order_details() {
  return (
    <div>
      <Navbar />
      <main className="lg:py-4 lg:px-4 ">
        <div className="space-y-4 lg:px-20 lg:py-10 lg:border lg:mx-60 mx-5 my-4">
          <h1 className="text-lg">My Orders</h1>
          <p>Order Details</p>
          <div className="bg-red-200 text-sm space-y-2 rounded">
            <h1>Sales Order / 310.0001035403205</h1>
            <h1>Order Submited on Mar 31, 2022 15:47</h1>
          </div>

          <div className="my-4">
            <h1 className="my-2 font-medium">Order Status: Order Placed</h1>
            <p className="text-sm text-gray-500">
              You Have Made A Successful Reservation, Please Wait For The
              Express Delivery.
            </p>
          </div>
          {/* status of shipping */}
          <div className="lg:py-10">
            <div className="flex items-center space-x-5">
              <div className="after:left-1/2 flex flex-col items-center w-full after:content-[''] after:w-full after:h-1 after:bg-gray-600 relative after:absolute after:top-5 after:z-0">
                <div className="h-10 w-10 rounded-full bg-red-500 text-white flex items-center justify-center z-10">
                  <HiOutlineClipboardList />
                </div>
              </div>
              <div className="after:left-1/2 flex flex-col items-center w-full justify-center after:content-[''] after:w-full after:h-1 after:bg-gray-600 relative after:absolute after:top-5 after:z-0">
                <div className="h-10 w-10 rounded-full bg-gray-400 text-white flex items-center justify-center z-10 ">
                  <BsTruck />
                </div>
              </div>
              <div className="after:left-1/2 flex flex-col items-center w-full after:content-[''] after:w-full after:h-1 after:bg-gray-600 relative after:absolute after:top-5 after:z-0">
                <div className="h-10 w-10 rounded-full bg-gray-400 text-white flex items-center justify-center z-10">
                  <BsBoxSeam />
                </div>
              </div>
              <div className="after:left-1/2 flex flex-col items-center w-full after:content-[''] after:w-full after:h-1 after:bg-gray-600 relative after:absolute after:top-5 after:z-0">
                <div className="h-10 w-10 rounded-full bg-gray-400 text-white flex items-center justify-center z-10 ">
                  <TbLoader />
                </div>
              </div>
              <div className="after:left-1/2 flex flex-col items-center w-full after:content-[''] after:w-full after:hidden after:h-1 after:bg-gray-600 relative after:absolute after:top-5 after:z-0">
                <div className="h-10 w-10 rounded-full bg-gray-400 text-white flex items-center justify-center z-10 ">
                  <AiOutlineCheckCircle />
                </div>
              </div>
            </div>
            <div className="flex  lg:py-4">
              <p className="text-[.7rem] px-1 text-center w-full">
                Order Placed
              </p>
              <p className="text-[.7rem] px-1 text-center w-full">
                Package sent
              </p>
              <p className="text-[.7rem] px-1 text-center w-full">
                Package Received
              </p>
              <p className="text-[.7rem] px-1 text-center w-full">Processing</p>
              <p className="text-[.7rem] px-1 text-center w-full">Completed</p>
            </div>
          </div>

          <div>
            <h1 className="my-2 font-medium">Shipping Carrier: UPS</h1>
            <div className="space-y-2 text-sm">
              <h3>Track Number: UPS</h3>
              <h3>
                Logistics Information : Mar 31, 2022 16:47 Shipper created a
                label, UPS has not received the package yet.
              </h3>
            </div>
          </div>

          <div className="space-y-2 text-sm">
            <h1>Payment Selection : Paypal</h1>
            <h3>Payment method selected: Paypal</h3>
            <div className="flex justify-between">
              <h3>Payment Delivery Account:</h3>
              <h3>Hishamhosam20@Gmail.Com</h3>
            </div>
          </div>

          <div>
            <h1 className="py-2 font-medium">My Device</h1>
            <div className="overflow-auto border-b pb-4 mb-4">
              <table className="table-auto lg:w-full">
                <thead className="bg-gray-200 text-[.6rem] lg:text-sm ">
                  <tr>
                    <td className="lg:p-2">product</td>
                    <td>itemID</td>
                    <td>item Status</td>
                    <td>Qoute</td>
                  </tr>
                </thead>
                <tbody className="text-[.6rem] lg:text-sm">
                  <tr className="">
                    <td className="text-[.6rem] lg:text-sm">
                      <img src="images/sell_smart/IPHONE XS MAX.png" alt="" />
                      <div className="space-y-1 lg:space-y-2">
                        <h1 className="font-medium">IPHONE 13 PRO MAX</h1>
                        <h3 className="text-gray-400">
                          condition:{" "}
                          <span className="text-black">Brand New</span>
                        </h3>
                        <h3 className="text-gray-400">
                          carrier: <span className="text-black">locked</span>
                        </h3>
                        <h3 className="text-gray-400">
                          storage: <span className="text-black">256GB</span>
                        </h3>
                        <h3 className="text-gray-400">
                          phone status:{" "}
                          <span className="text-black">financed</span>
                        </h3>
                        <div className="flex space-x-1 ">
                          <div className="bg-gray-200 text-gray-400 px-1 py-1 text-center rounded text-[.5rem] lg:text-sm">
                            unlocked
                          </div>
                          <div className="bg-gray-200 text-gray-400 px-1 py-1 text-center rounded text-[.5rem] lg:text-sm">
                            46GB
                          </div>
                          <div className="bg-gray-200 text-gray-400 px-1 py-1 text-center rounded text-[.5rem] lg:text-sm">
                            Like new
                          </div>
                        </div>
                        <div>
                          <h1 className="">
                            Is the Apple ID signed out ? Yes{" "}
                          </h1>
                        </div>
                      </div>
                    </td>
                    <td>A0135jAFHA135</td>
                    <td>Waiting for drop off</td>
                    <td>310.00$</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex justify-end lg:my-10">
              <div className="w-1/2 text-sm space-y-2">
                <div className="flex items-center justify-between">
                  <h1>Subtotal</h1>
                  <h1>31000$</h1>
                </div>
                <div className="flex items-center justify-between">
                  <h1>Shipping</h1>
                  <h1>0.5%</h1>
                </div>
                <hr />
                <div className="flex items-center justify-between">
                  <h1>total</h1>
                  <h1>3100$</h1>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-16">
              <button className="bg-red-500 text-white px-4 py-2 rounded">
                proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
