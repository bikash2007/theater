// Home.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

import img from '../Media/drama.png'
const Home = () => {
  const [bgImage, setBgImage] = useState('https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2024/third-party/Untitled4-1726883883.jpg&w=900&height=601'); // Default image
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Fetch the initial background image from the API
  //   const fetchBackgroundImage = async () => {
  //     try {
  //       const response = await axios.get('/api/background-image'); // Adjust the API endpoint
  //       setBgImage(response.data.imageUrl); // Assuming the response has an imageUrl property
  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Error fetching the background image:", error);
  //       setLoading(false);
  //     }
  //   };

  //   fetchBackgroundImage();
  // }, []);

  const handleChangeBackground = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/api/background-image'); // Change this endpoint as needed
      setBgImage(response.data.imageUrl); // Update state with new image URL
    } catch (error) {
      console.error("Error changing the background image:", error);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <section
        className={`relative flex items-center justify-center h-screen bg-cover bg-center bg-no-repeat ${loading ? 'bg-gray-800' : ''}`}
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div> {/* Dark overlay */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 poppins-regular">Welcome to <span className='text-[#FAAD17]'>Hansadhwani</span>  Theatre</h1>
          <p className="text-xl md:text-2xl mb-8 ">Experience the magic of cinema and culture under one roof.</p>
          {/* <button onClick={handleChangeBackground} className="px-8 py-3 bg-red-500 rounded-full text-white font-semibold transition hover:bg-red-600 transform hover:scale-105">
            Change Background
          </button> */}
        </motion.div>
      </section>

      {/* Featured Shows */}
      <section className="py-20">
        <h2 className="text-4xl font-bold text-center mb-10">Featured Shows</h2>
        <div className="flex gap-6 overflow-x-auto px-6">
          {[1, 2, 3, 4].map((show, index) => (
            <motion.div
              key={index}
              className="min-w-[300px] bg-gray-800 rounded-lg p-5 shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <img src={img} alt={`Show ${show}`} className="w-full h-56 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Show Title {show}</h3>
              <p className="text-gray-400">Join us for an unforgettable experience featuring the best of Nepali and international cinema.</p>
              <button className="mt-4 w-full py-2 bg-red-500 rounded text-white font-medium hover:bg-red-600">Buy Tickets</button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="bg-center bg-cover relative w-full py-20 text-center "
          style={{background:`url(https://img.freepik.com/free-photo/cinema-with-popcorn-box-3d-glasses_23-2148133632.jpg?t=st=1732619136~exp=1732622736~hmac=1d7e75463efb6ea693f373f4e0d8c181e3f9def6c7ffd82ac637f8eb02aad252&w=740)`}}
      >
        <div className='absolute top-0 h-full w-full -z-10 bg-black/40 '></div>
        <motion.div
          className="max-w-3xl mx-auto z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6  ">About us</h2>
          <p className="text-lg text-gray-300 mb-6">
           The Hansadhwani Theatre Membership Scheme is an invitation to become part
of an inspiring journey. It aims to create a collaborative and supportive community while offering
unique opportunities to experience theatre in new and meaningful ways. This initiative embodies
our belief that theatre is more than just a performance—it is a shared celebration of stories that
connect us all.
          </p>
          <NavLink to={'/about'} className="px-6 py-3 bg-red-500 rounded-full text-white font-semibold transition hover:bg-red-600 transform hover:scale-105">
            Learn More
          </NavLink>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
