import React from "react";
import flipkart from "../assets/flipkart.png";
import makemytrip from "../assets/makemy.jpg";
import myntra from "../assets/myntra.jpg";
import redbus from "../assets/redbus.webp";
import netflix from "../assets/netflix.png";

const Companies = () => {
  const companyLogos = [
    { name: "Flipkart", img: flipkart },
    { name: "MakeMyTrip", img: makemytrip },
    { name: "Myntra", img: myntra },
    { name: "RedBus", img: redbus },
    { name: "Netflix", img: netflix },
  ];
  return (
    <div className="bg-orange-50 py-12 px-4 sm:px-10">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-4 ">
        More than 50k recruiters from leading tech companies are hiring
      </h2>
      <div className="grid  sm:grid-cols-1 md:grid-cols-4 gap-6 items-center justify-center ">
        {companyLogos.map((comp, index) => (
          <div
            key={index}
            className="flex justify-center items-center transition-transform hover:scale-105 gap-4"
          >
            <img 
            src={comp.img} 
            alt={comp.name}
             className='w-24 sm:w-28 md:w-32 object-contain rounded-lg cursor-pointer '
            />
            <p className="text-gray-700 font-medium" > {comp.name} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
