import React from 'react'
import styles from './FooterStyles.module.css'



export const RefundPolicy = () => {
  return (
    <>
    <div className={styles.Refund_main_div}>
        <div className="">
            <p className={styles.Refund_main_pp}>
                 Return & Refund Policy
            </p>
            <p className={styles.Refund_P}>
               Thanks for shopping at Ideakart.com.
            </p>
            <p className={styles.Refund_P}>
                 If you are not entirely satisfied with your purchase, we're here to help.
            </p>
            <p className={styles.Refund_main_p}>
                 Returns 
            </p>
            <p className={styles.Refund_P}>
                 You have 7 calendar days to return an item from the date you received it.
            </p>
            <p className={styles.Refund_P}>
                 To be eligible for a return, your item must be unused and in the same condition that you received it.
            </p>
            <p className={styles.Refund_P}>
                 Your item must be in the original packaging.
            </p>
            <p className={styles.Refund_P}>
               Your item needs to have the receipt or proof of purchase.   
            </p>  
            <p className={styles.Refund_main_p}>
                 Refunds
            </p>
            <p className={styles.Refund_P}>
                 Once we receive your item, we will inspect it and notify you that we have received your returned item.
                 We will immediately notify you on the status of your refund after inspecting the item.
            </p>
            <p className={styles.Refund_P}>
                If your return is approved, we will initiate a refund to your method 
                of payment(Credit Card/Debit Card/Bank etc).
            </p>
            <p className={styles.Refund_P}>
                 You will receive the credit within a certain amount of days, depending on your banks policies.
            </p>
            <p className={styles.Refund_main_p}>
                Shipping
            </p>
            <p className={styles.Refund_P}>
                 You will be responsible for paying for your own
                 shipping costs for returning your item. Shipping costs are non­refundable.
            </p>
            <p className={styles.Refund_P}>
                If you receive a refund, the cost of return shipping will be deducted from your refund.
            </p>
            <p className={styles.Refund_main_p}>
                 Contact Us
            </p>
            <p className={styles.Refund_P}>
                 If you have any questions on how to return your item to us, contact us at 9650122736
            </p>

        </div>
    </div>


                       {/* here im importing footer  */}

         
    </>
  )
}

