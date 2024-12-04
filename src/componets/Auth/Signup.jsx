import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';
import { ApiContext } from '../../contex';
import { useNavigate } from 'react-router-dom';

const Signup = ({ setShowLogin }) => {
  const baseUrl = useContext(ApiContext); // Get the base URL from context
  const [photo, setPhoto] = useState(null);
  const navigate = useNavigate()
  // Destructure form methods from react-hook-form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  // Handle photo upload
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(file);
    }
  };

  // Form submission handler
  const onSubmit = async (data) => {
  console.log('Form Submitted:', data);

 

  // Create a FormData object to send with the PATCH request
  const formData = new FormData();
  formData.append('username', data.email); // Assuming `username` is the same as `email`
  formData.append('password', data.password); // Optional: Only if password update is needed
  formData.append('email', data.email);
  formData.append('first_name', data.firstName);
  formData.append('last_name', data.lastName);
  formData.append('phone', data.contact);
    if (photo) { formData.append('photo', photo); } // Append the photo file
  
  formData.append('is_active', true); // Updating membership type
  

  try {
    // Send PATCH request to the API
    const response = await axios.post(`${baseUrl}api/users/`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    console.log('Response from API:', response.data);
    toast.success('user register successfully!');
     navigate('/auth?view=login');
  } catch (error) {
    console.error('Update error:', error);
    toast.error(`Error updating profile: ${error.response?.data?.message || error.message}`);
  }
};


  return (
    <form
      onSubmit={(e) => {
        e.preventDefault(); // Prevent the default submit behavior to check for validation
        handleSubmit(onSubmit)(); // Call the handleSubmit function
        handleValidationError(); // Show validation errors in a toast
      }}
      className="flex flex-col mx-auto w-full"
    >
      {/* Profile Photo Section */}
      <div className="flex flex-col items-center mb-4">
        <motion.label
          className="relative cursor-pointer w-28 h-28 rounded-full border-2 border-dashed border-gray-500 flex items-center justify-center overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {photo ? (
            <img
              src={URL.createObjectURL(photo)}
              alt="Profile"
              className="object-cover w-full h-full rounded-full"
            />
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

      {/* Form Inputs for First Name and Last Name */}
      <div className="w-full gap-3 flex mt-2 justify-center">
        <motion.input
          type="text"
          placeholder="First Name"
          {...register('firstName', { required: 'First name is required' })}
          className={`px-3 rounded bg-gray-800 text-white w-full border h-10 ${
            errors.firstName ? 'border-red-500' : 'border-gray-600'
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        />
        <motion.input
          type="text"
          placeholder="Last Name"
          {...register('lastName', { required: 'Last name is required' })}
          className={`px-3 rounded bg-gray-800 h-10 text-white w-full border ${
            errors.lastName ? 'border-red-500' : 'border-gray-600'
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Form Inputs for Email */}
      <div className="w-full gap-3 flex mt-2 justify-center">
        <motion.input
          type="email"
          placeholder="Email"
          {...register('email', { required: 'Email is required' })}
          className={`p-3 rounded bg-gray-800 w-full text-white border ${
            errors.email ? 'border-red-500' : 'border-gray-600'
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.05 }}
        />
      </div>

      {/* Form Inputs for Contact and Membership */}
      <div className="w-full gap-3 flex mt-2 justify-center">
        <motion.input
          type="text"
          placeholder="Phone number"
          {...register('contact', { required: 'Contact number is required', maxLength: 10 })}
          className={`p-3 rounded bg-gray-800 text-white w-full border ${
            errors.contact ? 'border-red-500' : 'border-gray-600'
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.05 }}
        />
        
      </div>

      {/* Form Inputs for Password and Confirm Password */}
      <div className="w-full gap-3 flex mt-2 justify-center">
        <motion.input
          type="password"
          placeholder="Password"
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters'
            }
          })}
          className={`p-3 rounded bg-gray-800 text-white w-full border ${
            errors.password ? 'border-red-500' : 'border-gray-600'
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        />
        <motion.input
          type="password"
          placeholder="Confirm Password"
          {...register('confirmPassword', {
            required: 'Please confirm your password',
            validate: (value) =>
              value === watch('password') || 'Passwords do not match'
          })}
          className={`p-3 rounded bg-gray-800 text-white w-full border ${
            errors.confirmPassword ? 'border-red-500' : 'border-gray-600'
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        />
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        className="py-3 bg-red-600 rounded text-white font-bold transition transform hover:scale-105 w-full mt-4"
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
