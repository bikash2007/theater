import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => {
 

  return (
    <header className="fixed top-0 w-full backdrop-blur-md bg-white/20 border-b border-white/30 shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-white text-2xl font-semibold">
          Logo
              </div>
              
        <NavLink to={'/auth'} className="px-5 py-2 bg-red-500 text-white font-medium rounded-md transition hover:bg-red-600">
          Sign Up
        </NavLink>
      </div>
     
    </header>
  );
};

export default Header;
