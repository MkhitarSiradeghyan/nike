import React from "react";
import Banner from "../Banner/Banner";
import { Outlet } from "react-router";
import Hero from "../Hero/Hero";

const Layout = () => {
  return (
    <>
      <Banner />
      <Hero/>
      <Outlet />
    </>
  );
};

export default Layout;
