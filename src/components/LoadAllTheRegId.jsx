import React, { useState, useEffect, useMemo } from "react";

const LoadAllTheRegId = () => {
  const [allDoctorsData, setAllDoctorsData] = useState([]);

  useEffect(() => {
    fetch("/DoctorData.json")
      .then((res) => res.json())
      .then((data) => {
        setAllDoctorsData(data);
      });
  }, []);

  const regIdsOfAllTheDoctors = useMemo(() => {
    return allDoctorsData.map((oneDoctorData) => oneDoctorData.reg_no);
  }, [allDoctorsData]);

  useEffect(() => {
    console.log(regIdsOfAllTheDoctors);
  }, [regIdsOfAllTheDoctors]);

  return (
    <div>
      <h1>hi i am all doctors data </h1>
    </div>
  );
};

export default LoadAllTheRegId;
