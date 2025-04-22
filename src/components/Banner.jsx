import React from 'react';
import BannerImage from '../assets/banner-img-1.png'
import BannerImage2 from '../assets/banner-img-2.png'


const Banner = () => {
    return (
        <div>
                  <div className="rounded-xl mt-10 max-w-6xl mx-auto p-12 border-4 border-white  text-center bg-gradient-to-b from-white/0 via-white/50 to-white/100">
                  <h1 className=" text-3xl font-bold">Dependable Care, Backed by Trusted Professionals.</h1>
            
                  <p className="font-light mt-4 text-sm">
                    Our platform connects you with verified, experienced doctors across
                    various specialties — all at your convenience. Whether it's a routine
                    checkup or urgent consultation, book appointments in minutes and receive
                    quality care you can trust.
                  </p>
            
                  {/* the search bar starts from here */}
                  <div className="mt-4 mb-4">
                    <label className="rounded-xl input">
                      <svg
                        className="h-[1em] opacity-50"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <g
                          strokeLinejoin="round"
                          strokeLinecap="round"
                          strokeWidth="2.5"
                          fill="none"
                          stroke="currentColor"
                        >
                          <circle cx="11" cy="11" r="8"></circle>
                          <path d="m21 21-4.3-4.3"></path>
                        </g>
                      </svg>
                      <input type="search"  placeholder="Search for Doctors" />
                    </label>
                    <button className="ml-2 rounded-xl btn bg-[#176AE5] text-white">Search</button>
                  </div>
                  {/* the search bar ends here */}
                 <div className="flex gap-4 mx-auto justify-center ">
                 <img className="w-[50%] rounded-xl" src={BannerImage} alt="" />
                 <img className="w-[50%] rounded-xl" src={BannerImage2} alt="" />
                 </div>
                </div>
        </div>
    );
};

export default Banner;