// Footer.jsx
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { motion } from 'framer-motion';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';

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
            <span>123 Theater Lane, Kathmandu, Nepal</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <FontAwesomeIcon icon={faPhone} className="text-teal-400" />
            <span>+977 123456789</span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faEnvelope} className="text-teal-400" />
            <span>info@nepalitheater.com</span>
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
            <li><a href="/shows" className="hover:text-teal-400 transition">Shows</a></li>
            <li><a href="/tickets" className="hover:text-teal-400 transition">Tickets</a></li>
            <li><a href="/events" className="hover:text-teal-400 transition">Events</a></li>
            <li><a href="/contact" className="hover:text-teal-400 transition">Contact Us</a></li>
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
            <a href="https://facebook.com" aria-label="Facebook" className="hover:scale-105  hover:text-teal-400 transform transition">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className="hover:scale-105  hover:text-teal-400transform transition">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="hover:scale-105  hover:text-teal-400transform transition">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a href="https://youtube.com" aria-label="YouTube" className="hover:scale-105  hover:text-teal-400transform transition">
              <FontAwesomeIcon icon={faYoutube} size="lg" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div className="w-full bg-black h-14 text-white flex items-center justify-center border-t border-teal-500">
              Website Developed and Maintained by: 
              <span className='text-red-700 font-medium text-lg ml-2' >
                  RAN
              </span>
      </div>
    </>
  );
};

export default Footer;
