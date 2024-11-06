// Header.jsx
import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { auth } from './Auth/Firebase';
import { signOut } from 'firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const token = localStorage.getItem('token');
    const name = localStorage.getItem('name');
    const photo = localStorage.getItem('photo');
    const navigate = useNavigate();
    const dropdownRef = useRef(null);

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            localStorage.clear();
            setDropdownOpen(false);
            navigate('/auth');
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    const toggleDropdown = () => setDropdownOpen((prev) => !prev);
    const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

    // Close dropdown if clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <header className="fixed top-0 w-full backdrop-blur-md bg-black/20 border-b border-white/30 shadow-lg z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                {/* Logo */}
                <div className="text-white text-3xl font-bold">
                    Grand Theater
                </div>
                
                {/* Mobile Menu Toggle */}
                <button 
                    className="text-white md:hidden" 
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu"
                >
                    <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} size="lg" />
                </button>
                
                {/* Desktop Navigation */}
                <nav className={`md:flex space-x-6 items-center ${mobileMenuOpen ? 'flex flex-col md:flex-row mt-4 md:mt-0' : 'hidden md:flex'}`}>
                    <NavLink to="/" className="text-white text-lg font-medium hover:text-red-500">Home</NavLink>
                    <NavLink to="/about" className="text-white text-lg font-medium hover:text-red-500">About</NavLink>
                    <NavLink to="/tickets" className="text-white text-lg font-medium hover:text-red-500">Tickets</NavLink>
                </nav>

                {/* User Info or Auth Buttons */}
                {token ? (
                    <div className="relative" ref={dropdownRef}>
                        <button onClick={toggleDropdown} className="flex items-center gap-2">
                            <img src={photo} alt="User" className="w-10 h-10 rounded-full"/>
                            <h1 className="text-white">{name}</h1>
                        </button>
                        {dropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
                                <button 
                                    onClick={handleSignOut}
                                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                                >
                                    Sign Out
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className={`flex space-x-4 ${mobileMenuOpen ? 'flex-col items-center mt-4 md:mt-0' : 'flex-row'}`}>
                        <button 
                            onClick={() => {
                                navigate('/auth?view=login');
                                setMobileMenuOpen(false);
                            }}
                            className="px-6 py-2 bg-blue-600 text-white text-lg font-semibold rounded-md hover:bg-blue-700"
                        >
                            Login
                        </button>
                        <button 
                            onClick={() => {
                                navigate('/auth?view=signup');
                                setMobileMenuOpen(false);
                            }}
                            className="px-6 py-2 bg-red-600 text-white text-lg font-semibold rounded-md hover:bg-red-700"
                        >
                            Become a Member
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
