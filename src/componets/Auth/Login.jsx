import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { ApiContext } from '../../contex';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const baseUrl = useContext(ApiContext);
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState('');
  const [userPass, setUserPass] = useState('');
  const [loading, setLoading] = useState(false); // State to track loading

  const onSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload on form submit

    if (!userEmail || !userPass) {
      toast.error("Please fill in both email and password fields.");
      return;
    }

    const formData = new FormData();
    formData.append('email', userEmail);
    formData.append('password', userPass);

    setLoading(true); // Set loading to true before making the request

    try {
      const response = await axios.post(`${baseUrl}api/users/login/`, formData);
      
      if (response.status === 200) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userId', response.data.user_id);
        localStorage.setItem('staff', response.data.is_staff);
        localStorage.setItem('superUser', response.data.is_superuser);
        toast.success('Login successful!');
        navigate('/');
        window.location.reload()
      } else {
        toast.error('Unexpected response from server.');
      }
    } catch (error) {
      console.error(error);
      toast.error('Invalid email or password.');
    } finally {
      setLoading(false); // Set loading to false after the request is done
    }
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col space-y-4">
      <motion.input
        type="email"
        placeholder="Email"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
        className="p-3 rounded bg-gray-700 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.input
        type="password"
        placeholder="Password"
        value={userPass}
        onChange={(e) => setUserPass(e.target.value)}
        className="p-3 rounded bg-gray-700 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.05 }}
      />
      
      {/* Loader */}
      {loading ? (
        <div className="flex justify-center items-center py-3">
          <div className="w-6 h-6 border-4 border-t-4 border-red-500 border-solid rounded-full animate-spin"></div>
        </div>
      ) : (
        <motion.button
          type="submit" // Use type="submit" to trigger form submission
          className="py-3 px-6 bg-red-500 rounded text-white font-bold transition transform hover:scale-105"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          Log In
          </motion.button>
          
      )}
    </form>
  );
};

export default Login;
