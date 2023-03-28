import React from "react"
import { Button } from "./Button"

export const HelpCenter = () => {
  return (
    <div className="bg-p  mt-auto flex  flex-col items-center rounded-[15px] bg-primary p-3 text-white">
      <div className="-mt-10 h-[50px] w-[50px] rounded-full bg-white p-4">
        <div className="flex h-full w-full items-center justify-center rounded-full bg-primary">
          <p>?</p>
        </div>
      </div>
      <p className="text-lg font-semibold">Help Center</p>
      <p className="mt-3 text-center text-sm text-text-purple">
        Having trouble in benefit? Please contact us for more question
      </p>

      <Button title="Go To Help Center" outsideStyles="mt-7" variant="secondary" />
    </div>
  )
}
