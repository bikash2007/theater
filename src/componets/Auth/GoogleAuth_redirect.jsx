import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ApiContext } from '../../contex';

const GoogleAuthRedirect = () => {
    const navigate = useNavigate();
    const { baseUrl } = useContext(ApiContext); // Use `useContext` at the top level
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const code = params.get('code'); // Retrieves the 'code' parameter

        if (code) {
            axios
                .post(`${baseUrl}api/auth/google/callback/`, { code })
                .then((response) => {
                    const { token, first_time, google_user, user_id } = response.data;

                    // Store token and other details in localStorage
                    if (first_time) {
                        localStorage.setItem('googleId', google_user);
                        localStorage.setItem('authToken', token);
                        navigate('/newuserlogin'); // Redirect for first-time users
                    } else {
                        localStorage.setItem('token', token);
                        localStorage.setItem('userId', user_id);
                        navigate('/'); // Redirect to home or profile
                        window.location.reload();
                    }
                })
                .catch((error) => {
                    console.error('Error during Google auth:', error);
                    // Handle authentication errors (optional: redirect or display a message)
                })
                .finally(() => setLoading(false)); // Ensure loading ends
        } else {
            // If no code is present, redirect or handle the case
            console.error('Google authentication code not found');
            navigate('/'); // Redirect to home or login
        }
    }, [baseUrl, navigate]);

    return (
        <div className="bg-zinc-900 h-screen flex justify-center items-center">
            {loading ? 'Authenticating...' : 'Failed to authenticate. Please try again.'}
        </div>
    );
};

export default GoogleAuthRedirect;
