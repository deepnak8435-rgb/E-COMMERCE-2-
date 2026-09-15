import React from "react";
import { useNavigate } from "react-router-dom";
import "./Css/Loginsignup.css";

export const LoginSignup = () => {

  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/");
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input
            type="text"
            placeholder="Your Name" />
          <input
            type="email"
            placeholder="Email Address" />

          <input
            type="password"
            placeholder="Password"/>
        </div>
        <button onClick={handleContinue}> Continue </button>
        <p className="loginsignup-login">
          Already have an account?
          <span onClick={() => navigate("/login")}>Login here  </span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" />
          <p>
            By continuing, I agree to the terms of use & privacy policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;