import React, { useState } from 'react'

const TableSearch = ({ onSearch }) => {
  const [value, setValue] = useState('')

  return (
    <div className="input-group mb-3 mt-3">
      <div className="input-group-prepend">
        <button
          className="btn btn-outline-secondary"
          onClick={() => onSearch(value)}
        >
          Search
        </button>
      </div>
      <input
        type="text"
        className="form-control"
        onChange={event => setValue(event.target.value)}
        value={value}
      />
    </div>
  )
}

export default TableSearch
