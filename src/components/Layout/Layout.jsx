import React from "react";
import Banner from "../Banner/Banner";
import { Outlet } from "react-router";
import Cta from "../Cta/Cta";


const Layout = () => {
  return (
    <>
      <Banner />
      <Outlet />
      <Cta/>
    
    </>
  );
};

export default Layout;
