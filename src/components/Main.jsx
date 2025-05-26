import React from "react";
import bg from '../assets/internship.png'

const Main = () => {
  return (
    <div>
      <section
        className="relative text-white py-28 text-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg})` ,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-blue-900/70 to-purple-800/60 "></div>
        <div className="relative z-10 px-2 md:px-10">
          <h1 className="text-4xl md:text-7xl font-extrabold mb-6 text-yellow-400 drop-shadow-xl ">
            Find Your Dream Internship
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 font-medium ">
           Unlock exclusive internship opportunities and shape your ambitions into a successful future.
          </p>
          {/* <button className="mt-4 px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full shadow-lg  ">
            Get Started
          </button> */}
        </div>
      </section>
    </div>
  );
};

export default Main;
