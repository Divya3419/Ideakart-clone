import { useState } from "react";
import "./sign_up_login.css";
import { useGlobalContext } from "../../contextAPI";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  //Hooks
  const [personDetail, setPersonDetail] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { store, addNewUser } = useGlobalContext();
  const navigate = useNavigate();

  // functions
  const checkValidity = (detail) => {
   
    if (detail.password !== detail.confirmPassword) {
      setErrorMessage("Password did not match");
      return false;
    }

    let userExist = false;
    store.getState().userList.forEach((item) => {
      if (item.email === detail.email) {
        userExist = true;
      }
    });
    if (userExist) {
      setErrorMessage("User already Exist. Please login!");
      return false;
    }

    setErrorMessage("");
    return true;
  };
  // handlers
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
    if (checkValidity(personDetail)) {
      addNewUser(personDetail);
      navigate("/login", { replace: true });
    }
  };

  return (
    <div className="sign-up-container">
      <div className="sign-up__content-container">
        <h3 className="sign-up__heading">Sign Up</h3>
        <form
          action=""
          className="sign-up-form"
          onSubmit={(e) => handleSubmit(e)}
        >
          <fieldset className="sign-up-form__input-container">
          <div className="sign-up-form__email sign-up__input-field">
              <label htmlFor="sign-up__email">Name</label>
              <input
                type="text"
                name="name"
                value={personDetail.name}
                id="sign-up__name"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="sign-up-form__email sign-up__input-field">
              <label htmlFor="sign-up__email">Mobile Number</label>
              <input
                type="number"
                name="number"
                value={personDetail.number}
                id="sign-up__number"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="sign-up-form__email sign-up__input-field">
              <label htmlFor="sign-up__email">Email</label>
              <input
                type="email"
                name="email"
                value={personDetail.email}
                id="sign-up__email"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="sign-up-form__password sign-up__input-field">
              <label htmlFor="sign-up__password">Password</label>
              <input
                type="password"
                name="password"
                value={personDetail.password}
                id="sign-up__password"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="sign-up-form__confirm-password sign-up__input-field">
              <label htmlFor="sign-up__confirm-password">
                Conform Password
              </label>
              <input
                type="text"
                name="confirmPassword"
                value={personDetail.confirmPassword}
                id="sign-up__confirm-password"
                onChange={(e) => handleChange(e)}
              />
            </div>
          
            {errorMessage && (
              <p className="sign-up-form__error-message">{errorMessage}</p>
            )}

            <button type="submit" className="sign-up__submit-btn">
              Sign Up
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
