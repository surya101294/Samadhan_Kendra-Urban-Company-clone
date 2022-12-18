import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Delhi from '../Pages/Delhi'
import HairSkin from '../Pages/HairSkin'
// import Payment from '../Pages/Payment'
import AddtoCartpage from '../Pages/AddtoCartpage'
import Productdetails from '../Pages/Productdetails'
import Payment from '../Pages/Payment'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/delhi" element={<Delhi />} />
        <Route path="/hair-skin" element={<HairSkin />} />
        <Route path="/payment" element={<Payment />} />
        {/* <Route path="/payment/:id" element={<Payment />} /> */}
        <Route path="/product/:id" element={<Productdetails />} />
        <Route path="/addToCard" element={<AddtoCartpage />} />
        <Route path="*" element={<h1>Error 404 , No page Found</h1>} />
        {/* <Route path="/" element={<Home/>}></Route> */}
      </Routes>
    </div>
  )
}
export default AllRoutes