import React, { useState, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Login from './Login';
import Signup from './Signup';
import bg from '../../Media/about.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { ApiContext } from '../../contex';

const AuthDashboard = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [showLogin, setShowLogin] = useState(true);
    const {baseUrl
} = useContext(ApiContext)
    useEffect(() => {
        const view = new URLSearchParams(location.search).get('view');
        setShowLogin(view === 'login');
    }, [location.search]);

    // Redirect to Google OAuth 2.0 authentication page
   const signInWithGoogle = () => {
    const CLIENT_ID = '947260113188-lo3rlci6orer0t2mj4j5s4l346voe2cf.apps.googleusercontent.com';
    const REDIRECT_URI = `${baseUrl}google-auth-redirect/`;
    const SCOPE = 'openid profile email';

    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?` +
        `client_id=${CLIENT_ID}&` +
        `redirect_uri=${encodeURIComponent(REDIRECT_URI)}&` +
        `response_type=code&` +
        `scope=${encodeURIComponent(SCOPE)}&` +
        `prompt=select_account`; // Force account selection

    window.location.href = authUrl;
};



    // useEffect(() => {
    //     const params = new URLSearchParams(location.search);
    //     const code = params.get('code');

    //     if (code) {
    //         // Exchange code for token
    //         axios.get(`/auth/google/callback/?code=${code}`)
    //             .then(response => {
    //                 const { token, email } = response.data;
    //                 localStorage.setItem('token', token);  // Store token in localStorage
    //                 localStorage.setItem('email', email);  // Optionally store user email
    //                 navigate('/dashboard');  // Redirect to dashboard or any protected route
    //             })
    //             .catch(error => {
    //                 console.error("Google OAuth error:", error);
    //             });
    //     }
    // }, [location.search, navigate]);

    return (
        <div className="h-screen flex items-center justify-center bg-gradient-to-br py-14 from-gray-900 to-gray-800 relative">
            <div className="absolute inset-0 bg-center bg-cover opacity-50" style={{ backgroundImage: `url(${bg})` }} />
            <div className="absolute inset-0 bg-black opacity-40" />
            <div className={`w-[60vw] ${!showLogin ? 'mt-40' : ' max-w-2xl'} p-4 my-5 bg-white/10 mt- rounded-lg shadow-lg relative z-10 backdrop-blur-lg flex flex-col`}>
                <h1 className="text-3xl text-center font-bold text-white mb-6 ">
                    Welcome to The Grand Theater
                </h1>
                <AnimatePresence>
                    {showLogin ? (
                        <motion.div
                            key="login"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Login />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="signup"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Signup setShowLogin={setShowLogin} />
                        </motion.div>
                    )}
                </AnimatePresence>
                <div className="mt-4 text-center">
                    <button
                        onClick={() => setShowLogin(!showLogin)}
                        className="text-white underline hover:text-red-400 transition-colors"
                    >
                        {showLogin ? "Don't have an account? Sign Up" : "Already have an account? Log In"}
                    </button>
                    <h3 className="text-white mt-4">----or----</h3>
                    <button
                        onClick={signInWithGoogle}
                        className="bg-slate-400/30 px-6 py-2 mt-2 rounded-lg text-white hover:scale-105 transition-all duration-200 ease-in"
                    >
                        Continue with Google <FontAwesomeIcon icon={faGoogle} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AuthDashboard;
