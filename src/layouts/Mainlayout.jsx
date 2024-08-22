import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Mainlayout = () => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-secondary">
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Mainlayout;
