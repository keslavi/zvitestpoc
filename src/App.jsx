import { useState } from 'react'
import './App.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>hello</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p> 
          Edit <code>src/App.jsx</code> and save to test  HMR
        </p>
      </div>
    </>
  )
}

export default App
