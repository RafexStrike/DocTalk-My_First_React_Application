import React from "react";
import CancelBookingButton from "../CancelBookingButton";

const BookingCard = ({ item, onCancelBooking }) => {
  const { doctorName, designation, consultationFee, regNo } = item;

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-4 mb-4">
      {/* Doctor Details */}
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-bold">{doctorName}</h3>
          <p className="text-sm text-gray-600">{designation}</p>
        </div>

        <div>
          <p className="text-sm text-gray-600">
            Appointment Fee: {consultationFee} Taka + VAT
          </p>
        </div>
      </div>

      <hr className="my-2 border-dashed border-gray-300" />

      {/* Pass onCancelBooking function */}
      <CancelBookingButton regNo={regNo} onCancelBooking={onCancelBooking} />
    </div>
  );
};

export default BookingCard;
