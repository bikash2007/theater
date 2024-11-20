// Footer.jsx
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { motion } from 'framer-motion';
import { faFacebook, faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { NavLink } from 'react-router-dom';
import logo from '../Media/logo.jpg';

const Footer = () => {
  return (
    <>
      <div className="w-full bg-[#080C13] z-50 px-6 py-10 gap-10 text-white flex flex-wrap justify-evenly">
        

        {/* About Section */}
        <motion.div 
          className="w-full md:w-fit" 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h4 className="font-semibold text-lg mb-4">About Us</h4>
           <img src={logo} className='h-12' alt="logo" srcset="" />
          <p className="text-gray-400 max-w-xs">
            Nepali Grand Theater celebrates the magic of cinema, bringing stories from across the world and Nepal to life.
          </p>
        </motion.div>

        {/* Contact Section */}
        <motion.div 
          className="w-full md:w-fit" 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          <h4 className="font-semibold text-lg mb-4">Contact</h4>
          <div className="flex items-center gap-2 mb-2">
            <FontAwesomeIcon icon={faLocationDot} className="text-teal-400" />
            <a href='https://www.google.com/maps/place/Hansadhwani+Theatre/@28.2308845,83.9881044,17z/data=!4m6!3m5!1s0x399595d3cc1bd82d:0x6bf4b25b7a24d4cf!8m2!3d28.2312705!4d83.9880273!16s%2Fg%2F11y5jf5q3z?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D'> V. C. Marga, Pokhara 33700</a>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <FontAwesomeIcon icon={faPhone} className="text-teal-400" />
            <span> +977 9767981234</span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faEnvelope} className="text-teal-400" />
            <span> hansadhwanitheatre@gmail.com</span>
          </div>
              </motion.div>
              
        {/* Links Section */}
        <motion.div 
          className="w-full md:w-fit" 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
          <ul className="text-gray-400 space-y-2">
            <li><NavLink to="/" className="hover:text-teal-400 transition">home</NavLink></li>
            <li><NavLink to="/about" className="hover:text-teal-400 transition">about</NavLink></li>
            <li><NavLink to="/ticket" className="hover:text-teal-400 transition">ticket</NavLink></li>
            <li><NavLink to="/auth" className="hover:text-teal-400 transition">Membership</NavLink></li>
          </ul>
        </motion.div>

        {/* Social Media Section */}
        <motion.div 
          className="w-full md:w-fit" 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
          <div className="flex gap-4 text-white">
            <a href="https://www.facebook.com/hansadhwanitheatre" aria-label="Facebook" className="hover:scale-105  hover:text-teal-400 transform transition">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            
            <a href="https://www.instagram.com/hansadhwanitheatre
" aria-label="Instagram" className="hover:scale-105 transform hover:text-teal-400  transition">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a href="https://www.tiktok.com/@hansadhwani " aria-label="Tiktok" className="hover:scale-105  hover:text-teal-400 transform transition">
              <FontAwesomeIcon icon={faTiktok} size="lg" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div className="w-full bg-black h-14 text-white flex items-center justify-center border-t border-teal-500">
        Website Developed and Maintained by: 
        <span>

              <a href='https://ran.edu.np/' target='_main' className='text-red-700 font-medium text-lg ml-2' >
                  RAN
              </a>
        </span>
      </div>
    </>
  );
};

export default Footer;