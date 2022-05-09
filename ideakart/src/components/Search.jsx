import React from 'react'
import styles from './FooterStyles.module.css'
// import {Footer} from './Footer'



export const Search = () => {
  return (
      <>
      <div className={styles.main_serch_div}>
            <div className={styles.Search_Results}>Search Results for</div>
            
            <div>
                <input className={styles.Search} type="text" placeholder="books" />
            </div>
            <div>
                    <p className={styles.no_result}>
                        No results
                    </p>
            </div>
      
      </div>
 
                 {/* here im importing footer  */}

            {/* <Footer /> */}
      </>

  )
}

