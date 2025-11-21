import React from "react";
import Banner from "../Banner/Banner";
import { Outlet } from "react-router";
import Hero from "../Hero/Hero";
import Order from "../Order/Order";

const Layout = () => {
  return (
    <>
      <Banner />
      <Hero/>
      <Outlet />
      <Order/>
    </>
  );
};

export default Layout;
