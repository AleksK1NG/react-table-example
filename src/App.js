import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Loader from './components/Loader/Loader'


const App = () => {
  const [data, setData] = useState([])

  const fetchData = async () => {
    try {
      const { data } = await axios.get(`http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`)
      setData(data)
    } catch (e) {
      console.error(e)
    }
  }


  useEffect(() => {
    fetchData()
  }, [])


  return (
    <div className="container">
      <h1>React</h1>
      <Loader/>
    </div>
  )
}

export default App





