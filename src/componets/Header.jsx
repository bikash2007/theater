import React, { useState, useEffect, useRef, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSignOut, faTimes } from '@fortawesome/free-solid-svg-icons';
import logo from '../Media/whiteLogo.png';
import axios from 'axios';
import { ApiContext } from '../contex';

const Header = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isMembershipPopupVisible, setMembershipPopupVisible] = useState(false);
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const superUser = localStorage.getItem('superUser');
    const staff = localStorage.getItem('staff');
    const baseUrl = useContext(ApiContext);
    const navigate = useNavigate();

    const dropdownRef = useRef(null);
    const popupRef = useRef(null); // Ref for the membership popup

    const handleSignOut = async () => {
        try {
            localStorage.clear();
            setDropdownOpen(false);
            navigate('/auth');
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    const toggleDropdown = () => setDropdownOpen((prev) => !prev);

    const fetchMembership = async () => {
        try {
            const response = await axios.get(`${baseUrl}api/users/${userId}/`, {
                headers: {
                    Authorization: `token ${token}`,
                },
            });
            setUserData(response.data);
        } catch (error) {
            setError('Failed to fetch membership details');
            console.error(error);
        }
    };

    useEffect(() => {
        if (token) {
            fetchMembership();
        }

        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                setMembershipPopupVisible(false); // Close membership popup
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <header className="fixed top-0 w-full backdrop-blur-md bg-black/20 border-b border-white/30 shadow-lg z-50">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                    <NavLink to="/">
                        <img src={logo} className="h-7 md:h-12" alt="Logo" />
                    </NavLink>
                    <button
                        className="text-white md:hidden"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} size="lg" />
                    </button>
                    <nav className="hidden md:flex space-x-6 items-center lilita-one-regular">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `text-white text-lg hover:text-[#363873] ${
                                    isActive ? 'border-b-2 border-[#FAAD17] text-[#363873]' : ''
                                } focus:border-b-2`
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `text-white text-lg hover:text-[#363873] ${
                                    isActive ? 'border-b-2 border-[#FAAD17] text-[#363873]' : ''
                                } focus:border-b-2`
                            }
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/tickets"
                            className={({ isActive }) =>
                                `text-white text-lg hover:text-[#363873] ${
                                    isActive ? 'border-b-2 border-[#FAAD17] text-[#363873]' : ''
                                } focus:border-b-2`
                            }
                        >
                            Tickets
                        </NavLink>
                    </nav>
                    {token ? (
                        <div className="hidden md:flex items-center gap-2 relative">
                            <img
                                src={userData?.photo || 'default-avatar.png'}
                                alt="User"
                                className="w-10 h-10 rounded-full cursor-pointer"
                                onClick={toggleDropdown}
                            />
                            <span className="text-white cursor-pointer" onClick={toggleDropdown}>
                                {userData?.first_name || ''}
                            </span>
                            {dropdownOpen && (
                                <div
                                    ref={dropdownRef}
                                    className="absolute top-full mt-2 right-0 flex flex-col gap-2 bg-gray-800 rounded shadow-lg p-4 w-48 z-50"
                                >
                                    {(staff === 'true' || superUser === 'true') ? (
                                        <NavLink
                                            to="/admin-dashboard"
                                            className="text-white hover:border-b-2 border-red-700 w-full justify-center"
                                        >
                                            Admin Dashboard
                                        </NavLink>
                                    ) : (
                                            <>
                                           
                                            <button
                                                onClick={() => setMembershipPopupVisible(true)}
                                                className="text-white hover:border-b-2 border-red-700 flex w-full justify-start"
                                            >
                                                Membership Card
                                            </button>
                                            <NavLink
                                                to="/profile"
                                                className="text-white hover:border-b-2 border-red-700 w-full flex justify-start"
                                            >
                                                Profile
                                            </NavLink>
                                        </>
                                    )}
                                    <button
                                        onClick={handleSignOut}
                                        className="w-full flex justify-start items-center gap-2 text-left px-3 py-2 border-t-2 border-white text-red-500 hover:bg-gray-700 rounded transition"
                                    >
                                        Sign Out
                                        <FontAwesomeIcon icon={faSignOut}/>
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="hidden md:flex gap-4">
                            <button
                                onClick={() => navigate('/auth?view=login')}
                                className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
                            >
                                Login
                            </button>
                            <button
                                onClick={() => navigate('/auth?view=signup')}
                                className="px-4 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700"
                            >
                                Become a Member
                            </button>
                        </div>
                    )}
                </div>
            </header>

            {/* Membership Card Popup */}
            {isMembershipPopupVisible && userData && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div ref={popupRef} className="bg-white rounded-lg shadow-lg p-6 w-96">
                        <h2 className="text-xl font-semibold mb-4">Membership Card</h2>
                        <img
                            src={userData.photo || 'default-avatar.png'}
                            alt="User"
                            className="w-16 h-16 rounded-full"
                        />
                        <p><strong>Name:</strong> {userData.first_name} {userData.last_name}</p>
                        <p><strong>Email:</strong> {userData.email}</p>
                        <p><strong>Membership ID:</strong> {userData.membership_detail.membership_id}</p>
                        <button
                            onClick={() => setMembershipPopupVisible(false)}
                            className="mt-4 px-4 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 bg-opacity-70 z-50 flex justify-end">
                    <div className="w-64 bg-gray-900 h-screen shadow-lg p-6 flex flex-col justify-between space-y-6">
                        <nav className="flex flex-col space-y-4">
                        <button
                            className="self-end text-white"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <FontAwesomeIcon icon={faTimes} size="lg" />
                        </button>
                            <NavLink
                                to="/"
                                className="text-white text-lg font-medium hover:text-red-500 hover:border-b-2 border-red-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/about"
                                className="text-white text-lg font-medium hover:text-red-500 hover:border-b-2 border-red-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                About
                            </NavLink>
                            <NavLink
                                to="/tickets"
                                className="text-white text-lg font-medium hover:text-red-500 hover:border-b-2 border-red-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Tickets
                            </NavLink>
                        </nav>
                        
                        <div className='mt-80'>
                            {token ? (
                                
                                <div className="flex flex-col space-y-4 mt-54">
                                    <div className='w-full flex justify-center'>
                                     <img
                                src={userData?.photo || 'default-avatar.png'}
                                alt="User"
                                className="w-10 h-10 rounded-full cursor-pointer"
                                onClick={toggleDropdown}
                                />
                                </div>
                                {(staff === 'true' || superUser === 'true') ? (
                                    <NavLink
                                        to="/admin-dashboard"
                                        className="text-white text-lg font-medium hover:text-red-500 hover:border-b-2 border-red-700"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Admin Dashboard
                                    </NavLink>
                                ) : (
                                    <>
                                        <button
                                            onClick={() => {
                                                setMobileMenuOpen(false);
                                                setMembershipPopupVisible(true);
                                            }}
                                            className="text-white text-sm font-medium hover:text-red-500 hover:border-b-2 border-red-700 flex justify-start"
                                        >
                                            Membership Card
                                        </button>
                                        <NavLink
                                            to="/profile"
                                            className="text-white text-sm font-medium hover:text-red-500 hover:border-b-2 border-red-700"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            Profile
                                        </NavLink>
                                    </>
                                )}
                                <button
                                    onClick={handleSignOut}
                                    className="text-red-500 font-medium hover:bg-gray-700 px-3 py-2 rounded transition flex justify-center gap-2 items-center"
                                >
                                        Sign Out
                                        <FontAwesomeIcon icon={faSignOut}/>
                                </button>
                            </div>
                        ) : (
                            <div className="flex flex-col space-y-4">
                                <button
                                    onClick={() => {
                                        setMobileMenuOpen(false);
                                        navigate('/auth?view=login');
                                    }}
                                    className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
                                >
                                    Login
                                </button>
                                <button
                                    onClick={() => {
                                        setMobileMenuOpen(false);
                                        navigate('/auth?view=signup');
                                    }}
                                    className="px-4 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700"
                                >
                                    Become a Member
                                </button>
                            </div>
                            )}
                            </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;
