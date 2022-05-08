import "./navbar.css";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../contextAPI";
import Detail from "./Details";

// import Dropdown from "./pages/dropdown/Dropdown"



import axios from "axios"

import styles from './Search.module.css';



const Navbar = () => {
  //hooks
  const [buttonContent, setButtonContent] = useState("Login");
  const { logOutUser, store } = useGlobalContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (/login$/.test(window.location.href)) setButtonContent("Sign Up");
    else if (new RegExp("/$").test(window.location.href))
      setButtonContent("Login");
    else if (store.getState().isLoggedIn) {
      setButtonContent("Log Out");
    }
  }, [window.location.href]);

  //event handlers
  const handleClick = () => {
    if (buttonContent === "Login") {
      navigate("./login", { replace: true });
    } else if (buttonContent === "Sign Up") {
      navigate("./signup");
    } else if (buttonContent === "Log Out") {
      logOutUser();
      // navigate("./dropdown")
      navigate("./login", { replace: true });

    }
  };

  const handleClick2 = () => {
   
      navigate("./login");
     
  };

  const handleClick3 = () => {
   
    navigate("./about");
  
};
const handleClick4 = () => {
   
  navigate("./Contactpage");
  

};
const options = [
  'Dashboard', 'Account-Info', 'Notification'
];
const handleClick5 = (e)=>{
  if(e.value==="Dashboard"){
    navigate("./final");
    
  }
  if(e.value==="Account-Info"){
    navigate("./accountinfo");
   
  }
  if(e.value==="Notification"){
    navigate("./Notification");
   
  }
//Notification

  ///accountinfo
}
const handleClick6 = () => {   
  navigate("./");
};


  // const handleFetchNormalClick = () => {
  //   navigate("./fetch-normal", { replace: true });
  // };
  // const handleFetchAuthClick = () => {
  //   navigate("./fetch-with-auth", { replace: true });
  // };
  const [loading , setLoading] =useState(false)
  const [posts,setPosts] = useState([])
  const [searchTitle,setSearchTitle] = useState('')

  useEffect(()=>{
    const loadPosts = async () => {
      setLoading(true);
      const response = await axios.get(
        "http://localhost:8000/data"
      )
      setPosts(response.data)
      setLoading(false)
    }
    loadPosts();
  }, [])

  return (
     <>
    <nav className="navbar-container">
      <div className="navbar__company-logo"  onClick={handleClick6}>IDEAKART</div>
      <div className="navbar__btn-container">
      <input type="text"
         placeholder="search"
         className="inPut"
         onChange={(e) => setSearchTitle(e.target.value)}
         />
        <button className="sBtn">Search</button>
      <h4
          className="navbar__login-signup-logout-btn"
          onClick={handleClick3}>
         About
        </h4>
        <h4
          className="navbar__login-signup-logout-btn"
          onClick={handleClick4}>
         Contact
        </h4>
        {/* <h4 className="navbar__fetch-btn" onClick={handleFetchNormalClick}>
          Fetch Normal
        </h4>
        <h4 className="navbar__fetch-btn" onClick={handleFetchAuthClick}>
          Fetch Auth
        </h4> */}
           <h4
          className="navbar__login-signup-logout-btn"
          onClick={handleClick2}>
         Login
        </h4>
        <h4
          className="navbar__login-signup-logout-btn"
          onClick={handleClick}
        >
          {buttonContent}
        </h4>

        <Dropdown className='dDown' options={options} value="Dashboard" onChange={handleClick5} />


      </div>
    </nav>
           
    <div className={styles.main_div}>
         {loading ? (
           <h4></h4>
         ):(
           
         posts
         .filter((value) => {
           if (searchTitle === ""){
             return value
           }
           else if (value.title.toLowerCase().includes(searchTitle.toLowerCase())
           ){
             return value
           }
          })
          
          .map((item) =>  <div >
          <div className="">
              <img className={styles.image} src={item.imgUrl} alt="" />
              <div className={styles.all_mapping_page_main_div}>
                  <div className={styles.title_name_div}>
                    <h5 className={styles.title_name_h5}>
                        {item.title}
                    </h5>
                  </div>
              
                  <div className={styles.title_price_div}>
                  <p  className={styles.title_price_p}>
                        {item.price}
                  </p>
                  </div>
                  <div>
                    <Detail />
                  </div>
              </div>
             </div>
          </div>)
          )}
         </div>
    </>

  );
};

export default Navbar;
