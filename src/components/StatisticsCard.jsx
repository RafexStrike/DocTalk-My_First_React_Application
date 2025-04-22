import React, { useState, useRef } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { GiStethoscope } from 'react-icons/gi'; 
import { FaStar } from 'react-icons/fa'; 
import { BiUser } from 'react-icons/bi'; 
import { MdPeople } from 'react-icons/md'; 

const StatisticsCards = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  
  const { entry } = useInView({
    threshold: 0.5, 
    target: ref,
  });

  if (entry) {
    setIsVisible(entry.isIntersecting);
  }

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
      {/* Total Doctors */}
      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <GiStethoscope className="text-blue-500 text-3xl mb-2" />
        <CountUp
          start={0}
          end={199}
          duration={2.5}
          separator=","
          decimals={0}
          suffix="+"
          style={{ fontSize: '2rem', fontWeight: 'bold' }}
          enableScrollSpy
          scrollOffset={0}
          enabled={isVisible} 
        />
        <p className="text-gray-600 mt-2">Total Doctors</p>
      </div>

      {/* Total Reviews */}
      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <FaStar className="text-yellow-500 text-3xl mb-2" />
        <CountUp
          start={0}
          end={467}
          duration={2.5}
          separator=","
          decimals={0}
          suffix="+"
          style={{ fontSize: '2rem', fontWeight: 'bold' }}
          enableScrollSpy
          scrollOffset={0}
          enabled={isVisible} 
        />
        <p className="text-gray-600 mt-2">Total Reviews</p>
      </div>

      {/* Patients */}
      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <BiUser className="text-green-500 text-3xl mb-2" />
        <CountUp
          start={0}
          end={1900}
          duration={2.5}
          separator=","
          decimals={0}
          suffix="+"
          style={{ fontSize: '2rem', fontWeight: 'bold' }}
          enableScrollSpy
          scrollOffset={0}
          enabled={isVisible} 
        />
        <p className="text-gray-600 mt-2">Patients</p>
      </div>

      {/* Total Staffs */}
      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <MdPeople className="text-purple-500 text-3xl mb-2" />
        <CountUp
          start={0}
          end={300}
          duration={2.5}
          separator=","
          decimals={0}
          suffix="+"
          style={{ fontSize: '2rem', fontWeight: 'bold' }}
          enableScrollSpy
          scrollOffset={0}
          enabled={isVisible} 
        />
        <p className="text-gray-600 mt-2">Total Staffs</p>
      </div>
    </div>
  );
};

export default StatisticsCards;