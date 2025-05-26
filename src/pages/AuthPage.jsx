import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import img from "../assets/img.jpg";

const AuthPage = () => {
  const [view, SetView] = useState("login");
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && <Navbar />}
      <div className="auth-container min-h-[90vh] bg-gradient-to-r from-sky-100 via-indigo-200 to-indigo-300 flex flex-row items-center justify-center ">
        <div className="md:w-1/2 w-full flex justify-center">
          {view === "login" ? (
            <div className="flip-animation" key={view}>
              <Login onSwitch={() => SetView("signup")} />
            </div>
          ) : (
            <div className="flip-animation" key={view}>
              <Signup onSwitch={() => SetView("login")} />
            </div>
          )}
        </div>
        <div className="hidden md:flex md:w-1/2 justify-center">
          <div
            className="w-4/5 h-[450px] rounded-xl shadow-xl"
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default AuthPage;
