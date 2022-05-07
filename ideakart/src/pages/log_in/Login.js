import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../contextAPI";

const Login = () => {
  const [personDetail, setPersonDetail] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { verifyUser, loginUser } = useGlobalContext();
  const navigate = useNavigate();

  //event handlers
  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    if (name === "email") {
      value = value.toLowerCase();
    }
    setPersonDetail({ ...personDetail, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = verifyUser(personDetail);
    if (result.verified) {
      setErrorMessage("");
      loginUser(personDetail);
      // navigate("./dropdown")
      navigate("../", { replace: true });
      
  
     
    } else {
      setErrorMessage(result.error);
    }
  };
  return (
    <div>
      <div className="login-container">
        <div className="login__content-container">
          <h3 className="login__heading">Login</h3>
          <form
            action=""
            className="login-form"
            onSubmit={(e) => handleSubmit(e)}
          >
            <fieldset className="login-form__input-container">
              <div className="login-form__email login__input-field">
                <label htmlFor="login__email">Email</label>
                <input
                  type="email"
                  name="email"
                  value={personDetail.email}
                  id="login__email"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="login-form__password login__input-field">
                <label htmlFor="login__password">Password</label>
                <input
                  type="password"
                  name="password"
                  value={personDetail.password}
                  id="login__password"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              {errorMessage && (
                <p className="login-form__error-message">{errorMessage}</p>
              )}
              <button type="submit" className="login__submit-btn">
                Login
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
