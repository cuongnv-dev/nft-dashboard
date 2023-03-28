import React from "react"

export const Button = props => {
  if (props.variant === "outline") {
    return (
      <div
        className={`{props.outsideStyles} rounded-lg border border-white px-5 py-3`}
      >
        <p className="font-semibold text-white">{props.title}</p>
      </div>
    )
  }

  if (props.variant === "secondary") {
    return (
      <div className={`rounded-lg bg-white px-5 py-3 ${props.outsideStyles}`}>
        <p className="font-semibold text-primary">{props.title}</p>
      </div>
    )
  }

  return (
    <div className={`rounded-lg bg-primary px-5 py-3 ${props.outsideStyles}`}>
      <p className="font-semibold text-white">{props.title}</p>
    </div>
  )
}
