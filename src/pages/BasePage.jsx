import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const BasePage = () => (
  <div>
    <Header />
    <Outlet />
  </div>
);

export default BasePage;
