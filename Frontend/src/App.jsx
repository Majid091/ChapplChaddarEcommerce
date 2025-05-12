import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import ProductDetailsPage from './pages/ProductDetailsPage'
import FavoritePage from './pages/FavoritePage'
import NewArrivalPage from './pages/NewArrivalPage'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import ProfilePage from './pages/ProfilePages/ProfilePage'
import MyProfilePage from './pages/ProfilePages/MyProfilePage'
import EditProfilePage from './pages/ProfilePages/EditProfilePage'
import Setting1Page from './pages/ProfilePages/Setting1Page'
import Setting2Page from './pages/ProfilePages/Setting2Page'
import ChangePasswordPage from './pages/ProfilePages/ChangePasswordPage'
import ForgotPasswordPage from './pages/ProfilePages/ForgotPasswordPage'
import VerificationPage from './pages/ProfilePages/VerificationPage'
import NewPasswordPage from './pages/ProfilePages/NewPasswordPage'
import OrderPage from './pages/OrderPages/OrderPage'
import OrderReviewPage from './pages/OrderPages/OrderReviewPage'
import OrderDetailPage from './pages/OrderPages/OrderDetailPage'
import Registration from './pages/Registration'
import Login from './pages/Login'
import UploadProductPage from './pages/UploadProductPage'

function App() {

  return (
    <Router>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/registration' element={<Registration/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/product' element={<Products/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/product/:id' element={<ProductDetailsPage/>}/>
            <Route path='/favorite-products' element={<FavoritePage/>}/>
            <Route path='/new-arrival' element={<NewArrivalPage/>}/>
            <Route path='/cart' element={<CartPage/>}/>
            <Route path='/checkout' element={<CheckoutPage/>}/>
            <Route path='/profile' element={<ProfilePage/>}/>
            <Route path='/my-profile' element={<MyProfilePage/>}/>            
            <Route path='/edit-profile' element={<EditProfilePage/>}/>
            <Route path='/profile-setting1' element={<Setting1Page/>}/>
            <Route path='/profile-setting2' element={<Setting2Page/>}/>
            <Route path='/change-password' element={<ChangePasswordPage/>}/>
            <Route path='/forgot-password' element={<ForgotPasswordPage/>}/>
            <Route path='/verification' element={<VerificationPage/>}/>
            <Route path='/new-password' element={<NewPasswordPage/>}/>
            <Route path='/order' element={<OrderPage/>}/>
            <Route path='/order-review' element={<OrderReviewPage/>}/>
            <Route path='/order-detail' element={<OrderDetailPage/>}/>
            <Route path='/upload-product' element={<UploadProductPage/>}/>
          </Routes>
    </Router>
  )
}
export default App