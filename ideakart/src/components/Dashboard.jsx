import React from 'react'


import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    
      <div>
        <h2>Your Dashboard</h2>
        
      <p>  <Link style={{textDecoration:"none"}} to="/dashboard/home">Home</Link></p>
      <p>  <Link style={{textDecoration:"none"}} to="/dashboard/newproduct">New Product</Link></p>
      <p>  <Link style={{textDecoration:"none"}} to="/dashboard/products">Products</Link></p>
      <p>  <Link style={{textDecoration:"none"}} to="/dashboard/credits">Credits</Link></p>
      </div>
              
      

        
       
    
  )
}

export default Dashboard