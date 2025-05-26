import React, { useState } from "react";
// import { internships } from "../data/internship";
import bg2 from "../assets/bg2.png";
import { MapPin, Building, Search } from "lucide-react"; 
import { motion } from "framer-motion"; 

const internshipss = [
  {
    title: "Frontend Developer Intern",
    company: "TechNova",
    location: "Remote",
  },
  {
    title: "UI/UX Design Intern",
    company: "DesignFlow",
    location: "Bangalore",
  },
  {
    title: "Backend Developer Intern",
    company: "DesignFlow",
    location: "Bangalore",
  },
  {
    title: "MERN Stack Developer Intern",
    company: "DesignFlow",
    location: "New Delhi",
  },
  {
    title: "Java Developer Intern",
    company: "DesignFlow",
    location: "Bangalore",
  },
  {
    title: "Python Developer Intern",
    company: "DesignFlow",
    location: "Pune",
  },
  {
    title: "Software Developer Intern",
    company: "Microsoft",
    location: "Noida",
  },
]

const Internships = () => {
  const [showAll, setShowAll] = useState(false);
  const [search, setSearch] = useState("");

  const filteredInternships = internshipss.filter((intern) =>
    `${intern.title} ${intern.location} ${intern.company}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );
  const displayInternships = showAll
    ? filteredInternships
    : filteredInternships.slice(0, 3);

  return (
    <div className=" min-h-screen bg-gradient-to-r from-gray-300 via-white to-sky-200" >
      <section className="max-w-5xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">
          🚀 Explore Exciting Internships
        </h2>       
        <div className="flex justify-center mb-10">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
               placeholder="Search by Role, Location, or Company..."
              className="w-full px-10 py-3 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-3 text-gray-500" size={20} />
          </div>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10 rounded-2xl bg-cover bg-center relative"
          style={{
            backgroundImage: `url(${bg2})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/60 backdrop-blur-sm rounded-2xl"></div>
          {displayInternships.length > 0 ? (
            displayInternships.map((intern, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="relative z-10 bg-white shadow-md rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:scale-105 transition-transform duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {intern.title}
                </h3>
                <p className="text-gray-600 flex items-center mb-1">
                  <Building size={16} className="mr-2 text-gray-500" />
                  {intern.company}
                </p>
                <p className="text-gray-600 flex items-center">
                  <MapPin size={16} className="mr-2 text-gray-500" />
                  {intern.location}
                </p>
                <button className="mt-4 bg-gradient-to-r from-blue-700 to-indigo-500/70 text-white px-4 py-2 rounded-lg shadow hover:opacity-90 transition cursor-pointer ">
                  View Details
                </button>
              </motion.div>
            ))
          ) : (
            <p className="relative z-10 text-center text-gray-600 col-span-3">
             😕 Oops! Couldn't find any internships. 🎯
            </p>
          )}
        </div>
        {!showAll && internshipss.length > 3 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="bg-blue-600/50 text-white px-6 py-2 rounded-lg hover:bg-blue-700/30 transition"
            >
              Show More
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Internships;
