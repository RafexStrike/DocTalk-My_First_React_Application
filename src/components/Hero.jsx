import React from "react";
import Banner from "./Banner";
import DoctorsList from "./DoctorsList";
import Review from "./Review";

const Hero = () => {
  return (
    <div>
      <div>
        <Banner></Banner>
      </div>

      <div>
        <DoctorsList></DoctorsList>
      </div>

      <div className="mt-10 max-w-6xl mx-auto">
        <Review></Review>
      </div>
    </div>
  );
};

export default Hero;
