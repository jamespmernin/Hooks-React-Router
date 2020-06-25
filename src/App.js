import React from 'react'
import { Link, Route } from "react-router-dom"

import Home from "./Home"
import Currencies from "./Currencies"
import Price from "./Price"

export default function App() {
  return (
    <>
      <nav>
        <Link to="/">Bitcoin Prices</Link>
        <Link to="/currencies">Currencies</Link>
      </nav>
      <main>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/currencies">
          <Currencies/>
        </Route>
        <Route path="/price/:currency">
          <Price />
        </Route>
      </main>
    </>
  )
}
