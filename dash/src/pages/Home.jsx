import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Btn, Cover, Three } from '../components/Styled'

const Home = () => {
  return (
    
<Cover>

      <div>
      <h1>Welcome!</h1>
      <Link to="/dashboard/newproduct"><Btn>Upload New Product</Btn></Link>
    
    </div>
      <Three>
        <Box> 0/0 Products
          <br/> Approved</Box> 
        <Box box2>0 Under <br/> Review</Box> 
        <Box box3>0 couldn't pass  <br/>Review</Box>
        </Three>
        </Cover>
    
  )
}

export default Home