import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Loader from './components/Loader/Loader'
import Table from './components/Table/Table'
import _ from 'lodash'
import DetailRowView from './components/DetailRowView/DetailRowView'
import ModeSelector from './components/ModeSelector/ModeSelector'


const App = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [sort, setSort] = useState('asc')  // asc || desc
  const [sortField, setSortField] = useState('id')
  const [row, setRow] = useState(null)
  const [mode, setMode] = useState(false)


  const fetchData = async (url) => {
    setLoading(true)
    try {
      const { data } = await axios.get(url)
      const newData = _.orderBy(data, sortField, sort)
      setLoading(false)
      setData(newData)
    } catch (e) {
      setLoading(false)
      console.error(e)
    }
  }


  useEffect(() => {
    fetchData()
  }, [])

  const onSort = (sortField) => {
    const sortedData = [...data]
    const sortType = sort === 'asc' ? 'desc' : 'asc'
    const orderedData = _.orderBy(sortedData, sortField, sortType)
    setData(orderedData)
    setSort(sortType)
    setSortField(sortField)
  }

  const onSelect = (item) => {
    console.log('select', item)
    setRow(item)
  }

  const onLoad = (url) => {
    setMode(true)
    setLoading(true)

    fetchData(url)
  }


  if (!mode) {
    return (
      <div className="container">
        <ModeSelector onLoad={onLoad}/>
      </div>
    )
  }

  return (
    <div className="container">
      <h1>React</h1>
      {loading ? <Loader/> : <Table onSelect={onSelect} sort={sort} sortField={sortField} onSort={onSort} data={data}/>}
      {row && <DetailRowView row={row}/>}
    </div>
  )
}

export default App





