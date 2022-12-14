import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'


const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="*" element={<h1>Error 404 , No page Found</h1>}></Route>
        {/* <Route path="/" element={<Home/>}></Route> */}
      </Routes>
    </div>
  )
}

export default AllRoutes
