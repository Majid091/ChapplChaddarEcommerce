import React from 'react'
import Navbar from '../../components/Navbar'
import OrderDetailComponent from '../../components/Order/OrderDetailsComponent'
import Footer from '../../components/Footer'

const OrderDetailPage = () => {
  return (
    <div>
      <Navbar/>
      <OrderDetailComponent/>
      <Footer/>
    </div>
  )
}

export default OrderDetailPage
