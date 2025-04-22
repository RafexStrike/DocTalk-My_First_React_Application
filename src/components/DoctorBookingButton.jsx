import React from "react";
import { useNavigate } from "react-router"; 
import { toast } from "react-toastify"; 

const DoctorBookingButton = ({ doctor }) => {
  const navigate = useNavigate();
  
  const handleBooking = () => {
    const newBooking = {
      doctorName: doctor.name,
      regNo: doctor.reg_no, 
      speciality: doctor.specialities,
      designation: doctor.designation,
      workplace: doctor.workplace,
      consultationFee: doctor.consultation_fee,
      bookingDate: new Date().toISOString(),
      status: "Pending"
    };

    const existingBookings = JSON.parse(localStorage.getItem("doctorBookings")) || [];
    
    console.log("Current doctor reg_no:", doctor.reg_no);
    console.log("Existing bookings:", existingBookings);
    
    const isDoctorAlreadyBooked = existingBookings.some(
      booking => booking.regNo === doctor.reg_no
    );

    if (isDoctorAlreadyBooked) {
      toast.error(`You already have a pending booking with ${doctor.name}`);
    } else {
      const updatedBookings = [...existingBookings, newBooking];
      
      localStorage.setItem("doctorBookings", JSON.stringify(updatedBookings));
      
      console.log("Booking added:", newBooking);
      console.log("Updated bookings:", updatedBookings);
      
      toast.success(`Appointment with Dr. ${doctor.name} booked successfully!`);
      
      navigate("/mybooking");
    }
  };

  return (
    <button 
      onClick={handleBooking}
      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition duration-200"
    >
      Book Appointment Now
    </button>
  );
};

export default DoctorBookingButton;