import Link from "next/link"
import React, { useState } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

export default function Cart() {
  const [active, setActive] = useState("sell")
  const [active2, setActive2] = useState("all")
  const activeNav = "border-b-2 border-blue-500 cursor-pointer py-2 text-center"
  const unActiveNav = "text-gray-400 cursor-pointer py-2 text-center"
  return (
    <div className="dark:bg-gray-900">
      <Navbar />
      <main>
        <div>
          <nav className="flex gap-8 justify-center p-4">
            <p
              className={active == "sell" ? activeNav : unActiveNav}
              onClick={() => setActive("sell")}
            >
              Sell Smart
            </p>
            <p
              className={active == "buy" ? activeNav : unActiveNav}
              onClick={() => setActive("buy")}
            >
              Buy Smart
            </p>
            <p
              className={active == "repair" ? activeNav : unActiveNav}
              onClick={() => setActive("repair")}
            >
              Repair Smart
            </p>
          </nav>
        </div>
        <div>
          <nav className="flex gap-8 justify-center p-4 text-sm">
            <p
              className={active2 == "all" ? activeNav : unActiveNav}
              onClick={() => setActive2("all")}
            >
              all orders
            </p>
            <p
              className={active2 == "pending" ? activeNav : unActiveNav}
              onClick={() => setActive2("pending")}
            >
              pending orders
            </p>
            <p
              className={active2 == "completed" ? activeNav : unActiveNav}
              onClick={() => setActive2("completed")}
            >
              completed orders
            </p>
          </nav>
        </div>

        {/* content */}

        {/* SELL SMART */}
        {/* all order */}
        {active == "sell" && active2 == "all" ? (
          <>
            <section className="mt-8 px-4 lg:hidden">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h1>order id</h1> <h1>31.02014,.2330</h1>
                </div>
                <div className="flex justify-between items-center">
                  <h1>order date</h1> <h1>Mar 31, 2022 15:47:30</h1>
                </div>
                <div className="flex justify-between items-center">
                  <h1>delivery way</h1>{" "}
                  <img
                    src="images/sell_smart/checkout/640px-United_Pa.png"
                    alt=""
                    className="h-8"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <h1>order value</h1> <h1>$677.96(1)</h1>
                </div>
                <div className="flex justify-between items-center">
                  <h1>order status</h1> <h1>Order Placed</h1>
                </div>
                <div className="flex justify-between items-center">
                  <h1>operation</h1>
                  <Link href="order_details">
                    <a>
                      <button className="bg-red-500 px-8 py-2 text-white cursor-pointer rounded">
                        details
                      </button>
                    </a>
                  </Link>
                </div>
              </div>
            </section>

            {/* DESKTOP */}
            <section className="hidden lg:flex justify-center mx-4">
              <div className="border px-10 pb-10 rounded-lg">
                <table className="text-center">
                  <thead>
                    <tr>
                      <td className="py-10 w-40">order date</td>
                      <td className="py-10 w-40">order id</td>
                      <td className="py-10 w-40">delivery way</td>
                      <td className="py-10 w-40">order value</td>
                      <td className="py-10 w-40">order status</td>
                      <td className="py-10 w-40">operation</td>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <tr>
                      <td>31.02014,.2330</td>
                      <td>Mar 31, 2022 15:47:30</td>
                      <td className="flex justify-center">
                        <img
                          src="images/sell_smart/checkout/640px-United_Pa.png"
                          alt=""
                          className="h-8"
                        />
                      </td>
                      <td>$677.96(1)</td>
                      <td>Order Placed</td>
                      <td>
                        <Link href="order_details">
                          <button className="bg-red-500 px-8 py-2 text-white cursor-pointer rounded">
                            details
                          </button>
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </>
        ) : (
          ""
        )}

        {/* SELL pending order */}
        {active == "sell" && active2 == "pending" ? (
          <>
            <section className="mt-8 px-4 lg:hidden">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h1>order id</h1> <h1>31.12aFaFGSd</h1>
                </div>
                <div className="flex justify-between items-center">
                  <h1>order date</h1> <h1>Apr 22, 2022 12:27:10</h1>
                </div>
                <div className="flex justify-between items-center">
                  <h1>delivery way</h1>{" "}
                  <img
                    src="images/sell_smart/checkout/fedex.png"
                    alt=""
                    className="h-8"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <h1>order value</h1> <h1>$677.96(1)</h1>
                </div>
                <div className="flex justify-between items-center">
                  <h1>order status</h1> <h1>Order Placed</h1>
                </div>
                <div className="flex justify-between items-center">
                  <h1>operation</h1>
                  <button className="bg-red-500 px-8 py-2 text-white cursor-pointer rounded">
                    details
                  </button>
                </div>
              </div>
            </section>

            {/* DESKTOP */}
            <section className="hidden lg:flex justify-center mx-4">
              <div className="border px-10 pb-10 rounded-lg">
                <table className="text-center">
                  <thead>
                    <tr>
                      <td className="py-10 w-40">order date</td>
                      <td className="py-10 w-40">order id</td>
                      <td className="py-10 w-40">delivery way</td>
                      <td className="py-10 w-40">order value</td>
                      <td className="py-10 w-40">order status</td>
                      <td className="py-10 w-40">operation</td>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <tr>
                      <td>31.02014,.2330</td>
                      <td>Mar 31, 2022 15:47:30</td>
                      <td className="flex justify-center">
                        <img
                          src="images/sell_smart/checkout/640px-United_Pa.png"
                          alt=""
                          className="h-8"
                        />
                      </td>
                      <td>$677.96(1)</td>
                      <td>Order Placed</td>
                      <td>
                        <button className="bg-red-500 px-8 py-2 text-white cursor-pointer rounded">
                          details
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </>
        ) : (
          ""
        )}

        {/* SELL Completed order */}
        {active == "sell" && active2 == "completed" ? (
          <>
            <section className="mt-8 px-4">
              {/* <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h1>order id</h1> <h1>31.12aFaFGSd</h1>
                </div>
                <div className="flex justify-between items-center">
                  <h1>order date</h1> <h1>Apr 22, 2022 12:27:10</h1>
                </div>
                <div className="flex justify-between items-center">
                  <h1>delivery way</h1>{" "}
                  <img
                    src="images/sell_smart/checkout/fedex.png"
                    alt=""
                    className="h-8"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <h1>order value</h1> <h1>$677.96(1)</h1>
                </div>
                <div className="flex justify-between items-center">
                  <h1>order status</h1> <h1>Order Placed</h1>
                </div>
                <div className="flex justify-between items-center">
                  <h1>operation</h1>
                  <button className="bg-red-500 px-8 py-2 text-white cursor-pointer rounded">
                    details
                  </button>
                </div>
              </div> */}

              {/* !no order */}
              <div className="text-center space-y-4">
                <div className="flex justify-center py-2">
                  <img src="images/sell_smart/noData.png" alt="" />
                </div>
                <h1>Sorry, you have no order data on this page!</h1>
                <p>
                  You can sell a wide range of devices for more cash, including
                  many types of cell phones, tablets, laptop, and so on.
                </p>
              </div>
            </section>
          </>
        ) : (
          ""
        )}

        {/* Buy SMART */}
        {/* all order */}
        {active == "buy" && active2 == "all" ? (
          <>
            <section className="mt-8 px-4 lg:hidden">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h1>order id</h1> <h1>31.02014,.2330</h1>
                </div>
                <div className="flex justify-between items-center">
                  <h1>order date</h1> <h1>Mar 31, 2022 15:47:30</h1>
                </div>
                <div className="flex justify-between items-center">
                  <h1>delivery way</h1>{" "}
                  <img
                    src="images/sell_smart/checkout/640px-United_Pa.png"
                    alt=""
                    className="h-8"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <h1>order value</h1> <h1>$677.96(1)</h1>
                </div>
                <div className="flex justify-between items-center">
                  <h1>order status</h1> <h1>Order Placed</h1>
                </div>
                <div className="flex justify-between items-center">
                  <h1>operation</h1>
                  <button className="bg-red-500 px-8 py-2 text-white cursor-pointer rounded">
                    details
                  </button>
                </div>
              </div>
            </section>

            {/* DESKTOP */}
            <section className="hidden lg:flex justify-center mx-4">
              <div className="border px-10 pb-10 rounded-lg">
                <table className="text-center">
                  <thead>
                    <tr>
                      <td className="py-10 w-40">order date</td>
                      <td className="py-10 w-40">order id</td>
                      <td className="py-10 w-40">delivery way</td>
                      <td className="py-10 w-40">order value</td>
                      <td className="py-10 w-40">order status</td>
                      <td className="py-10 w-40">operation</td>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <tr>
                      <td>31.02014,.2330</td>
                      <td>Mar 31, 2022 15:47:30</td>
                      <td className="flex justify-center">
                        <img
                          src="images/sell_smart/checkout/640px-United_Pa.png"
                          alt=""
                          className="h-8"
                        />
                      </td>
                      <td>$677.96(1)</td>
                      <td>Order Placed</td>
                      <td>
                        <button className="bg-red-500 px-8 py-2 text-white cursor-pointer rounded">
                          details
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </>
        ) : (
          ""
        )}

        {/* BUY pending order */}
        {active == "buy" && active2 == "pending" ? (
          <>
            <section className="mt-8 px-4 lg:hidden">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h1>order id</h1> <h1>31.12aFaFGSd</h1>
                </div>
                <div className="flex justify-between items-center">
                  <h1>order date</h1> <h1>Apr 22, 2022 12:27:10</h1>
                </div>
                <div className="flex justify-between items-center">
                  <h1>delivery way</h1>{" "}
                  <img
                    src="images/sell_smart/checkout/fedex.png"
                    alt=""
                    className="h-8"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <h1>order value</h1> <h1>$677.96(1)</h1>
                </div>
                <div className="flex justify-between items-center">
                  <h1>order status</h1> <h1>Order Placed</h1>
                </div>
                <div className="flex justify-between items-center">
                  <h1>operation</h1>
                  <button className="bg-red-500 px-8 py-2 text-white cursor-pointer rounded">
                    details
                  </button>
                </div>
              </div>
            </section>

            {/* DESKTOP */}
            <section className="hidden lg:flex justify-center mx-4">
              <div className="border px-10 pb-10 rounded-lg">
                <table className="text-center">
                  <thead>
                    <tr>
                      <td className="py-10 w-40">order date</td>
                      <td className="py-10 w-40">order id</td>
                      <td className="py-10 w-40">delivery way</td>
                      <td className="py-10 w-40">order value</td>
                      <td className="py-10 w-40">order status</td>
                      <td className="py-10 w-40">operation</td>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <tr>
                      <td>31.02014,.2330</td>
                      <td>Mar 31, 2022 15:47:30</td>
                      <td className="flex justify-center">
                        <img
                          src="images/sell_smart/checkout/640px-United_Pa.png"
                          alt=""
                          className="h-8"
                        />
                      </td>
                      <td>$677.96(1)</td>
                      <td>Order Placed</td>
                      <td>
                        <button className="bg-red-500 px-8 py-2 text-white cursor-pointer rounded">
                          details
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </>
        ) : (
          ""
        )}

        {/* BUY Completed order */}
        {active == "buy" && active2 == "completed" ? (
          <>
            <section className="mt-8 px-4">
              {/* <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h1>order id</h1> <h1>31.12aFaFGSd</h1>
                </div>
                <div className="flex justify-between items-center">
                  <h1>order date</h1> <h1>Apr 22, 2022 12:27:10</h1>
                </div>
                <div className="flex justify-between items-center">
                  <h1>delivery way</h1>{" "}
                  <img
                    src="images/sell_smart/checkout/fedex.png"
                    alt=""
                    className="h-8"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <h1>order value</h1> <h1>$677.96(1)</h1>
                </div>
                <div className="flex justify-between items-center">
                  <h1>order status</h1> <h1>Order Placed</h1>
                </div>
                <div className="flex justify-between items-center">
                  <h1>operation</h1>
                  <button className="bg-red-500 px-8 py-2 text-white cursor-pointer rounded">
                    details
                  </button>
                </div>
              </div> */}

              {/* !no order */}
              <div className="text-center space-y-4">
                <div className="flex justify-center py-2">
                  <img src="images/sell_smart/noData.png" alt="" />
                </div>
                <h1>Sorry, you have no order data on this page!</h1>
                <p>
                  You can sell a wide range of devices for more cash, including
                  many types of cell phones, tablets, laptop, and so on.
                </p>
              </div>
            </section>
          </>
        ) : (
          ""
        )}

        {/* REPAIR SMART */}
        {/* all order */}
        {active == "repair" && active2 == "all" ? (
          <>
            <section className="mt-8 px-4 lg:hidden">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h1>order id</h1> <h1>31.02014,.2330</h1>
                </div>
                <div className="flex justify-between items-center">
                  <h1>order date</h1> <h1>Mar 31, 2022 15:47:30</h1>
                </div>
                <div className="flex justify-between items-center">
                  <h1>delivery way</h1>{" "}
                  <img
                    src="images/sell_smart/checkout/640px-United_Pa.png"
                    alt=""
                    className="h-8"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <h1>order value</h1> <h1>$677.96(1)</h1>
                </div>
                <div className="flex justify-between items-center">
                  <h1>order status</h1> <h1>Order Placed</h1>
                </div>
                <div className="flex justify-between items-center">
                  <h1>operation</h1>
                  <button className="bg-red-500 px-8 py-2 text-white cursor-pointer rounded">
                    details
                  </button>
                </div>
              </div>
            </section>

            {/* DESKTOP */}
            <section className="hidden lg:flex justify-center mx-4">
              <div className="border px-10 pb-10 rounded-lg">
                <table className="text-center">
                  <thead>
                    <tr>
                      <td className="py-10 w-40">order date</td>
                      <td className="py-10 w-40">order id</td>
                      <td className="py-10 w-40">delivery way</td>
                      <td className="py-10 w-40">order value</td>
                      <td className="py-10 w-40">order status</td>
                      <td className="py-10 w-40">operation</td>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <tr>
                      <td>31.02014,.2330</td>
                      <td>Mar 31, 2022 15:47:30</td>
                      <td className="flex justify-center">
                        <img
                          src="images/sell_smart/checkout/640px-United_Pa.png"
                          alt=""
                          className="h-8"
                        />
                      </td>
                      <td>$677.96(1)</td>
                      <td>Order Placed</td>
                      <td>
                        <button className="bg-red-500 px-8 py-2 text-white cursor-pointer rounded">
                          details
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </>
        ) : (
          ""
        )}

        {/* Repair pending order */}
        {active == "repair" && active2 == "pending" ? (
          <>
            <section className="mt-8 px-4 lg:hidden">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h1>order id</h1> <h1>31.12aFaFGSd</h1>
                </div>
                <div className="flex justify-between items-center">
                  <h1>order date</h1> <h1>Apr 22, 2022 12:27:10</h1>
                </div>
                <div className="flex justify-between items-center">
                  <h1>delivery way</h1>{" "}
                  <img
                    src="images/sell_smart/checkout/fedex.png"
                    alt=""
                    className="h-8"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <h1>order value</h1> <h1>$677.96(1)</h1>
                </div>
                <div className="flex justify-between items-center">
                  <h1>order status</h1> <h1>Order Placed</h1>
                </div>
                <div className="flex justify-between items-center">
                  <h1>operation</h1>
                  <button className="bg-red-500 px-8 py-2 text-white cursor-pointer rounded">
                    details
                  </button>
                </div>
              </div>
            </section>

            {/* DESKTOP */}
            <section className="hidden lg:flex justify-center mx-4">
              <div className="border px-10 pb-10 rounded-lg">
                <table className="text-center">
                  <thead>
                    <tr>
                      <td className="py-10 w-40">order date</td>
                      <td className="py-10 w-40">order id</td>
                      <td className="py-10 w-40">delivery way</td>
                      <td className="py-10 w-40">order value</td>
                      <td className="py-10 w-40">order status</td>
                      <td className="py-10 w-40">operation</td>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <tr>
                      <td>31.02014,.2330</td>
                      <td>Mar 31, 2022 15:47:30</td>
                      <td className="flex justify-center">
                        <img
                          src="images/sell_smart/checkout/640px-United_Pa.png"
                          alt=""
                          className="h-8"
                        />
                      </td>
                      <td>$677.96(1)</td>
                      <td>Order Placed</td>
                      <td>
                        <button className="bg-red-500 px-8 py-2 text-white cursor-pointer rounded">
                          details
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </>
        ) : (
          ""
        )}

        {/* Repair Completed order */}
        {active == "repair" && active2 == "completed" ? (
          <>
            <section className="mt-8 px-4">
              {/* <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h1>order id</h1> <h1>31.12aFaFGSd</h1>
                </div>
                <div className="flex justify-between items-center">
                  <h1>order date</h1> <h1>Apr 22, 2022 12:27:10</h1>
                </div>
                <div className="flex justify-between items-center">
                  <h1>delivery way</h1>{" "}
                  <img
                    src="images/sell_smart/checkout/fedex.png"
                    alt=""
                    className="h-8"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <h1>order value</h1> <h1>$677.96(1)</h1>
                </div>
                <div className="flex justify-between items-center">
                  <h1>order status</h1> <h1>Order Placed</h1>
                </div>
                <div className="flex justify-between items-center">
                  <h1>operation</h1>
                  <button className="bg-red-500 px-8 py-2 text-white cursor-pointer rounded">
                    details
                  </button>
                </div>
              </div> */}

              {/* !no order */}
              <div className="text-center space-y-4">
                <div className="flex justify-center py-2">
                  <img src="images/sell_smart/noData.png" alt="" />
                </div>
                <h1>Sorry, you have no order data on this page!</h1>
                <p>
                  You can sell a wide range of devices for more cash, including
                  many types of cell phones, tablets, laptop, and so on.
                </p>
              </div>
            </section>
          </>
        ) : (
          ""
        )}
      </main>
      <Footer />
    </div>
  )
}
