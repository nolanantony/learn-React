import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'
function App() {
  
  return (
    <>
     <h1 className='bg-red-500 text-black rounded-2xl p-4'>Tailwind works</h1> 
     <Card channel="Chai aur code" />
     <Card /> 
     <Card />
    </>
  )
}

export default App
