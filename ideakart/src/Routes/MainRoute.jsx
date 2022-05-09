import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import NewProduct from '../pages/NewProduct'
import Products from '../pages/Products'
import Credits from '../pages/Credits'
const MainRoute = () => {
  return (
<Routes>
    <Route path="/dashboard/home" element={<Home/>}/>
    <Route path="/dashboard/newproduct" element ={<NewProduct/>}/>
    <Route path="/dashboard/products" element={<Products/>}/>
    <Route path="/dashboard/credits" element={<Credits/>}/>
</Routes>
  )
}

export default MainRoute