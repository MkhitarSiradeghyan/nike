import React from "react";
import Layout from "./components/Layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
