import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Navbar from "../Components/Navbar";
import Home from "../pages/Home";
import BidPage from "../pages/BidPage";
const Routers = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exect path="/" element={<Home />} />
          <Route exect path="bidpage" element={<BidPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default Routers;
