import React from 'react';
import { Link } from 'react-router-dom';
import { FaCartPlus,FaListUl } from 'react-icons/fa';
import styled from 'styled-components';
import styles from './Search.module.css';


// keep the add to cart component here
const Detl=styled.div`
display:flex;
justify-content:space-around;
border-top:0.5px solid grey;
margin-top:1px;
margin-bottom:20px;
width:90%;
margin-left:5%;
`
const View=styled.div`
margin-top:15px;
display:flex;
text-decoration: none;
`
const More=styled.div`
margin-top:15px;
display:flex;
text-decoration: none;

`

const Detail = (props) => {
  console.log(props)
  const {id}=props;
  console.log(id)
  return <>
  
  <Detl >
   
    <View>
      <div>
         <FaCartPlus className = {styles.Detail_page_icon}/>
      </div>
      <div>
         <Link className = {styles.Detail_page_View_now} to={`/${id}`} > View Now</Link>
      </div>
    </View>
    <More>
     <div>
     <FaListUl className = {styles.Detail_page_icon}/>
     </div>
    <div>
     <Link className = {styles.Detail_page_View_now} to={`/${id}`}>More Details</Link>
    </div>
  
    </More>
   
   
   
  </Detl>
  </>;
};
export default Detail