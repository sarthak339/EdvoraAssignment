import React from 'react'

import './App.css'
import MainDisplay from './components/MainDisplay'
import useFetch from './fetch/useFetch'

function App() {
  const data = useFetch('https://assessment-edvora.herokuapp.com/')

  return (
    <div className="App">
      <MainDisplay disData={data} />
    </div>
  )
}

export default App
