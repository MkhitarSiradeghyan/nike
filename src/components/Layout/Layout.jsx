import React from "react";
import Banner from "../Banner/Banner";
import { Outlet } from "react-router";
import Profile from "../Profile/Profile";

const Layout = () => {
  return (
    <>
      <Banner />
      <Outlet />
      <Profile/>
      
    </>
  );
};

export default Layout;
