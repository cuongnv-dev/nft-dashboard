import { HeartIcon } from "@heroicons/react/24/outline"
import React from "react"
import { AssetValue } from "./AssetValue"

export const AuctionCard = props => {
  const { image, name, user, currentBid } = props.item

  return (
    <div className="rounded-2xl  bg-white p-[6px] shadow-sm">
      <div className="relative">
        <img alt={name} src={image} className="h-[140px] w-full rounded-xl" />
        <div className="absolute right-3 top-3 flex flex-row">
          <div className="flex items-center rounded-xl bg-gray-500 bg-opacity-50 py-[6px] px-[10px] text-xs font-medium text-white">
            <p> 2h 4m 32s</p>
          </div>
          <button className="ml-3 rounded-full bg-gray-500 bg-opacity-50 p-2">
            <HeartIcon className="h-[18px] w-[18px] text-white" />
          </button>
        </div>
      </div>
      <div className="py-5 px-3">
        <p className="font-semibold tracking-wide">{name}</p>
        <p className="mt-1 text-xs font-medium text-second-text">By {user}</p>
        <div className="mt-5 flex flex-row justify-between">
          <div>
            <p className="text-[10px] text-second-text">Current Bid</p>
            <AssetValue value={currentBid} showCurrency={true} />
          </div>
          <button className="shrink-0 rounded-lg bg-primary py-2 px-4 text-xs font-medium text-white">
            Place a Bid
          </button>
        </div>
      </div>
    </div>
  )
}
