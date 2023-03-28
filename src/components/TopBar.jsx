import React from "react"

import { SearchBox } from "./SearchBox"
import { BellAlertIcon, ChevronDownIcon } from "@heroicons/react/24/outline"
import { UserAvatar } from "./UserAvatar"
import ethereum from "../assets/imgs/ethereum.png"

export const TopBar = () => {
  return (
    <div className="border-sec flex w-full flex-row border-b p-9">
      <div className="w-1/2">
        <SearchBox placeholder="Search items, collections, and users" />
      </div>
      <div className="ml-auto flex flex-row items-center">
        <button className="border-secondary-text mr-[30px] flex flex-row rounded-xl border px-4 py-[14px]">
          <img src={ethereum} className="mr-2 h-6 w-6" alt="ethereum icon" />
          <p className="font-semibold">3,421 ETH</p>
        </button>
        <button className="border-secondary-text mr-[30px] flex h-[52px] w-[52px] items-center justify-center rounded-full border">
          <BellAlertIcon className="h-6 w-6" />
        </button>
        <button className="flex flex-row items-center">
          <UserAvatar width="w-[52px]" height="h-[52px]" />
          <ChevronDownIcon className="ml-3 h-6 w-6" />
        </button>
      </div>
    </div>
  )
}
