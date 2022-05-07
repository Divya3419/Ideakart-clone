import React from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";

const Box = styled.div`

margin-bottom:150px;

`



const Dashboard = () => {
  return (
    
      <Box>
        <h2>Your Dashboard</h2>
        
      <p>  <Link style={{textDecoration:"none"}} to="/dashboard/home">Home</Link></p>
      <p>  <Link style={{textDecoration:"none"}} to="/dashboard/newproduct">New Product</Link></p>
      <p>  <Link style={{textDecoration:"none"}} to="/dashboard/products">Products</Link></p>
      <p>  <Link style={{textDecoration:"none"}} to="/dashboard/credits">Credits</Link></p>
      </Box>
              
      

        
       
    
  )
}

export default Dashboard