import React from 'react'
import Navbar from '../components/Navbar'
import FavoriteComponent from '../components/Favorite/FavoriteComponent'
import Footer from '../components/Footer'

const FavoritePage = () => {
  return (
    <div>
        <Navbar/>
        <FavoriteComponent/>
        <Footer/>
    </div>
  )
}

export default FavoritePage
