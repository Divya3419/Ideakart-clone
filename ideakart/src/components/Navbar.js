import "./navbar.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../contextAPI";

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
   
  navigate("./Contact");

};




  // const handleFetchNormalClick = () => {
  //   navigate("./fetch-normal", { replace: true });
  // };
  // const handleFetchAuthClick = () => {
  //   navigate("./fetch-with-auth", { replace: true });
  // };

  return (
    <nav className="navbar-container">
      <div className="navbar__company-logo">IdealCart</div>
      <div className="navbar__btn-container">
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
         Log in
        </h4>
        <h4
          className="navbar__login-signup-logout-btn"
          onClick={handleClick}
        >
          {buttonContent}
        </h4>
     
      </div>
    </nav>
  );
};

export default Navbar;
