import React from "react";
import ButtonGradient from "../assets/svg/ButtonGradient";
import Header from "../components/generalComponents/Header";
import SignUp from "../components/signupComponents/SignUp";
import { heroBackground } from "../assets";

function LoginPage() {
  return (
    <div className="login-page relative h-screen overflow-hidden">
      <div className="relative h-full">
        <img
          src={heroBackground}
          className="absolute inset-x-0 bottom-0 w-full h-full object-cover z-[-5]"
          alt="Background"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <SignUp />
          <ButtonGradient />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
