// Signup.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Signup = () => {
  const [selectedMembership, setSelectedMembership] = useState('General');
  const [photo, setPhoto] = useState(null);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(URL.createObjectURL(file));
    }
  };

  return (
    <form className="flex flex-col space-y-4">
      {/* Profile Photo Section */}
      <div className="flex flex-col items-center mb-4">
        <motion.label
          className="relative cursor-pointer w-24 h-24 rounded-full border-2 border-dashed border-gray-500 flex items-center justify-center overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {photo ? (
            <img src={photo} alt="Profile" className="object-cover w-full h-full rounded-full" />
          ) : (
            <span className="text-gray-500 text-sm">Upload Photo</span>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
        </motion.label>
      </div>

      {/* Full Name */}
      <motion.input
        type="text"
        placeholder="Full Name"
        className="p-3 rounded bg-gray-700 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Email */}
      <motion.input
        type="email"
        placeholder="Email"
        className="p-3 rounded bg-gray-700 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.05 }}
      />

      {/* Phone Number */}
      <motion.input
        type="number"
        maxLength={10}
        placeholder="Phone number"
        className="p-3 rounded bg-gray-700 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.05 }}
      />

      {/* Password */}
      <motion.input
        type="password"
        placeholder="Password"
        className="p-3 rounded bg-gray-700 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      />

      {/* Confirm Password */}
      <motion.input
        type="password"
        placeholder="Confirm Password"
        className="p-3 rounded bg-gray-700 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      />

      {/* Membership Selection */}
      <motion.select
        value={selectedMembership}
        onChange={(e) => setSelectedMembership(e.target.value)}
        className="p-3 rounded bg-gray-700 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <option value="General">General</option>
        <option value="Premium">Premium</option>
      </motion.select>

      {/* Submit Button */}
      <motion.button
        type="submit"
        className="py-3 px-6 bg-red-500 rounded text-white font-bold transition transform hover:scale-105"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.15 }}
      >
        Sign Up as Member
      </motion.button>
    </form>
  );
};

export default Signup;
