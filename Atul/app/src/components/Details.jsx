import React from 'react';
import { Link } from 'react-router-dom';

// keep the add to cart component here
import styled from 'styled-components';
const Detl=styled.div`
display:flex;
justify-content:space-around;
margin-bottom:;
`
const Detail = (props) => {
  console.log(props)
  const {id}=props;
  console.log(id)
  return <>
  {/* add to cart button */}
  {/* count with - and  + button */}
  <Detl id="dtl">
    {/* <a href="#">View Now</a>
    <a href="#">More Details</a> */}
   
   <Link to={`/${id}`} > View Now</Link>
   <Link to={`/${id}`}>More Details</Link>
  
  </Detl>
  </>;
};
export default Detail
