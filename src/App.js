import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'


const fetchData = async () => {
  try {
    const { data } = await axios.get(`http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`)
    return data
  } catch (e) {
    console.error(e)
  }
}


const App = () => {
  const [data, setData] = useState([])


  useEffect(() => {
    fetchData().then(res => {
      setData(res)
      console.log(res)
    }).catch(err => {
      console.error(err)
    })
  }, [])


  return (
    <div className="container">
      app
    </div>
  )
}

export default App





