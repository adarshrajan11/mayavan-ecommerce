import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import BannerCarousel from './components/BannerCarousel'
import FeaturedCarousel from './components/FeaturedCarousel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <BannerCarousel />
      <FeaturedCarousel/>
    </>
  )
}

export default App
