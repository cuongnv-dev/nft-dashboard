import React from "react"
import { Button } from "./Button"

export const Banner = () => {
  return (
    <div className="w-full rounded-[15px] bg-gradient-to-r from-primary to-indigo-300 px-[30px] py-[49px] text-white">
      <p className="text-4xl font-semibold">Create and Sell Extraordinary NFTs</p>
      <p className="mt-[14px] font-medium text-text-purple">
        The world’s first and largest digital marketplace for crypto NFTs
      </p>
      <div className="mt-8 flex flex-row gap-5">
        <Button title="Explore More" variant="secondary" />
        <Button title="Sell Artwork" variant="outline" />
      </div>
    </div>
  )
}
