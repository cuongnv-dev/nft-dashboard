import React from "react"

import ethereum from "../assets/imgs/ethereum.png"

export const AssetValue = props => {
  return (
    <div className="flex flex-row items-center">
      <img src={ethereum} alt="ETH icon" className="h-4 w-4" />
      <p className="ml-1 font-medium">
        {props.value} {props.showCurrency ? "ETH" : ""}
      </p>
    </div>
  )
}
