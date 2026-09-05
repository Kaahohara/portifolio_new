import DarkModeToggle from './components/darkmodetoggle'
import { useState } from 'react'
import './App.css'
import Home from './pages/home'
import Navbar from './components/navbar'
import Projects from './pages/projects'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Footer from './components/footer'

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
]);

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-["#232323"] flex flex-col items-center justify-center mt-10'>
        <div className='lg:w-[1000px] w-full'>
          <Navbar />
          <DarkModeToggle />
          <RouterProvider router={router} />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App