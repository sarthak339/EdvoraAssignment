import React, { useState } from 'react'
import axios from 'axios'

import './FilterList.css'

const FilterList = (props) => {
  const listData = props.filterData.disData

  const [Pstate, setPstate] = useState([])
  const [pcity, setPcity] = useState([])
  // const [myData, setmyData] = useState([])

  // select unique product
  const product = listData.map((opt) => {
    return opt.brand_name
  })
  const uniproduct = new Set(product)

  //select unique state

  const proState = (e) => {
    const PPstate = []

    let getProState = e.target.value
    listData.forEach((op) => {
      PPstate.push({
        product: getProState,
        state: op.address.state,
      })
    })

    const state = PPstate.map((st) => {
      return st.state
    })

    const uniState = new Set(state)
    const uniqueState = [...uniState]
    setPstate(uniqueState)
  }

  // return state name ;

  const pstateChange = (e) => {
    const addresss = []
    let getStateName = e.target.value

    listData.forEach((op) => {
      if (op.address.state === getStateName) addresss.push(op.address)
    })

    const uniaddress = new Set(addresss)

    setPcity([...uniaddress])

    // address.map((opt) => console.log(opt.city))
  }

  // const getmyData = (e) => {
  //   // const geetingcityData = []
  //   let gettingCity = e.target.value

  //   listData
  //     .filter((op) => op.address.city === gettingCity)
  //     .forEach((el) => console.log(el))
  // }

  // console.log(pstateChange())
  // select unique city

  // const getStateName = pstateChange() ;

  return (
    <div className="fitler-list__display">
      <div className="filter-lists">
        <select className="filter-list" onChange={proState}>
          <option>Product</option>
          {[...uniproduct].map((opt, i) => (
            <option value={opt} key={i}>
              {opt}
            </option>
          ))}
        </select>
      </div>
      <div className="filter-lists">
        <select onChange={pstateChange} className="filter-list">
          <option>State</option>
          {Pstate?.map((opt, i) => (
            <option value={opt} key={i}>
              {opt}
            </option>
          ))}
        </select>
      </div>
      <div className="filter-lists">
        <select className="filter-list">
          <option>City</option>
          {pcity.map((opt, i) => (
            <option value={opt.city} key={i}>
              {opt.city}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
export default FilterList
