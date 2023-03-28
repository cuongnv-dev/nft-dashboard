import React from "react"
import { HelpCenter } from "./HelpCenter"
import { SidebarMenuSection } from "./SidebarMenuSection"
import { UserAvatar } from "./UserAvatar"

const sidebarMenus = [
  {
    id: 1,
    label: "General",
    menus: [
      {
        icon: "chart",
        title: "Dashboard",
      },
      {
        icon: "chat",
        title: "Message",
      },
      {
        icon: "cog",
        title: "Settings",
      },
    ],
  },
  {
    id: 2,
    label: "Marketplace",
    menus: [
      {
        icon: "market",
        title: "Market",
      },
      {
        icon: "bid",
        title: "Active Bid",
      },
      {
        icon: "saved",
        title: "Saved",
      },
    ],
  },
  {
    id: 3,
    label: "My Profile",
    menus: [
      {
        icon: "collection",
        title: "Collection",
      },
      {
        icon: "wallet",
        title: "Wallet",
      },
      {
        icon: "history",
        title: "History",
      },
      {
        icon: "history",
        title: "History 2",
      },
    ],
  },
]

export const LeftSidebar = () => {
  return (
    <div className="flex h-full w-1/5 flex-col bg-secondary-bg px-5 py-8">
      <div className="flex flex-row px-3 align-middle">
        <UserAvatar width="w-14" height="h-14" />
        <div className="ml-3">
          <p className="text-lg font-semibold">Kevin Cranel</p>
          <p className="text-sm text-second-text">@kecrane</p>
        </div>
      </div>
      <div className="mt-12 mb-12">
        {sidebarMenus.map(section => (
          <SidebarMenuSection key={section.id} item={section} />
        ))}
      </div>
      <HelpCenter />
    </div>
  )
}
