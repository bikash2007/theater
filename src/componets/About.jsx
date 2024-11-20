import React from 'react';
import { motion } from 'framer-motion';
import overlay from '../Media/overlay.png';

const About = () => {
  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.2 } },
  };

  const slideUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const slideLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const slideRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const zoomIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <>
      {/* About Section */}
      <motion.div
        className="w-full flex flex-col min-h-64 mt-12 justify-center gap-4 py-9 items-center text-white bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${overlay})` }}
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 className="underline titan-one-regular text-4xl font-semibold" variants={slideUp}>
          About Hansadhwani Theater
        </motion.h2>
        <motion.p
          className="max-w-xl text-neutral-200 poppins-regular text-center"
          variants={slideUp}
        >
          Hansadhwani Theater is a hub of cultural vibrancy, celebrating art, 
          music, and theatrical excellence. Established with the vision to 
          nurture creativity and provide a stage for diverse voices, 
          Hansadhwani stands as a beacon for artistic expression.
        </motion.p>
      </motion.div>

      {/* Mission Section */}
      <div className="flex flex-col bg-zinc-900">
        <motion.div
          className="w-full flex min-h-64 mt-12 justify-start gap-4 py-9 items-center text-white"
          variants={slideLeft}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="bg-black gap-5 px-11 py-6 flex flex-col items-center rounded-lg shadow-lg"
            variants={zoomIn}
          >
            <h2 className="underline titan-one-regular text-4xl font-semibold">Our Mission</h2>
            <p className="max-w-4xl text-neutral-200 poppins-regular text-center">
              To create a dynamic platform that bridges tradition and modernity, 
              nurturing talent and connecting communities through the performing arts.
            </p>
          </motion.div>
        </motion.div>

        {/* Core Values Section */}
        <motion.div
          className="w-full flex min-h-64 mt-12 justify-end gap-4 py-9 items-center text-white"
          variants={slideRight}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="bg-black gap-5 px-11 py-6 flex flex-col items-center rounded-lg shadow-lg"
            variants={zoomIn}
          >
            <h2 className="underline titan-one-regular text-4xl font-semibold">Our Core Values</h2>
            <p className="max-w-4xl text-neutral-200 poppins-regular text-center">
              We value inclusivity, creativity, and cultural preservation. 
              Our commitment is to inspire and engage audiences through high-quality performances.
            </p>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-full flex justify-center mt-12"
          variants={zoomIn}
          initial="hidden"
          animate="visible"
        >
          <img
            src="http://i.imgur.com/CVRfKqj.jpg"
            alt="Hansadhwani Theater"
            className="rounded-lg shadow-lg max-w-4xl"
          />
        </motion.div>
      </div>
    </>
  );
};

export default About;
