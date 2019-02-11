import React from 'react'

const Table = ({ data, onSort }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th onClick={() => onSort('id')}>ID</th>
          <th onClick={() => onSort('firstName')}>First Name</th>
          <th onClick={() => onSort('lastName')}>Last NAme</th>
          <th onClick={() => onSort('email')}>Email</th>
          <th onClick={() => onSort('phone')}>Phone</th>
        </tr>
      </thead>
      <tbody>
        {data && data.map(item => (
          <tr key={item.id + item.phone}>
            <td>{item.id}</td>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
