import React, { useState } from "react";
import SigninForm from "../../components/signinform/SigninForm";
import SignupForm from "../../components/signupform/SignupForm";
import "./Home.css";
import { images } from "../../assets/images";

const Home = () => {
  const [isActive, setIsActive] = useState(true);

  const flipForm = () => {
    if (isActive === false) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  return (
    <div className="loginPage">
      <div className="login-bg">
        <img src={images.loginbg} alt="bg" />
      </div>
      <div className="photo">
        <img src={images.photo} alt="photo" />
      </div>
      <div className="logo">
        <img src={images.logo} alt="logo" />
      </div>
      <div className="left-circle">
        <img src={images.leftCircle} alt="circle" />
      </div>
      <div className="right-circle">
        <img src={images.rightCircle} alt="circle" />
      </div>
      <div className={isActive ? "flip-card" : "flip-card active"}>
        <div className="front">
          <SigninForm flipForm={flipForm} />
        </div>
        <div className="back">
          <SignupForm flipForm={flipForm} />
        </div>
      </div>
    </div>
  );
};

export default Home;
