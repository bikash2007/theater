import React from 'react';
import { motion } from 'framer-motion';

const Ticket = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-black via-gray-800 to-black text-white relative overflow-hidden">
      {/* Animated Curtains with Texture */}
      <motion.div
        className="absolute top-0 left-0 h-full w-1/2 bg-red-800 bg-cover z-10"
        style={{
          backgroundImage: `url('https://imgs.search.brave.com/-tYExRDonK83g35szMyh86xCpaIPk_MsnhiH4YDs23g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1Lzg5Lzc3LzA1/LzM2MF9GXzU4OTc3/MDU1MV9WanFYdXZB/REEwNlpzYUNGamxK/QU1XRzBjZnp3YlZz/ci5qcGc')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        transition={{ duration: 1, type: 'spring', stiffness: 80 }}
      ></motion.div>
      <motion.div
        className="absolute top-0 right-0 h-full w-1/2 bg-red-800 bg-cover z-10"
        style={{
          backgroundImage: `url('https://imgs.search.brave.com/-tYExRDonK83g35szMyh86xCpaIPk_MsnhiH4YDs23g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1Lzg5Lzc3LzA1/LzM2MF9GXzU4OTc3/MDU1MV9WanFYdXZB/REEwNlpzYUNGamxK/QU1XRzBjZnp3YlZz/ci5qcGc')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        transition={{ duration: 1, type: 'spring', stiffness: 80 }}
      ></motion.div>

      {/* Spotlight Animation */}
      <motion.div
        className="absolute w-[400px] h-[400px] bg-gradient-radial from-white/20 via-white/10 to-transparent rounded-full z-0"
        initial={{ scale: 0 }}
        animate={{ scale: 1.2 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      ></motion.div>

      {/* Content */}
      <motion.div
        className="relative z-20 text-center backdrop-blur-md rounded-xl px-4 py-3 "
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-wider">
          Page Under Construction
        </h1>
        <p className="mt-4 text-lg md:text-xl font-light">
          We’re preparing something amazing for you! Please check back soon.
        </p>
      </motion.div>
    </div>
  );
};

export default Ticket;
