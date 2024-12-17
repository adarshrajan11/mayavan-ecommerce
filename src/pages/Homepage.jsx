import React from 'react'
import Navbar from '../components/Navbar'
import BannerCarousel from '../components/BannerCarousel'
import FeaturedCarousel from '../components/FeaturedCarousel'
import GardenCategories from '../components/GardenCategories'
import Footer from '../components/Footer'
import Gallery from '../components/Gallery'
const Homepage = () => {
  return (
    <div>
           <Navbar />
      <BannerCarousel />
      <GardenCategories/>
          <FeaturedCarousel />
          <Gallery/>
      <Footer/>
    </div>
  )
}

export default Homepage
