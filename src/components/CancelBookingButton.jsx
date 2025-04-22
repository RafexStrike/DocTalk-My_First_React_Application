import React from "react";

const CancelBookingButton = ({ regNo, onCancelBooking }) => {
  const handleClick = () => {
    onCancelBooking(regNo); 
  };

  return (
    <button 
      onClick={handleClick}
      className="w-full px-4 py-2 text-red-500 hover:bg-red-100 hover:text-red-700 border border-red-500 rounded-full transition duration-300"
    >
      Cancel Appointment
    </button>
  );
};

export default CancelBookingButton;
