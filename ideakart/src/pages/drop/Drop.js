import React from 'react'
import "./drop.css"
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useNavigate } from "react-router-dom";

function Drop() {
  const navigate = useNavigate();
  const options = [
    'one', 'two', 'three'
  ];
  const handleClick5 = (e)=>{
    if(e.value==="one"){
      navigate("./Contact");
      console.log("working")
    }
  }
  
  return (
    <>
    <Dropdown className='dDown' options={options} value="Dashboard" onChange={handleClick5} />
    </>
  )
}

export default Drop