import React from "react";
import { Navigate } from "react-router-dom";
import App from "../home/App.jsx";
import LoginPage from "../loginpage/LoginPage.jsx";
import SignUpPage from "../signuppage/SignUpPage.jsx";

export const homeRoutes = [
  { path: "/", element: <Navigate to="/home" /> },
  { path: "/home", element: <App /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/signup", element: <SignUpPage /> },
];
