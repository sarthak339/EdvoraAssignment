// import { useState, useEffect } from 'react'
import './ScreenComp.css'
import ScreenDisplay from './ScreenDisplay/ScreenDisplay'

const ScreenComp = (props) => {
  const allData = props.mydata.disData
  const productName = []
  allData.map((el) => {
    productName.push(el.product_name)
  })

  const uniqueProductName = new Set(productName)
  const getUniqueProductName = [...uniqueProductName]

  // console.log(uniqueBrandName)

  return (
    <div className="screen">
      <div className="screenHeading">
        <div className="heading">
          <p className="edvora">Edvora</p>
        </div>
        <div className="screenTitle">
          <p>Products</p>
        </div>
      </div>
      <div className="scrdiscomp">
        <ScreenDisplay
          myallData={props.mydata}
          uniqueData={getUniqueProductName}
        />
      </div>
    </div>
  )
}

export default ScreenComp
