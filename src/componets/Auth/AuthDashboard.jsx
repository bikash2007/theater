// AuthDashboard.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Login from './Login';
import Signup from './Signup';
import bg from '../../Media/about.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from './Firebase';
import { useNavigate, useLocation } from 'react-router-dom';

const AuthDashboard = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [showLogin, setShowLogin] = useState(true);

    useEffect(() => {
        const view = new URLSearchParams(location.search).get('view');
        setShowLogin(view === 'login');
    }, [location.search]);

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                localStorage.setItem('email', user.email);
                localStorage.setItem('photo', user.photoURL);
                localStorage.setItem('name', user.displayName);
                localStorage.setItem('token', user.accessToken);
                navigate('/');
            })
            .catch((error) => console.error('Error during sign-in:', error));
    };

    return (
        <div className="min-h-screen  flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 relative">
            <div className="absolute inset-0 bg-center bg-cover opacity-50" style={{ backgroundImage: `url(${bg})` }} />
            <div className="absolute inset-0 bg-black opacity-40" />

              <div className={`max-w-md w-full p-8 mt-24 rounded-lg bg-white/10 backdrop-blur-lg shadow-lg relative z-10`}>
                <h1 className="text-3xl text-center font-bold text-white mb-6">
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
                            <Signup />
                        </motion.div>
                    )}
                </AnimatePresence>
                <div className="mt-6 text-center">
                    <button
                        onClick={() => setShowLogin(!showLogin)}
                        className="text-white underline hover:text-red-400 transition-colors"
                    >
                        {showLogin ? "Don't have an account? Sign Up" : "Already have an account? Log In"}
                    </button>
                    <h3 className="text-white">or</h3>
                    <button onClick={signInWithGoogle} className="bg-slate-400/30 px-6 py-1 rounded-lg text-white hover:scale-105 transition-all duration-200 ease-in">
                        Continue with Google <FontAwesomeIcon icon={faGoogle} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AuthDashboard;
