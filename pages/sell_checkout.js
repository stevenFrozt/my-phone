import React, { useState } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

export default function Sell_checkout() {
  const [active, setActive] = useState("cart")
  const [quantity, setQuantiity] = useState(1)
  const [pay, setPay] = useState()
  const [ship, setShip] = useState()

  // STYLES CONDITIONAL RENDER
  const activeNav = "border-b-2 border-blue-500 cursor-pointer"
  const unActiveNav = "text-gray-400 cursor-pointer"
  const activeButton =
    "cursor-pointer hover:-translate-y-1 transition-all duration-150 border-b-red-500 border-b-2 "
  const unActiveButton =
    "cursor-pointer hover:-translate-y-1 transition-all duration-150"

  //==================

  return (
    <div className="dark:bg-gray-900">
      <Navbar />
      <main>
        <div className="lg:border lg:p-20 rounded-lg mx-8 lg:mx-20 lg:my-16 my-2">
          {/* nav */}
          <nav className="flex gap-8 justify-center p-4">
            <p
              className={active == "cart" ? activeNav : unActiveNav}
              onClick={() => setActive("cart")}
            >
              cart
            </p>
            <p
              className={active == "checkout" ? activeNav : unActiveNav}
              onClick={() => setActive("checkout")}
            >
              checkout
            </p>
            <p
              className={active == "confirmation" ? activeNav : unActiveNav}
              onClick={() => setActive("confirmation")}
            >
              confirmation
            </p>
          </nav>
          {/* cart */}
          {active == "cart" ? (
            <>
              <div className="flex justify-center text-sm px-2 ">
                <table className="my-4  w-full">
                  <thead className="text-center ">
                    <tr className="">
                      <td className="p-4 ">product</td>
                      <td>price</td>
                      <td>qty</td>
                      <td>total</td>
                    </tr>
                  </thead>
                  <tbody className="border-t border-b">
                    <tr className="border-b mb-4">
                      <td>
                        <div className="text-center lg:flex lg:flex-row-reverse justify-center py-4">
                          <div>
                            <h1>IPHONE 13 PRO MAX</h1>
                            <div className="hidden lg:block">
                              <h1 className="text-gray-500">
                                condition:
                                <span className="text-black pl-1 dark:text-red-500">
                                  Brand new
                                </span>
                              </h1>
                              <h1 className="text-gray-500">
                                Carrier:
                                <span className="text-black pl-1 dark:text-red-500">
                                  locked
                                </span>
                              </h1>
                              <h1 className="text-gray-500">
                                Storage:
                                <span className="text-black pl-1 dark:text-red-500">
                                  256GB
                                </span>
                              </h1>
                              <h1 className="text-gray-500">
                                Phone Status:
                                <span className="text-black pl-1 dark:text-red-500">
                                  Financed
                                </span>
                              </h1>
                            </div>
                          </div>
                          <img
                            src="images/sell_smart/IPHONE XS MAX.png"
                            alt=""
                          />
                        </div>
                      </td>
                      <td>$31.00</td>
                      <td className="text-center flex items-baseline justify-center pt-14 mx-2">
                        <button
                          className="bg-gray-500 px-4 rounded text-lg text-white "
                          onClick={() => setQuantiity((prev) => prev - 1)}
                        >
                          -
                        </button>
                        <h1 className="p-4">{quantity}</h1>
                        <button
                          className="bg-gray-500 px-4 rounded text-lg text-white "
                          onClick={() => setQuantiity((prev) => prev + 1)}
                        >
                          +
                        </button>
                      </td>
                      <td>$50.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex justify-end mr-4 lg:mt-8">
                <div className="w-40 lg:w-1/3 space-y-2">
                  <div className="flex justify-between">
                    <h1>Subtotal</h1>
                    <h1>$3100.00</h1>
                  </div>
                  <div className="flex justify-between">
                    <h1>Shipping</h1>
                    <h1>0.5%</h1>
                  </div>
                  <div className="border-t flex justify-between py-2">
                    <h1>Total</h1>
                    <h1>$3100.00</h1>
                  </div>
                </div>
              </div>
              {/* checkout BUtton */}
              <div className="flex justify-center mt-12 mb-4">
                <button
                  className="bg-red-500 px-8 py-2 rounded text-center text-sm text-white lg:text-[1.2rem] lg:px-20 lg:py-4 lg:my-10"
                  onClick={() => setActive("checkout")}
                >
                  Procced to checkout
                </button>
              </div>
            </>
          ) : (
            ""
          )}

          {/* checkout */}
          {active == "checkout" ? (
            <>
              <div className="lg:px-4 w-full mt-4">
                <div className="lg:flex lg:justify-evenly lg:pb-20">
                  <div>
                    <div>
                      <h1>How would you like to be paid?</h1>
                      <div className="flex space-x-2 py-2">
                        <div
                          className={
                            pay == "paypal" ? activeButton : unActiveButton
                          }
                          onClick={() => setPay("paypal")}
                        >
                          <img
                            src="images/sell_smart/checkout/paypal.png"
                            alt=""
                          />
                        </div>

                        <div
                          className={
                            pay == "visa" ? activeButton : unActiveButton
                          }
                          onClick={() => setPay("visa")}
                        >
                          <img
                            src="images/sell_smart/checkout/visa.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h1>How would you like to ship your Device?</h1>
                      <div className="flex space-x-2 py-2">
                        <div
                          className={
                            ship === "fedex" ? activeButton : unActiveButton
                          }
                        >
                          <img
                            src="images/sell_smart/checkout/fedex.png"
                            alt=""
                            className="cursor-pointer"
                            onClick={() => setShip("fedex")}
                          />
                        </div>
                        <div
                          className={
                            ship === "us_postalservice"
                              ? activeButton
                              : unActiveButton
                          }
                        >
                          <img
                            src="images/sell_smart/checkout/United-States-P.png "
                            className="cursor-pointer"
                            alt=""
                            onClick={() => setShip("us_postalservice")}
                          />
                        </div>
                        <div
                          className={
                            ship === "ups" ? activeButton : unActiveButton
                          }
                        >
                          <img
                            src="images/sell_smart/checkout/640px-United_Pa.png"
                            className="cursor-pointer"
                            alt=""
                            onClick={() => setShip("ups")}
                          />
                        </div>
                      </div>
                    </div>

                    <form>
                      <div className="my-8">
                        <label htmlFor="name">name</label>
                        <input
                          type="text"
                          placeholder="hishamhosam alkout"
                          className="border-b block w-full"
                        />
                      </div>
                      <div className="my-8">
                        <label htmlFor="name">
                          house nunmber & street name
                        </label>
                        <input
                          type="text"
                          placeholder="hishamhosam alkout"
                          className="border-b block w-full"
                        />
                      </div>
                      <div className="my-8">
                        <label htmlFor="name">Apartment, Suite</label>
                        <input
                          type="text"
                          placeholder="hishamhosam alkout"
                          className="border-b block w-full"
                        />
                      </div>
                      <div className="my-8">
                        <label htmlFor="name">town\City</label>
                        <input
                          type="text"
                          placeholder="hishamhosam alkout"
                          className="border-b block w-full"
                        />
                      </div>
                      <div className="my-8">
                        <label htmlFor="name">zip</label>
                        <input
                          type="text"
                          placeholder="hishamhosam alkout"
                          className="border-b block w-full"
                        />
                      </div>
                      <div className="my-8">
                        <label htmlFor="name">phone number</label>
                        <input
                          type="text"
                          placeholder="hishamhosam alkout"
                          className="border-b block w-full"
                        />
                      </div>
                      <div className="my-8">
                        <label htmlFor="name">email address</label>
                        <input
                          type="text"
                          placeholder="hishamhosam alkout"
                          className="border-b block w-full"
                        />
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          name="account"
                          id="account"
                          className="cursor-pointer"
                        />
                        <label
                          htmlFor="account"
                          className="flex items-center mb-1 ml-2 cursor-pointer"
                        >
                          create an account
                        </label>
                      </div>
                    </form>
                  </div>

                  {/* summary */}
                  <div className="border p-4 rounded-lg">
                    <div className="border-b py-2">
                      <h1 className="text-xl font-medium">order summary</h1>
                      <div>
                        <div className="flex justify-between">
                          <h1>price</h1>
                          <h1>300.00$</h1>
                        </div>
                        <div className="flex justify-between">
                          <h1>Shipping</h1>
                          <h1>free</h1>
                        </div>
                        <div className="flex justify-between">
                          <h1>tax</h1>
                          <h1>5.0%</h1>
                        </div>
                      </div>
                    </div>
                    {/*  */}
                    <div className="flex items-center justify-between p-4">
                      <img
                        src="images/sell_smart/IPHONE XS MAX.png"
                        alt=""
                        className="lg:h-[150px]"
                      />
                      <div>
                        <h1>IPHONE 13 PRO MAX</h1>
                        <div className="flex items-center justify-between py-4">
                          <div className="h-10 w-10 bg-blue-500 rounded-full"></div>{" "}
                          <p>blue</p>
                        </div>
                        <div className="flex items-center  justify-between">
                          <p>x1</p> <p>$3100.00</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            ""
          )}

          {/* confirmation */}
          {active == "confirmation" ? (
            <>
              <div className="mt-4 lg:px-60">
                <div className="px-4">
                  <h1>HIshamsom20@gmail.com</h1>
                  <p className="text-gray-400 text-sm">
                    All email about your order well be sent here
                  </p>
                  <hr className="my-4" />
                </div>
                <div className="px-4">
                  <h1>Payment details: cash card</h1>
                  <div className="flex justify-between">
                    <p className="text-gray-400 text-sm">
                      HIshamsom20@gmail.com
                    </p>
                    <p className="text-blue-500 text-sm">change</p>
                  </div>
                  <hr className="my-4" />
                </div>
                <div className="px-4">
                  <h1>Shipping details: United States</h1>
                  <p className="text-gray-400 text-sm">HIshamsom</p>

                  <div className="flex justify-between">
                    <p className="text-gray-400 text-sm">gaza trip</p>

                    <p className="text-blue-500 text-sm">change</p>
                  </div>
                  <hr className="my-4" />
                </div>
                <div className="px-4 w-1/2 ">
                  <div className="flex justify-between">
                    <p className="text-gray-400 text-sm">item Total</p>

                    <p className="text-red-500 text-sm">3100$</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-gray-400 text-sm">Shipping</p>

                    <p className="text-red-500 text-sm">0,.5%</p>
                  </div>
                  <hr className="my-4" />
                </div>
                <div className="flex items-center px-4">
                  <input
                    type="checkbox"
                    name="account"
                    id="account"
                    className="cursor-pointer"
                  />
                  <label
                    htmlFor="account"
                    className="flex items-center mb-1 ml-2 cursor-pointer"
                  >
                    Term and policy
                  </label>
                </div>
                <div className="flex justify-center py-10">
                  <button className="bg-red-500 px-8 py-2 rounded text-center text-sm text-white lg:text-[1.2rem] lg:px-20 lg:py-4 lg:my-10">
                    submit order
                  </button>
                </div>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
