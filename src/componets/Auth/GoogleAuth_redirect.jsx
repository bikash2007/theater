import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GoogleAuthRedirect = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const code = params.get('code'); // Retrieves the 'code' parameter
       
        if (code) {
            
            axios.post('https://hansadhwani.sanskritigram.org/api/auth/google/callback/', { code })
                .then(response => {
                    const token  = response.data.token;
                    
                    if (response.data.first_time) {
                        
                        navigate('/newuserlogin')
                        localStorage.setItem('googleId', response.data.google_user)
                        localStorage.setItem('authToken',response.data.token)
                    } else {
                        
                        localStorage.setItem('token', token)
                        localStorage.setItem('userId', response.data.user_id)
                       
                        
                        navigate('/'); // Redirect to profile or a different page after successful login
                    }
                })
                .catch(error => console.error('Error during Google auth:', error));
        }
    }, [navigate]);

    return (
        <div className='bg-zinc-900 h-screen flex justify-center items-center'>
            Authenticating...
        </div>
    );
};

export default GoogleAuthRedirect;
