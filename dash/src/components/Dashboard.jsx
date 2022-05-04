import React from 'react'
import Home from '../pages/Home'
import { Cover, Dash } from './Styled'
import {Routes,Route} from "react-router-dom"

const Dashboard = () => {
  return (
    <Cover>
      <Dash>
        <h2>Your Dashboard</h2>
        <Routes>
          <Route path="/dashboard/home" element={ <Home/>}/>
        </Routes>
       <p><a href="Home.jsx">Home</a></p> 
       
       <p><a href="NewProduct.jsx">New Product</a></p> 
       <p><a href=""> Products</a></p>
       <p><a href="Credits.jsx">Credits</a></p>
        
        </Dash>

        <Home/>
       </Cover>
    
  )
}

export default Dashboard