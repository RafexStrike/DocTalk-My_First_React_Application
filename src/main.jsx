import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router"; 
import "./index.css";

import Root from "../src/Pages/Root";
import DoctorsDetails from "./Pages/DoctorsDetails";
import MyBooking from "./components/My-Booking/MyBooking";
import Hero from "./components/Hero";
import Blogs from "./components/Blogs";
import ErrorPage from "./components/ErrorPage";
import ErrorPage2 from "./components/ErrorPage2";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import LoadingAnimation from "./components/LoadingAnimation";

let allDoctorsData = [];

fetch("/DoctorData.json")
  .then((res) => res.json())
  .then((data) => {
    allDoctorsData = data;
    console.log("Fetched doctors data:", allDoctorsData);
  })
  .catch((error) => {
    console.error("Failed to fetch doctors data:", error);
  });

// loader function
const validateDoctorRegId = async ({ params }) => {
  const regid = params.regid;

  if (allDoctorsData.length === 0) {
    const res = await fetch("/DoctorData.json");
    allDoctorsData = await res.json();
  }

  const doctor = allDoctorsData.find(
    (doc) => doc.reg_no.toString() === regid.toString()
  );

  if (!doctor) {
    throw new Response("Doctor Not Found", { status: 404 });
  }


  return doctor;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<LoadingAnimation />}>
        <Root />
      </Suspense>
    ),
    
    errorElement: <ErrorPage2 />,
    children: [
      { index: true, element: <Hero /> },
      { path: "/mybooking", element: <MyBooking /> },
      {
        path: "/blogs",
        element: <Blogs />,
 
      },
      { path: "/contacts", element: <ErrorPage /> },
      {
        path: "/doctorsdetails/:regid",
        element: <DoctorsDetails />,
        loader: validateDoctorRegId,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback={<LoadingAnimation />}>
      <RouterProvider router={router} />
    </Suspense>
    <ToastContainer position="top-right" autoClose={3000} />
  </StrictMode>
);