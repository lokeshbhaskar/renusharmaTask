import React from "react";
import Main from "../components/Main";
import Internships from "../components/Internships";
import Testimonials from "../components/Testimonials";
import Login from "./Login";
import AuthPage from "./AuthPage";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Companies from "../components/Companies";

const LandingPage = () => {
  return (
    <div className="">
      <Navbar />
      <Main />
      <Internships />
      <Companies />
      <Testimonials />
      {/* <AuthPage /> */}
      <Footer />
    </div>
  );
};

export default LandingPage;
