import React, { useState, useEffect } from "react";
import BookingCard from "./BookingCard";
import BookingRechart from "./BookingRechart";

const MyBooking = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("doctorBookings")) || [];
    setItems(storedItems);
  }, []);

  const handleCancelBooking = (regNo) => {
    const updatedItems = items.filter(item => item.regNo !== regNo);
    setItems(updatedItems); 
    localStorage.setItem("doctorBookings", JSON.stringify(updatedItems)); 
  };

  return (
    <div>
      {items.length !== 0 && <BookingRechart items={items} />}

      <div className="mt-10 text-center">
        <h1 className="font-semibold text-3xl">My Today Appointments</h1>
        <p className="mt-4 mb-10 font-light">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience.
        </p>
      </div>

      {items.map(item => (
        <BookingCard 
          key={item.regNo} 
          item={item} 
          onCancelBooking={handleCancelBooking}
        />
      ))}
    </div>
  );
};

export default MyBooking;
