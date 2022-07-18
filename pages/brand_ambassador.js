import React from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

export default function brand_ambassador() {
  return (
    <div className="dark:bg-gray-900">
      <Navbar />
      <main className="px-4 lg:border lg:p-10 lg:mx-20 lg:my-20">
        <h1 className="font-bold">Brand Ambassador</h1>
        <div className="lg:space-y-2 lg:my-5">
          <p>
            Invite Your Friends To Make Their Transaction On My Phone With Your
            Referral Link.
          </p>
          <p>
            1. Invite Friends To Register And Complete my phone Transaction To
            Get $10 Cash Rewards.
          </p>
          <p>
            2. If You Have Invited 2 Or More Users, You Can Upgrad To Brand
            Ambassador And Will Be Eligible To Earn More Money.
          </p>
          <p>
            3. When You Become A Brand Ambassador, We&apos;ll Give You An Extra $10
            Reward.
          </p>
        </div>

        <div className="rounded bg-blue-500 py-8 px-2 lg:px-10 text-white">
          <div className="flex justify-between text-[.6rem] lg:text-lg py-2">
            <h1>Your progress: 0%</h1>
            <h1>Your progress: 50%</h1>
            <h1>Your progress: 100%</h1>
          </div>
          {/*MOBILE progress bar 20% , 55% , 100% */}
          {/*MOBILE progress bar 17.5%% , 51.5% , 100% */}
          <div className="z-0 bg-white w-full h-5 rounded-xl overflow-hidden flex justify-around relative  before:absolute before:content-[''] before:bg-gray-400 before:w-[20%] lg:before:w-[17.5%] before:h-5 before:-left-2 before:z-0 ">
            <div className="h-full w-5 rounded-full bg-gray-600 z-10"></div>
            <div className="h-full w-5 rounded-full bg-gray-600 z-10"></div>
            <div></div>
            <div className="h-full w-5 rounded-full bg-gray-600 z-10 absolute right-0"></div>
          </div>
          <div className="flex justify-between text-[.6rem] py-2">
            <h1>Registered successfully</h1>
            <h1>Invite 1 Friends</h1>
            <h1>Invite 2 Friends</h1>
          </div>

          <div className="flex items-center text-[.7rem] gap-2 my-4">
            <input type="checkbox" name="" id="" />
            <p> I agree to our Terms & Condition of Brand Ambassador.</p>
          </div>

          <div>
            <button className="text-black px-4 py-2 bg-white rounded my-2">
              become a brand ambassador
            </button>
          </div>
          <p>
            The $10 reward is only applicable when you become a brand ambassador
            for the first time. Subsequent exits and re-entries will not have
            this bonus.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
