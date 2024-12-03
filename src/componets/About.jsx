import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import overlay from '../Media/overlay.png';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const About = () => {
  
  const leftRef = useRef()
  const rightRef = useRef()
  const upRef = useRef()
  useGSAP(() => {
    gsap.from(leftRef.current, {
      x: -400,
      duration:2
      
    })
    gsap.from(rightRef.current, {
      x: 400,
      duration:3
      
    })
   
    gsap.from(upRef.current, {
      y: 100,
      duration:1
      
    })
  })

  return (
    <>
      {/* About Section */}
      <div
        className="w-full flex flex-col min-h-64 mt-12 justify-center gap-4 py-9 items-center border-b-2 hover:border-cyan-400 transition-all ease-in-out duration-200 border-white text-white bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${overlay})` }}
        
      
      >
        <h2  className=" barlow-regular text-4xl font-semibold" >
          Inroduction
        </h2>
        <p 
          className="max-w-2xl text-neutral-200 poppins-regular text-center"
        >
          The Hansadhwani Theatre is proud to introduce an exclusive membership
scheme aimed at fostering a deeper connection between the theatre and its loyal patrons. As
part of our commitment to enriching the arts and culture scene in Pokhara, this initiative offers
diverse membership tiers that cater to varying levels of engagement and support.
        </p>
      </div>
    
      {/* Mission Section */}
      <div className="flex flex-col relative overflow-hidden   hover:border-cyan-400 transition-all ease-in-out duration-200 border-white p-2" >
        <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
        <div
          className="w-full flex min-h-64 mt-12 justify-start gap-4 py-9 items-center text-white">
          <div
            ref={leftRef}
            className="bg-zinc-900 border-b-2 hover:border-cyan-400 transition-all ease-in-out duration-200 gap-5 px-11 py-6 flex flex-col items-center rounded-lg shadow-lg"
          >
            <h2 className=" barlow-regular text-4xl font-semibold">Objective</h2>
            <p className="max-w-4xl text-neutral-200 poppins-regular text-center">
              The primary objective of this membership scheme is to cultivate a community of
theatre enthusiasts who value consistent, quality theatrical productions and wish to actively
contribute to the sustainability and growth of local performing arts. The scheme will also provide
members with special privileges that enhance their overall experience at Hansadhwani
Theatre.
            </p>
          </div>
        </div>

        {/* Core Values Section */}
        <div
          className="w-full flex min-h-64 mt-12 justify-end gap-4 py-9 items-center text-white"
          
        >
          <div
            ref={rightRef}
            className="bg-zinc-900 gap-5 px-11 py-6 border-b-2 hover:border-cyan-400 transition-all ease-in-out duration-200 flex flex-col items-center rounded-lg shadow-lg"
          >
            <h2 className=" barlow-regular text-4xl font-semibold">Conclusion:</h2>
            <p className="max-w-4xl text-neutral-200 poppins-regular  text-center">
              The Hansadhwani Theatre Membership Scheme is an invitation to become part
of an inspiring journey. It aims to create a collaborative and supportive community while offering
unique opportunities to experience theatre in new and meaningful ways. This initiative embodies
our belief that theatre is more than just a performance—it is a shared celebration of stories that
connect us all.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div
          className="w-full flex justify-center mt-12"
        >
          <img
            src="http://i.imgur.com/CVRfKqj.jpg"
            alt="Hansadhwani Theater"
            className="rounded-lg shadow-lg max-w-4xl"
          />
        </div>
      </div>
    </>
  );
};

export default About;
