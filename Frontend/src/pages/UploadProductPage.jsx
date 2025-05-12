import React from 'react'
import Navbar from '../components/Navbar'
import UploadProductComponent from '../components/CreateProduct/UploadProductComponent'
import Footer from '../components/Footer'

const UploadProductPage = () => {
  return (
    <div>
      <Navbar/>
      <UploadProductComponent/>
      <Footer/>
    </div>
  )
}

export default UploadProductPage
