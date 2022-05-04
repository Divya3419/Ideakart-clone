import React from "react";
//import {Routes,Route} from 'react-router-dom';
//import { PrivacyPolicy } from "./PrivacyPolicy";
import { Link } from 'react-router-dom'
  
export  const Footer = () => {
  return (
    
     <>
      <p>Get To Know Us</p>
     
      <ul>
      <li>
            About

            {/* <a href="/Search">About</a> */}
      </li>
      <li>
            Contact
      </li>
      <li>  
            <Link to = '/Search'> Search</Link>
      </li>
      <li>
           <Link to = '/PrivacyPolicy'> Privacy Policy</Link>
      </li>
      <li>
            
            <Link to = '/RefundPolicy'>Refund Policy</Link>
      </li>
      <li>
           
            <Link to = '/MoneyOnline'> Earn Money Online</Link>
      </li>
      <li>
            QuickBuyer
      </li>
      
      </ul>

      
     </>
      
      );
};

// {/* <Route path={"/"}>Home</Route>
// <Route to={"/about"}>About</Route>
// <Route to={"/products"}>Products</Route>
// <Route to={"/products/men"}>Men</Route>
// <Route to={"/products/women"}>Women</Route>
// <Route to={"/products/kids"}>Kids</Route>
// <Route to={"/products/homedecor"}>Home Decor</Route> */}