import React, { useState } from "react";
import { useEffect } from "react";


import LoadAllTheRegId from "./LoadAllTheRegId";

const Blogs = () => {
  const [activeIndex, setActiveIndex] = useState(null);


  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const [blogData, setBlogData] = useState([])

  useEffect(()=>{
    fetch('/BlogData.json')
    .then(res => res.json())
    .then(data => setBlogData(data))
  })

  // console.log(blogData)


  return (

    <div className="max-w-4xl mx-auto p-6">


{/* <LoadAllTheRegId></LoadAllTheRegId> */}


      <h1 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h1>
      <div className="space-y-2">
        {blogData.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Question */}
            <button
              onClick={() => toggleAnswer(index)}
              className="w-full text-left px-4 py-3 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition"
            >
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 transform transition-transform ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Answer */}
            {activeIndex === index && (
              <div className="px-4 py-3 text-gray-600 border-t">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;