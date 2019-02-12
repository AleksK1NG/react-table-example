import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Loader from './components/Loader/Loader'
import Table from './components/Table/Table'
import _ from 'lodash'
import DetailRowView from './components/DetailRowView/DetailRowView'
import ModeSelector from './components/ModeSelector/ModeSelector'
import ReactPaginate from 'react-paginate'
import TableSearch from './components/TableSearch/TableSearch'


const App = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [sort, setSort] = useState('asc')  // asc || desc
  const [sortField, setSortField] = useState('id')
  const [row, setRow] = useState(null)
  const [mode, setMode] = useState(false)
  const [pageSize, setpageSize] = useState(10)
  const [pageCount, setPageCount] = useState(20)
  const [currentPage, setCurrentPage] = useState(0)
  const [search, setSearch] = useState('')

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
    setRow(item)
  }

  const onLoad = (url) => {
    setMode(true)
    setLoading(true)
    fetchData(url)
  }

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected)
  }

  const getFilteredData = () => {
    if (!search) return data
    return data.filter(item => {
      return item.firstName.toLowerCase().includes(search.toLowerCase())
        || item.lastName.toLowerCase().includes(search.toLowerCase())
        || item.email.toLowerCase().includes(search.toLowerCase())
    })
  }

  const handleSearch = (searchValue) => {
    setSearch(searchValue)
    setCurrentPage(0)
  }


  const filteredData = getFilteredData()
  // const displayData = _.chunk(data, pageSize)[currentPage]
  const displayData = _.chunk(filteredData, pageSize)[currentPage]


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

      {loading
        ? <Loader/>
        : <React.Fragment>
          <TableSearch onSearch={handleSearch}/>
          <Table onSelect={onSelect} sort={sort} sortField={sortField} onSort={onSort} data={displayData}/>
        </React.Fragment>}

      {data && data.length > pageSize &&
      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        nextClassName="page-item"
        previousLinkClassName="page-link"
        nextLinkClassName="page-link"
        forcePage={currentPage}
      />}
      {row && <DetailRowView row={row}/>}
    </div>
  )
}

export default App
