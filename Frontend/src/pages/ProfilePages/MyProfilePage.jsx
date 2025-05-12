import React from 'react'
import MyProfileComponent from '../../components/Profile/MyProfileComponent'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const MyProfilePage = () => {
  return (
    <div>
      <Navbar/>
      <MyProfileComponent/>
      <Footer/>
    </div>
  )
}

export default MyProfilePage
