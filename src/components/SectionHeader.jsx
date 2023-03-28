import React from "react"

export const SectionHeader = props => {
  const fontSize = props.fontSize || "text-lg"
  return (
    <div className="flex flex-row justify-between pb-5 pt-9">
      <p className={`${fontSize} font-semibold`}>{props.title}</p>
      <button className="font-medium text-primary">View All</button>
    </div>
  )
}
