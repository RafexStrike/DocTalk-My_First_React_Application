import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation } from "react-router";

const Root = () => {
  const currentLocation = useLocation()
  console.log(currentLocation)
  return (
    <div className="min-h-screen bg-[#EFEFEF]">
      <Navbar></Navbar>
      <Outlet></Outlet>
      {currentLocation.pathname !== "/contacts" && <Footer></Footer>}
    </div>
  );
};

export default Root;
