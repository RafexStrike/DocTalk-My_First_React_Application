import React, { useState, useEffect } from "react";
import { Outlet, useParams } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FirstSection from "../components/DoctorsDetails/FirstSection";
import EachSingleDoctor from "../components/DoctorsDetails/EachSingleDoctor";

const DoctorsDetails = () => {

  const { regid } = useParams();
  const [allDoctorsData, setAllDoctorsData] = useState([]);

  useEffect(() => {
    fetch("/DoctorData.json")
      .then((res) => res.json())
      .then((data) => {
        setAllDoctorsData(data);
      });
  }, []);

  console.log(allDoctorsData);
  const neededDoctor = allDoctorsData.find( theNeededDoctor => theNeededDoctor.reg_no === regid  )
  console.log(neededDoctor)
  console.log(regid);


  return (
    <div className="min-h-screen bg-[#EFEFEF]">
      {/* <h1>hi im doctors details</h1>
      <Navbar></Navbar>
      <h2>hello</h2> */}
      <FirstSection></FirstSection>
      <EachSingleDoctor neededDoctor={neededDoctor} regid={regid}></EachSingleDoctor>
      <Outlet></Outlet>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default DoctorsDetails;
