import React from "react";
import StatisticsCards from "./StatisticsCard";

const Review = () => {
  return (
    <div>
      <div>
        <h3 className="text-center text-3xl font-bold">
          We Provide Best Medical Services
        </h3>
        <p className="mt-4  text-center text-sm font-light">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience.
        </p>
        <div>
            <StatisticsCards></StatisticsCards>
        </div>
      </div>
    </div>
  );
};

export default Review;
