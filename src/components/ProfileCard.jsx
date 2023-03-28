import React from "react"
import profileBanner from "../assets/imgs/profile-banner.png"

export const ProfileCard = () => {
  return (
    <div className="rounded-xl bg-white p-[6px] shadow-md">
      <img src={profileBanner} alt="Profile banner" className="h-[140px] w-full" />
      <div className="flex items-center justify-center ">
        <img
          src={profileBanner}
          alt="Profile banner"
          className="-mt-[28px] h-[52px] w-[52px] rounded-full border-4 border-white"
        />
      </div>

      <div className="px-2 py-4">
        <div className="flex flex-row items-center justify-between border-b border-zinc-100 pb-3">
          <div>
            <p className="text-sm font-semibold">Murakami Flowers</p>
            <p className="mt-1 text-xs font-medium text-second-text">@mftmkkus</p>
          </div>
          <button className="rounded-full bg-primary py-[6px] px-3 text-xs text-white">
            Follow
          </button>
        </div>
        <p className="mt-3  text-xs text-second-text">
          Murakami.Flowers is a work in which artist Takashi Murakami’s
          representative artwork, flowers, are expressed as dot art evocative of
          Japanese TV games created in the 1970s.
        </p>
      </div>
    </div>
  )
}
