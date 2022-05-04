import React from 'react'
import { Box, Btn, Three } from '../components/Styled'

const Home = () => {
  return (
    <div>
      <h1>Welcome!</h1>
    <Btn>Upload New Product</Btn>

      <Three>
        <Box>0/0 Products Approved</Box> 
        <div>0 Under Review</div>
        <div>0 couldn't pass Review</div>
        </Three>
    </div>
  )
}

export default Home