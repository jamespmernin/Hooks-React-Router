import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"

import axios from "axios"

export default function Price() {
  let [price, setPrice] = useState(0)
  const params = useParams()
  
  const apiCall = async () => {
    const data = await axios(`https://api.coindesk.com/v1/bpi/currentprice/${params.currency}.json`)
    setPrice(data.data.bpi[params.currency].rate_float);
  }

  useEffect(() => {
    apiCall()
  }, [])

  return (
    <div>
      <h2>{params.currency}</h2>
      <h2>{price}</h2>
    </div>
  )
}
