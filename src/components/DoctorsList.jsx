import React, { useState, useEffect } from "react";
import { Link } from "react-router";

const DoctorsList = () => {
  const [allDoctors, setAllDoctors] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("/DoctorData.json")
      .then((response) => response.json())
      .then((data) => setAllDoctors(data))
      .catch((error) => console.error("Error loading doctor data:", error));
  }, []);

  const filteredDoctors = allDoctors.map((doctor) => ({
    image: doctor.image,
    availability: doctor.availability,
    years_of_experience: doctor.years_of_experience,
    name: doctor.name,
    designation: doctor.designation,
    specialities: doctor.specialities,
    reg_no: doctor.reg_no,
  }));

  const displayedDoctors = showAll
    ? filteredDoctors
    : filteredDoctors.slice(0, 6);

  return (
    <div className="mt-10 max-w-6xl mx-auto">
      <h3 className="text-center text-3xl font-bold">Our Best Doctors</h3>
      <p className="mt-4  text-center text-sm font-light">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience. Whether it's a routine
        checkup or urgent consultation, book appointments in minutes and receive
        quality care you can trust.
      </p>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedDoctors.map((doctor, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
            >
              {/* Image */}
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full">
                      {doctor.availability}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-medium text-gray-600">
                      {doctor.years_of_experience}+ Years Experience
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    {doctor.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {doctor.designation}
                  </p>
                </div>

                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Reg No: {doctor.reg_no}</span>
                </div>

                <Link 
                className="w-full py-2 px-4 border border-blue-500 text-blue-500 font-medium rounded-lg hover:bg-blue-50 transition-colors"
                to={`doctorsdetails/${doctor.reg_no}`}
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {!showAll && allDoctors.length > 6 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
            >
              View All Doctors ({allDoctors.length - 6} more)
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorsList;
