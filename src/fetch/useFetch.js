import { useState, useEffect } from 'react'
import axios from 'axios'

function useFetch(url) {
  const [data, setData] = useState([])

  const getData = async () => {
    axios.get(url).then((response) => setData(response.data))
  }
  useEffect(() => {
    // setLoading(true)
    getData()
  }, [url])

  return data
}

export default useFetch
