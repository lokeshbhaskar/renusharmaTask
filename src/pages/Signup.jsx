import React from "react";
import { motion } from "framer-motion";
import Card, { CardContent } from "../components/ui/Card";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

const Signup = ({ onSwitch }) => {
  return (
    <div className="min-h-[90vh]  flex items-center justify-center px-4 py-2 ">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-xl"
      >
        <Card className="w-full p-4 shadow-2xl rounded-2xl backdrop-blur-md bg-white/30 border border-white/20">
          <h2 className="text-2xl font-bold mb-2 text-center text-white drop-shadow-lg">
            Create Account
          </h2>
          <CardContent className="space-y-4">
            <div>
              <label className="text-white font-semibold block mb-1">Name</label>
              <Input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 rounded-lg bg-white/60 border border-white/40 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div>
              <label className="text-white font-semibold block mb-1">Email</label>
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded-lg bg-white/60 border border-white/40 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div>
              <label className="text-white font-semibold block mb-1">Password</label>
              <Input
                type="password"
                placeholder="Enter your password"
                className="w-full p-3 rounded-lg bg-white/60 border border-white/40 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <Button className="w-full mt-4 bg-indigo-500 hover:bg-indigo-600 text-gray-500 text-lg font-semibold py-3 rounded-xl transition duration-300">
              Sign Up
            </Button>

            <p className="text-center text-white mt-0">
              Already have an account?{" "}
              <span
                onClick={onSwitch}
                className="text-indigo-200 font-semibold underline hover:text-white cursor-pointer"
              >
                Log in
              </span>
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Signup;
