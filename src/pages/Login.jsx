import React from "react";
import { motion } from "framer-motion";
import Card, { CardContent } from "../components/ui/Card";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

const Login = ({ onSwitch }) => {
  return (
    <div className="h-auto flex items-center justify-center  px-4 sm:px-6 ">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-full  p-6 sm:p-8 shadow-2xl rounded-2xl backdrop-blur-lg bg-white/30 border border-white/20">
          <h2 className="text-3xl font-bold mb-6 text-center text-white drop-shadow-lg">
            Login
          </h2>
          <CardContent className="space-y-5">
            <div>
              <label className="block text-white font-semibold mb-2">
                Email
              </label>
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded-lg border-gray-400 bg-white/50 backdrop-blur-md text-gray-800"
              />
            </div>
            <div>
              <label className="block text-white font-semibold mb-2">
                Password
              </label>
              <Input
                type="password"
                placeholder="Enter your password"
                className="w-full p-3 rounded-lg border-gray-400 bg-white/50 backdrop-blur-md text-gray-800"
              />
            </div>
            <Button className="w-full mt-4 bg-white/30 hover:bg-white/50 text-gray-500 text-lg font-medium py-3 rounded-xl shadow-md backdrop-blur-md transition duration-300">
              Login
            </Button>
            <p className="text-center text-white mt-4">
              Don't have an account?{" "}
              <span
                onClick={onSwitch}
                className="text-white font-semibold underline hover:text-gray-200 cursor-pointer"
              >
                Sign Up
              </span>
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Login;
