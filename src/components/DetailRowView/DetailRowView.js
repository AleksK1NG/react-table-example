import React from 'react'

const DetailRowView = ({ row }) => {
  return (
    <div>
      <h2>DetailRowView</h2>
      {row && JSON.stringify(row, null, 2)}
    </div>
  )
}

export default DetailRowView
