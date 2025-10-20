import DarkModeToggle from './components/darkmodetoggle'
import { useState } from 'react'
import './App.css'
import Home from './pages/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-["#232323"] flex flex-col items-center justify-center mt-10'>
      <div className='w-[1000px]'>
        <DarkModeToggle />
        <Home />
      </div>
    </div>
    </>
  )
}

export default App
