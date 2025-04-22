import React from "react";
import { Link } from "react-router";
import Navbar from "./Navbar";
// import Navbar from "./Navbar";
// bg-gradient-to-br from-blue-50 to-blue-100
const ErrorPage2 = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div className="mt-4">
        <div className="bg-white max-w-6xl mx-auto rounded-xl min-h-screen  flex flex-col items-center justify-center text-center px-4">
          {/* Main Content */}
          <div className="max-w-md space-y-6">
            {/* Error Icon */}
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-24 w-24 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            {/* Error Title */}
            <h1 className="text-3xl font-bold text-gray-800">
              Oops! Something went wrong.
            </h1>

            {/* Error Description */}
            <p className="text-gray-600">
              We encountered an unexpected issue. Please try refreshing the page
              or contact support if the problem persists.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Refresh Button */}
              <button
                onClick={() => window.location.reload()}
                className="w-full sm:w-auto px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Refresh Page
              </button>

              {/* Go Home Button */}
              <Link
                to="/"
                className="w-full sm:w-auto px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition duration-300"
              >
                Go Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage2;
