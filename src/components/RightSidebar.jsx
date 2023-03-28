import React from "react"
import { ProfileCard } from "./ProfileCard"
import { SectionHeader } from "./SectionHeader"
import { ActivityItem } from "./ActivityItem"

const activities = [
  {
    image: "https://picsum.photos/id/15/222/144",
    name: "Uzachi #4390",
    user: "Ragnarok Meta",
    volume: 2.15,
  },
  {
    image: "https://picsum.photos/id/16/222/144",
    name: "Doodles #3486",
    user: "Doodles",
    volume: 4.42,
  },
  {
    image: "https://picsum.photos/id/17/222/144",
    name: "Murakami #2766",
    user: "Murakami",
    volume: 1.08,
  },
  {
    image: "https://picsum.photos/id/18/222/144",
    name: "Doodles #2761",
    user: "Murakami",
    volume: 4.4,
  },
  {
    image: "https://picsum.photos/id/19/222/144",
    name: "Peachy Puch #22",
    user: "Mindblowonstudio",
    volume: 5.62,
  },
  {
    image: "https://picsum.photos/id/20/222/144",
    name: "Gemmy #3723",
    user: "GemmySolana",
    volume: 5.32,
  },
]

export const RightSidebar = () => {
  return (
    <div className="w-2/5 border-l px-6">
      <SectionHeader title="Feature Creators" />
      <ProfileCard />
      <SectionHeader title="Recent Activity" />
      {activities?.map((item, index) => (
        <ActivityItem
          {...item}
          key={`${item.name} - ${index}`}
          isLastItem={index === activities?.length - 1}
        />
      ))}
    </div>
  )
}
