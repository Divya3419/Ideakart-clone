import React from 'react'
import { Box, Btn, Three, Wel } from '../components/Styled'

const Home = () => {
  return (
    <div>

      
      <Wel>
      <h1>Welcome!</h1>
    <Btn>Upload New Product</Btn>
    </Wel>
      <Three>
        <Box> 0/0 Products
          <br/> Approved</Box> 
        <Box box2>0 Under <br/> Review</Box> 
        <Box box3>0 couldn't pass  <br/>Review</Box>
        </Three>
    </div>
  )
}

export default Home