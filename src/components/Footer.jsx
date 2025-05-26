import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Company Info */}
        <div className="text-center">
          <h3 className="text-xl font-bold mb-4">Dream Internship</h3>
          <p className="text-gray-400  ">
            Empowering your digital experience with modern, efficient solutions.
            Delivering value through technology.
          </p>
        </div>

        {/* Contact Info */}
        <div className="text-center">
          <h4 className="text-lg font-semibold mb-4 ">Contact Us</h4>
          <p className="text-gray-400 ">Email: support@yourcompany.com</p>
          <p className="text-gray-400 ">Phone: +91 778898989</p>
          <p className="text-gray-400 ">
            Address: 123 Business Street, Bilaspur, India
          </p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
