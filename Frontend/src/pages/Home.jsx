import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Banner from '../components/Home/Banner'
import ItemsList from '../components/Home/ItemsList'
import NewArrivals from '../components/Home/NewArrivals'
import Banner2 from '../components/Home/Banner2'
import MostPopular from '../components/Home/MostPopular'
import AboutUs from '../components/Home/AboutUs'
import CustomerReviews from '../components/Home/CustomerReviews'
import GetInTouch from '../components/Home/GetInTouch'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <ItemsList/>
      <NewArrivals/>
      <Banner2/>
      <MostPopular/>
      <AboutUs/>
      <CustomerReviews/>
      <GetInTouch/>
      <Footer/>
      
    </div>
  )
}

export default Home
