import React, { useState } from "react";
import { testimonials } from "../data/testimo";
import { motion } from "framer-motion";
import Button from "./ui/Button";

const testimonialss = [
  {
    name: "Aarav Mehta",
    feedback:
      "This platform helped me land my first internship with ease. Highly recommended!",
    position: "Software Developer Intern",
    stars: "★★★★"
  },
  {
    name: "Sneha Kapoor",
    feedback: "User-friendly and filled with great opportunities!",
    position: "Marketing Intern",
    stars: "★★★★★"
  },
  {
    name: "Riya Sharma",
    feedback:
      "The application process was seamless, and I got multiple interview calls within a week!",
    position: "HR Intern",
    stars:"★★★"
  },
  {
    name: "Kabir Singh",
    feedback:
      "Excellent platform for freshers looking to gain real-world experience.",
    position: "Data Science Intern",
    stars:"★★★★★"
  },
  {
    name: "Ananya Iyer",
    feedback:
      "Great selection of internships across top companies. Helped me boost my confidence!",
    position: "Campus Ambassador",
    stars:"★★★★"
  },
  {
    name: "Vivaan Khanna",
    feedback:
      "A must-use platform for students! The guidance resources were very helpful.",
    position: "Finance Intern",
    stars:"★★★★"
  },
]

const Testimonials = () => {
  const [showAll, setShowAll] = useState(false);
  const displaytestimonials = showAll ? testimonialss : testimonialss.slice(0, 3);

  return (
    <div>
      <section className="bg-gradient-to-r from-indigo-50 to-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10 text-gray-800">
            What Our Interns Say❤️
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {displaytestimonials.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  {/* Avatar Placeholder */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-400 to-blue-500 text-white flex items-center justify-center text-lg font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-800">{t.name}</p>
                    <p className="text-yellow-500 text-sm">{t.stars}</p>
                  </div>
                </div>
                <p className="italic text-gray-600 leading-relaxed mb-4">
                  "{t.feedback}"
                </p>
                <p className="text-right text-gray-500 text-sm">
                  — {t.position || "Happy User"}
                </p>
              </motion.div>
            ))}
          </div>
          {!showAll && testimonialss.length > 3 && (
            <div className="mt-8 text-center">
              <button
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                onClick={() => setShowAll(true)}
              >
                Show More
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
