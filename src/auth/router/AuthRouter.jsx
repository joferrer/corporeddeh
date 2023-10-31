import React from "react";
import { LoginPage } from "../pages/LoginPage";
import { Navigate, Route, Routes } from "react-router-dom";
import {ResetPassword} from "../pages/ResetPassword"
import { CorpoeddehRoute } from "../../corporeddeh/routes/CorporeddehRoute";

const CHECKING = "checking" 
const AUTHENTICATED = "authenticated"
const NO_AUTHENTICATED = "no-authenticated"

const LOGIN_ROUTE = "/login"
const RESET_PASSWORD = "/reset"
export const AuthRouter = ({status}) => {
  
  return (
    <Routes>
      <Route path={LOGIN_ROUTE} element={<LoginPage />} />
      <Route path={RESET_PASSWORD} element={<ResetPassword />} />
      <Route path={`${LOGIN_ROUTE}/*`} element={<Navigate to="/login" />} />
      <Route path={`${RESET_PASSWORD}/*`} element={<Navigate to="/" />} />
      <Route path="/*" element={<CorpoeddehRoute />} />

    </Routes>
  );
};