import React, { useState, useEffect } from 'react'
import axios from "axios"

export default function App() {
  let [countries, updateCountries] = useState([])

  useEffect(() => {
    const callApi = async () => {
      const data = await axios("https://restcountries.eu/rest/v2/all")

      updateCountries(data.data)
    }

    callApi()
  }, [])

  
  return (
    <div>
      {countries.map(country => <h2 key={country.name}>
        {country.name}
      </h2>)}
    </div>
  )
}
