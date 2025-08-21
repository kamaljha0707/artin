import { useState } from 'react'
import './App.css'
import HeroSection from './components/HeroSection'
import CardSection from './components/CardSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='w-full h-full'>
    <HeroSection/>
    <CardSection/>
    </div>
    </>
  )
}

export default App
