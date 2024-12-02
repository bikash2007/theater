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
        <motion.h2 className=" titan-one-regular text-4xl font-semibold" variants={slideUp}>
          Inroduction
        </motion.h2>
        <motion.p
          className="max-w-2xl text-neutral-200  text-center"
          variants={slideUp}
        >
          The Hansadhwani Theatre is proud to introduce an exclusive membership
scheme aimed at fostering a deeper connection between the theatre and its loyal patrons. As
part of our commitment to enriching the arts and culture scene in Pokhara, this initiative offers
diverse membership tiers that cater to varying levels of engagement and support.
        </motion.p>
      </motion.div>

      {/* Mission Section */}
      <div className="flex flex-col bg-center bg-cover" style={{background:`url()`}}>
        <motion.div
          className="w-full flex min-h-64 mt-12 justify-start gap-4 py-9 items-center text-white"
          variants={slideLeft}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="bg-zinc-900  gap-5 px-11 py-6 flex flex-col items-center rounded-lg shadow-lg"
            variants={zoomIn}
          >
            <h2 className=" titan-one-regular text-4xl font-semibold">Objective</h2>
            <p className="max-w-4xl text-neutral-200  text-center">
              The primary objective of this membership scheme is to cultivate a community of
theatre enthusiasts who value consistent, quality theatrical productions and wish to actively
contribute to the sustainability and growth of local performing arts. The scheme will also provide
members with special privileges that enhance their overall experience at Hansadhwani
Theatre.
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
            className="bg-zinc-900 gap-5 px-11 py-6 flex flex-col items-center rounded-lg shadow-lg"
            variants={zoomIn}
          >
            <h2 className=" titan-one-regular text-4xl font-semibold">Conclusion:</h2>
            <p className="max-w-4xl text-neutral-200  text-center">
              The Hansadhwani Theatre Membership Scheme is an invitation to become part
of an inspiring journey. It aims to create a collaborative and supportive community while offering
unique opportunities to experience theatre in new and meaningful ways. This initiative embodies
our belief that theatre is more than just a performance—it is a shared celebration of stories that
connect us all.
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
