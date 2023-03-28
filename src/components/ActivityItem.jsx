import React from "react"
import { AssetValue } from "./AssetValue"

export const ActivityItem = props => {
  const { image, name, user, volume, isLastItem } = props
  return (
    <div
      className={`flex flex-row items-center py-5 ${
        isLastItem ? "border-b-0" : "border-b"
      }`}
    >
      <img alt={name} src={image} className="h-[42px] w-[42px] rounded-full" />
      <div className="ml-2 flex-1 justify-evenly">
        <p className="font-semibold tracking-wide">{name}</p>
        <p className="mt-1 text-xs font-medium text-second-text">By {user}</p>
      </div>
      <AssetValue value={volume} />
    </div>
  )
}
