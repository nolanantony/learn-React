import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0); 
  const addValue = () => {
    if(counter >= 20) {
      setCounter(counter)
    } else {
      setCounter(counter + 1)
    }
  }
  const redValue = () => {
    if(counter <= 0){
      setCounter(counter)
    } else {
      setCounter(counter - 1)
    }
  }
  return (
    <>
    <h1>Chai aur {counter}</h1>
    <button onClick={addValue}>Increase</button>
    <button onClick={redValue}>Decrease</button>
    </>
    
  )
} 

export default App
