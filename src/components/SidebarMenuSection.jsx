import React from "react"
import {
  ChartBarIcon,
  ChatBubbleLeftEllipsisIcon,
  Cog6ToothIcon,
  BuildingStorefrontIcon,
  CurrencyDollarIcon,
  HeartIcon,
  Squares2X2Icon,
  WalletIcon,
  ClockIcon,
} from "@heroicons/react/24/outline"

export const SidebarMenuSection = props => {
  const item = props.item

  const getMenuIcon = icon => {
    switch (icon) {
      case "chart":
        return <ChartBarIcon className="h-6 w-6" />
      case "chat":
        return <ChatBubbleLeftEllipsisIcon className="h-6 w-6" />
      case "cog":
        return <Cog6ToothIcon className="h-6 w-6" />
      case "market":
        return <BuildingStorefrontIcon className="h-6 w-6" />
      case "bid":
        return <CurrencyDollarIcon className="h-6 w-6" />
      case "saved":
        return <HeartIcon className="h-6 w-6" />
      case "collection":
        return <Squares2X2Icon className="h-6 w-6" />
      case "wallet":
        return <WalletIcon className="h-6 w-6" />
      case "history":
        return <ClockIcon className="h-6 w-6" />
      default:
        return null
    }
  }

  const renderMenuButton = (menu, index) => {
    return (
      <button
        key={index}
        className="group flex w-full flex-row items-center rounded-lg py-[10px] px-4 text-second-text hover:bg-primary hover:bg-opacity-10 hover:text-primary"
      >
        {getMenuIcon(menu.icon)}
        <p className="ml-4 text-lg ">{menu.title}</p>
      </button>
    )
  }

  return (
    <div className="mt-[30px]">
      <p className="mb-3">{item.label}</p>
      {item.menus.map((menu, index) => renderMenuButton(menu, index))}
    </div>
  )
}
