import React from "react"
import avatar from "../assets/imgs/avatar.png"

export const UserAvatar = props => {
  return (
    <img
      className={`${props.width} ${props.height} cursor-pointer rounded`}
      src={avatar}
      alt="user-avatar"
    />
  )
}
