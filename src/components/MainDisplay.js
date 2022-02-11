import React from 'react'
import '../components/MainDisplay.css'
import List from './ListComp/ListComp'
import ScreenComp from './screenComp/ScreenComp'
import useFetch from '../fetch/useFetch'

const MainDisplay = (disData) => {
  // const { data } = useFetch('https://assessment-edvora.herokuapp.com/')
  // if (loading) return <h1>Loading....</h1>

  // if (error) console.log(error)

  return (
    <div className="mainDisplay">
      <div className="listdisplay">
        <List listData={disData}></List>
      </div>
      <div className="screendisplay">
        <ScreenComp mydata={disData}></ScreenComp>
      </div>
    </div>
  )
}

export default MainDisplay
