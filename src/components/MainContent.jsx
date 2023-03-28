import React from "react"
import { Banner } from "./Banner"
import { SectionHeader } from "./SectionHeader"
import { AuctionCard } from "./AuctionCard"
import { CollectionTable } from "./CollectionTable"

const auctions = [
  {
    image: "https://picsum.photos/id/15/222/144",
    name: "The Unfortable Facer",
    user: "Bane Riccardo",
    currentBid: 18.99,
  },
  {
    image: "https://picsum.photos/id/20/222/144",
    name: "Mad Ballot Holder",
    user: "Angelina Cruzz",
    currentBid: 4.32,
  },
  {
    image: "https://picsum.photos/id/26/222/144",
    name: "Pile of Many Plates",
    user: "Ralphi Arness",
    currentBid: 190.5,
  },
]

const collections = [
  {
    image: "https://picsum.photos/id/57/222/144",
    name: "Doodle Lucu",
    user: "Doodles",
    volume: 14.32,
    profit: 20.4,
    floorPrice: 15.6,
    owners: 200,
    quantity: 18,
  },
  {
    image: "https://picsum.photos/id/58/222/144",
    name: "Kimawi Genesis",
    user: "Kimawi - Japan",
    volume: 6.11,
    profit: -13.4,
    floorPrice: 4.2,
    owners: 1024,
    quantity: 921,
  },
]

export const MainContent = () => {
  return (
    <div className=" border-secondary-text h-full w-full p-[34px]">
      <Banner />
      <SectionHeader title="Trending Auction" fontSize="text-2xl" />
      <div className="grid grid-cols-3 gap-5">
        {auctions.map((item, index) => (
          <AuctionCard item={item} key={index} />
        ))}
      </div>

      <SectionHeader title="Top Collection" fontSize="text-2xl" />
      <CollectionTable data={collections} />
    </div>
  )
}
