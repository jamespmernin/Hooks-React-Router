import React, { useState } from 'react';
import './App.css';

function App() {
  let [count, updateCount] = useState(0)
  
  return (
    <>
      <button onClick={() => updateCount(count + 1)}>+</button>
      <span>{count}</span>
      <button onClick={() => updateCount(count - 1)}>-</button>
    </>
  );
}

export default App;
