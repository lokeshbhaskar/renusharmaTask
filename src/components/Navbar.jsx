import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { RiAccountCircleFill } from "react-icons/ri";
import { IoHomeOutline } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home", icon: <IoHomeOutline size={20} /> },
    { to: "/authpage", label: "Account", icon: <RiAccountCircleFill size={22} /> },
  ];

  return (
    <nav className="w-full top-0 left-0 z-50 backdrop-blur-md bg-[#FAF5EF] border-b border-white/20 sticky">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        
        <Link to="/" className="flex items-center gap-2 text-gray-700 font-bold text-xl tracking-widest">
          🚀 Dream Internship
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-gray-500 text-xl font-medium relative transition-all duration-300 ${
                location.pathname === link.to ? "after:w-full" : "after:w-0"
              } after:content-[''] after:block after:h-[2px] after:bg-yellow-400 after:transition-all after:duration-300 after:absolute after:bottom-0 after:left-0 hover:after:w-full`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-cyan-800/90 to-indigo-900/90 px-6 py-4 space-y-4 animate-slideDown">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 text-white text-lg hover:text-yellow-300 transition"
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
