import React from 'react'
import styles from './Account.module.css'
import { useNavigate } from 'react-router-dom'
// import {Footer} from '../Components/Footer'

export const AccountInfo = () => {
   const navigate = useNavigate()
 const handleSubmit = ()=>{
    alert("Account details captured")
    
 }
 const handleSubmit2 = ()=>{
   alert("Payment done")
   navigate("/")
}


  return (
    <>
    <div className={styles.AccountInfo_main_div}>
    <div>
        <p className= {styles.Account_Info}>Account Info</p>
    </div>

   
      <p className={styles.AccountInfo_p}>
         Account Number
      </p>

    <input className={styles.AccountInfo_input} type="text" />
       
       <p className={styles.AccountInfo_p}>
          IFSC CODE
       </p>

    <input className={styles.AccountInfo_input} type="text" />
       
       <p className={styles.AccountInfo_p}>
          Bank Name
       </p>

    <input className={styles.AccountInfo_input} type="text" />
       
       <p className={styles.AccountInfo_p}>
         UPI ID
       </p>

    <input className={styles.AccountInfo_input} type="text" />
       
       <p className={styles.AccountInfo_p}>
         Address 1
       </p>

    <input className={styles.AccountInfo_input} type="text" />
       
       <p className={styles.AccountInfo_p}>
         Address 2
       </p>

    <input className={styles.AccountInfo_input} type="text" />
       
       <p className={styles.AccountInfo_p}>
         City
       </p>

    <input className={styles.AccountInfo_input} type="text" />
       
       <p className={styles.AccountInfo_p}>
        State
       </p>

    <input className={styles.AccountInfo_input} type="text" />
       
       <p className={styles.AccountInfo_p}>
         Pin Code
       </p>

    <input className={styles.AccountInfo_input} type="text" />

      <button className ={styles.AccountInfo_button} onClick={handleSubmit} >Create User account</button>
      <button className ={styles.AccountInfo_button} onClick={handleSubmit2} >Pay and Buy</button>
    </div>
      

    {/* <Footer /> */}

    </>
  )
}

