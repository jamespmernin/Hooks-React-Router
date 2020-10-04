import React from "react";

import Home from "./Home";

export default function App() {
  return (
    <>
      <nav>
        <a to="/">Bitcoin Prices</a>
        <a to="/currencies">Currencies</a>
      </nav>
      <main>
        <Home />
      </main>
    </>
  );
}
