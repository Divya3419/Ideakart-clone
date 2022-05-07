import React from 'react'
import styles from './FooterStyles.module.css'
import { useNavigate } from "react-router-dom";

export const MoneyOnline = () => {
   const navigate = useNavigate();
const handleClick = ()=>{
   navigate("/dashboard/home")
}




  return (
      <>
      <div className={styles.Earn_Money_Online}>
          <p>
             Earn Money Online | Working from Home
          </p>
        </div>
        <div className={styles.Earn_Money_Main_div}>
            <div className={styles.Earn_Money_child_div}>
               <p className={styles.Number}>
               1
               </p>
               <p className={styles.p_heading}>
               Upload Products that 
               </p>
               <p className={styles.p_heading}>
               you have!
               </p>
               <ul>
                   <li className={styles.li}>
                   Create your Account by clicking here
                   </li>
                   <li className={styles.li}>
                   Verify your account
                   </li>
                   <li className={styles.li}>
                   Go to Dashboard    
                   </li>
                   <li className={styles.li}>
                   Pick any product. For example mobile <br/> phone, or any item.   
                   </li>
                   <li className={styles.li}>
                   Search for it in the Database.  
                   </li>
                   <li className={styles.li}>
                   If it's available, upload a photograph.   
                   </li>
                   <li className={styles.li}>
                   Please mention the price you bought it at.   
                   </li>
                   
               </ul>
            </div>
            <div className={styles.Earn_Money_child_div}>
               <p  className={styles.Number}>
               2
               </p>
               <p className={styles.p_heading}>
               Provide a brief
               </p>
               <p className={styles.p_heading}>
                description of how to
               </p>
               <p className={styles.p_heading}>
                use!
               </p>
               <ul>
                   <li className={styles.li}>
                   Describe the product you just uploaded.
                   </li>
                   <li className={styles.li}>
                   Mention from where you bought it, online <br/> or offline
                   </li>
                   <li className={styles.li}>
                   A Video increases your chances of getting <br/> a product approved, but it is not mandatory to upload videos.   
                   </li>                 
               </ul>
            </div>
            <div className={styles.Earn_Money_child_div}>
               <p  className={styles.Number}>
                3
               </p>
               <p className={styles.p_heading}>
                 On Approval get 
               </p>
               <p className={styles.p_heading}>
                scratch cards and earn
               </p>
               <p className={styles.p_heading}>
                  money!
               </p>
               <ul>
                   <li className={styles.li}>
                   We will review the products you uploaded.
                   </li>
                   <li className={styles.li}>
                   On approval you will get a scratch card, which can be money or coupon code.
                   </li>
                   <li className={styles.li}>
                   Make sure you provide the correct bank details or UPI Id, to which you want the money to transfer  
                   </li>                 
               </ul>
            </div>
        </div>


        <div>
           <iframe className={styles.image} src="https://www.youtube.com/embed/TfQyg-DSHBo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <button className= {styles.button} onClick={handleClick} >Get Started!</button>

                       {/* here im importing footer  */}

                     
      </>
  )
}
