import React from 'react'
import Navbar from '../../components/Navbar'
import MyProfileComponent from '../../components/Profile/ProfileSetting1Component'
import ProfileSetting1Component from '../../components/Profile/ProfileSetting1Component'
import Footer from '../../components/Footer'

const Setting1Page = () => {
  return (
    <div>
      <Navbar/>
      <ProfileSetting1Component/>
      <Footer/>
    </div>
  )
}

export default Setting1Page
