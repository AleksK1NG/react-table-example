import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Loader from './components/Loader/Loader'
import Table from './components/Table/Table'


const App = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    setLoading(true)
    try {
      const { data } = await axios.get(`http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`)
      setLoading(false)
      setData(data)
    } catch (e) {
      setLoading(false)
      console.error(e)
    }
  }


  useEffect(() => {
    fetchData()
  }, [])


  return (
    <div className="container">
      <h1>React</h1>
      {loading ? <Loader/> : <Table data={data}/>}
    </div>
  )
}

export default App





