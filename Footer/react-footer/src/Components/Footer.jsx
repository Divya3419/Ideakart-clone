import React from "react";
import styles from './FooterStyles.module.css'
import { Link } from 'react-router-dom'
  
export  const Footer = () => {
  return (
    
     <>
     <div className={styles.footer_main_div}>
           
      <p className={styles.Get_to}>Get To Know Us</p>
     
     <ul>
     <li>
           
           <Link className={styles.footer} to = '/'> About</Link>
     </li>
     <li>
           
           <Link className={styles.footer} to = '/'> Contact</Link>
     </li>
     <li>  
           <Link className={styles.footer} to = '/Search'> Search</Link>
     </li>
     <li>
          <Link  className={styles.footer} to = '/PrivacyPolicy'> Privacy Policy</Link>
     </li>
     <li>
           
           <Link className={styles.footer}  to = '/RefundPolicy'>Refund Policy</Link>
     </li>
     <li>
          
           <Link  className={styles.footer} to = '/MoneyOnline'> Earn Money Online</Link>
     </li>
     <li>
         <Link className={styles.footer} to = '/'>  QuickBuyer</Link>
          
     </li>
     
     </ul>
     </div>

      
     </>
      
      );
};

