import React from "react"
import { CollectionTableRow } from "./CollectionTableRow"

export const CollectionTable = props => {
  return (
    <table className="w-full table-auto">
      <thead>
        <tr>
          <th className="text-left text-xs font-medium text-second-text">
            Collection
          </th>
          <th className="text-left text-xs font-medium text-second-text">Volume</th>
          <th className="text-left text-xs font-medium text-second-text">24h%</th>
          <th className="text-left text-xs font-medium text-second-text">
            Floor Price
          </th>
          <th className="text-left text-xs font-medium text-second-text">Owners</th>
          <th className="text-left text-xs font-medium text-second-text">Items</th>
        </tr>
      </thead>
      <tbody>
        {props?.data?.map((item, index) => (
          <CollectionTableRow
            {...item}
            key={`${item.name} - ${index}`}
            isLastRow={index === props.data.length - 1}
          />
        ))}
      </tbody>
    </table>
  )
}
