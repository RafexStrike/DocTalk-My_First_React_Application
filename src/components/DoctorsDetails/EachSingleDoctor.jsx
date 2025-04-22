import React, { Suspense } from "react";
import DoctorBookingButton from "../DoctorBookingButton";
import LoadingAnimation from "../LoadingAnimation";

const EachSingleDoctor = ({ neededDoctor }) => {
  if (!neededDoctor) {
    return (
      <div className="flex justify-center items-center p-10">
        {/* Loading doctor information... */}
        <span className="loading loading-ball loading-xs"></span>
        <span className="loading loading-ball loading-sm"></span>
        <span className="loading loading-ball loading-md"></span>
        <span className="loading loading-ball loading-lg"></span>
        <span className="loading loading-ball loading-xl"></span>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      {/* Doctor Information Card */}
      <div className="bg-white rounded-lg shadow-md mb-8">
        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Doctor Image */}
            <div className="w-full md:w-1/4">
              <img
                src={neededDoctor.image}
                alt={neededDoctor.name}
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>

            {/* Doctor Details */}
            <div className="w-full md:w-3/4">
              {/* Doctor Name and Credentials */}
              <h2 className="text-3xl font-bold text-gray-800">
                {neededDoctor.name}
              </h2>
              <p className="text-gray-600 mt-1">{neededDoctor.designation}</p>
              <p className="text-gray-600 mt-1">{neededDoctor.specialities}</p>

              {/* Working At */}
              <div className="mt-6">
                <p className="text-gray-500">Working at</p>
                <p className="text-gray-800 font-semibold">
                  {neededDoctor.workplace}
                </p>
              </div>

              {/* Registration Number */}
              <div className="mt-4 flex items-center">
                <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <p className="text-gray-700">Reg No: {neededDoctor.reg_no}</p>
              </div>

              {/* Horizontal Line */}
              <div className="border-t border-gray-200 my-6"></div>

              {/* Availability */}
              <div className="mb-4">
                <p className="font-medium text-gray-700 mb-2">Availability</p>
                <div className="flex flex-wrap gap-2">
                  {neededDoctor.available_days.map((day, index) => (
                    <span
                      key={index}
                      className="px-4 py-1 bg-amber-100 text-amber-800 rounded-full text-sm"
                    >
                      {day}
                    </span>
                  ))}
                </div>
              </div>

              {/* Consultation Fee */}
              <div className="mb-4">
                <p className="font-medium text-gray-700 mb-2">
                  Consultation Fee:
                </p>
                <div className="flex items-center">
                  <span className="font-semibold text-gray-800">
                    Taka: {neededDoctor.consultation_fee}
                  </span>
                  <span className="ml-2 text-gray-500">
                    (incl. VAT) Per consultation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Appointment Section */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6">
          <h3 className="text-xl font-bold text-center mb-6">
            Book an Appointment
          </h3>

          <div className="border-t border-gray-200 pt-4">
            <div className="flex justify-between items-center mb-4">
              <p className="font-medium">Availability</p>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                Doctor Available Today
              </span>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg mb-6 flex items-start">
              <div className="text-amber-500 mr-2 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-amber-700">
                Due to high patient volume, we are currently accepting
                appointments for today only. We appreciate your understanding
                and cooperation.
              </p>
            </div>

            {/* booking button */}
            <Suspense fallback={<LoadingAnimation />}>
            <DoctorBookingButton doctor={neededDoctor} />
            </Suspense>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachSingleDoctor;
