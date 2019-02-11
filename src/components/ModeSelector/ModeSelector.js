import React from 'react'

const ModeSelector = ({ onLoad }) => {

  // Load 1000 items
  const bigUrl = `http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`

  // Load 32 items
  const smallUrl = `http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '50px 0' }}>
      <button onClick={() => onLoad(smallUrl)} className="btn btn-success">Load 32</button>
      <button onClick={() => onLoad(bigUrl)} className="btn btn-danger">Load 10000</button>
    </div>
  )
}


export default ModeSelector
