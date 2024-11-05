// AuthDashboard.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Login from './Login';
import Signup from './Signup';

const AuthDashboard = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-black flex items-center justify-center px-6">
      <div className="max-w-md w-full p-8 rounded-lg bg-white/10 backdrop-blur-lg shadow-lg">
        <h1 className="text-3xl text-center font-bold text-white mb-6">
          Welcome to The Grand Theater
        </h1>
        <AnimatePresence>
          {showLogin ? (
            <motion.div
              key="login"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Login />
            </motion.div>
          ) : (
            <motion.div
              key="signup"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Signup />
            </motion.div>
          )}
        </AnimatePresence>
        <div className="mt-6 text-center">
          <button
            onClick={() => setShowLogin(!showLogin)}
            className="text-white underline hover:text-red-400 transition-colors"
          >
            {showLogin ? "Don't have an account? Sign Up" : "Already have an account? Log In"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthDashboard;
