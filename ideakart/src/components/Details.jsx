import React from 'react';
import { Link } from 'react-router-dom';
import { FaCartPlus,FaListUl } from 'react-icons/fa';
import styled from 'styled-components';


// keep the add to cart component here
const Detl=styled.div`
display:flex;
justify-content:space-around;
border-top:0.5px solid grey;
margin-top:15px;
margin-bottom:20px;
`
const View=styled.div`
margin-top:15px;
`
const More=styled.div`
margin-top:15px;
`

const Detail = (props) => {
  console.log(props)
  const {id}=props;
  console.log(id)
  return <>
  
  <Detl >
   
    <View>
      <FaCartPlus/>
    <Link to={`/${id}`} > View Now</Link>
    </View>
    <More>
    <FaListUl/>
    <Link to={`/${id}`}>More Details</Link>
  
    </More>
   
   
   
  </Detl>
  </>;
};
export default Detail