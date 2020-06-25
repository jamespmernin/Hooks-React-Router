import React from 'react'
import currencies from "./currencies.json"

import { Link } from "react-router-dom"

export default function Currencies() {
  return (
    <div>
      {currencies.map(currency => <h2><Link to={`/price/${currency.currency}`}>{currency.currency}</Link>: {currency.country}</h2>)}
    </div>
  )
}
