import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components";

const Box = styled.p`
margin-left:40px;
margin-right:40px;

margin-bottom:190px;
margin-top:30px;
`
const P = styled.p`

margin-left:60px;

`
const H1 = styled.p`

font-size:35px;

`




export default function Notification() {
  return (
      <Box>
       <H1>Notification</H1>
       <P>
          <Link to = '/MoneyOnline'>Earn Money Working from Home just by adding product reviews!</Link>
       </P>
      
      </Box>
   
  )
}
