import React from "react"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"

export const SearchBox = props => {
  return (
    <div className="relative">
      <button className="absolute top-[15px] left-4  ">
        <MagnifyingGlassIcon className=" h-6 w-6 text-second-text" />
      </button>
      <input
        className={`w-full rounded-2xl bg-secondary-bg py-[14px] pl-12 pr-4`}
        placeholder={props.placeholder}
      />
    </div>
  )
}
