// Signup.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Signup = () => {
  return (
    <form className="flex flex-col space-y-4">
      <motion.input
        type="text"
        placeholder="Full Name"
        className="p-3 rounded bg-gray-700 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.input
        type="email"
        placeholder="Email"
        className="p-3 rounded bg-gray-700 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.05 }}
      />
      <motion.input
        type="password"
        placeholder="Password"
        className="p-3 rounded bg-gray-700 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      />
      <motion.button
        type="submit"
        className="py-3 px-6 bg-red-500 rounded text-white font-bold transition transform hover:scale-105"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.15 }}
      >
        Sign Up
      </motion.button>
    </form>
  );
};

export default Signup;
