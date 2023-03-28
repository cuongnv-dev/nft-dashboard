import React from "react"
import { AssetValue } from "./AssetValue"

export const CollectionTableRow = props => {
  const { image, name, user, volume, profit, floorPrice, owners, quantity } = props
  return (
    <tr
      className={`${
        props.isLastRow ? "border-b-0" : "border-b"
      } border-secondary-text`}
    >
      <td className="flex flex-row items-center py-5">
        <img alt={name} src={image} className="h-[42px] w-[42px] rounded-full" />
        <div className="ml-2 justify-evenly">
          <p className="font-semibold tracking-wide">{name}</p>
          <p className="mt-1 text-xs font-medium text-second-text">By {user}</p>
        </div>
      </td>
      <td>
        <AssetValue value={volume} />
      </td>
      <td
        className={`${profit > 0 ? "text-green-500" : "text-red-500"} font-medium`}
      >
        {profit}%
      </td>
      <td>
        <AssetValue value={floorPrice} />
      </td>
      <td className="font-medium">{owners}</td>
      <td className="font-medium">{quantity}</td>
    </tr>
  )
}
