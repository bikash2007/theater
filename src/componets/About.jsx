// About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import bg from '../Media/about.jpg';
import img from '../Media/theater.jpg'
const About = () => {
  return (
    <div className="relative w-full min-h-screen bg-center bg-cover text-white flex items-center justify-center" style={{background:`url(${bg})`}}>
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-cover bg-center opacity-60" style={{ backgroundImage: `url(${bg})` }} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-90"></div>

      {/* Content Wrapper */}
      <div className="relative max-w-5xl mx-auto px-6 py-16 text-center flex flex-col items-center space-y-10">
        
        {/* Animated Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-red-600 mb-4 mt-14 font-[Playfair Display]"
        >
          About Nepali Grand Theater
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed font-[Libre Baskerville]"
        >
          The Nepali Grand Theater celebrates the essence of drama and storytelling, blending traditional Nepali culture with modern theatrical elements. From vibrant folk tales to inspiring modern performances, our theater is a place where art and heritage come alive.
        </motion.p>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center space-y-4"
        >
          <h3 className="text-3xl font-semibold text-red-600 font-[Playfair Display]">Our Mission</h3>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto font-[Libre Baskerville]">
            To honor and promote the rich cultural legacy of Nepal by creating immersive and transformative theatrical experiences that inspire, educate, and connect our diverse audiences.
          </p>
        </motion.div>

        {/* Core Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center space-y-4"
        >
          <h3 className="text-3xl font-semibold text-red-600 font-[Playfair Display]">Our Core Values</h3>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto font-[Libre Baskerville]">
            Passion, Authenticity, Inclusivity, and Excellence. These values guide every performance and initiative, from script to stage.
          </p>
        </motion.div>

        {/* History Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-center space-y-4"
        >
          <h3 className="text-3xl font-semibold text-red-600 font-[Playfair Display]">Our History</h3>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto font-[Libre Baskerville]">
            Established in 1985, Nepali Grand Theater has been a cultural landmark, evolving with the times while staying true to its roots. Over the decades, we've hosted performances that blend traditional Nepali folk tales with contemporary storytelling, fostering a creative haven for artists across generations.
          </p>
        </motion.div>

        {/* Animated Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="w-full md:w-3/4 lg:w-2/3 relative shadow-lg rounded-lg overflow-hidden"
        >
          <img
            src={img}
            alt="Nepali Theater Scene"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Overlayed Quote or Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-black/60 py-3 px-6 rounded-lg text-center font-[Libre Baskerville]"
        >
          <p className="text-red-600 italic font-medium">
            "Bringing stories from the heart of Nepal to life on stage."
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
