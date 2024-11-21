import React, { useState, useEffect, useContext } from 'react';
import bg from '../../Media/log.png';
import { ApiContext } from '../../contex';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const NewUserLogin = () => {
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [membership, setMembership] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [message, setMessage] = useState(''); // Success/Error message
  const [error, setError] = useState(''); // Validation error message
  const baseUrl = useContext(ApiContext)
  const userId = localStorage.getItem('googleId')  
  const token = localStorage.getItem('authToken')
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => setShowForm(true), 300);
  }, []);

  const handleNextStep = (e) => {
    e.preventDefault();
    if (!firstName || !lastName) {
      setError("Please provide both first and last names.");
    } else {
      setError("");
      setStep(2);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!phone || !membership) {
      setError("Please enter your phone number and select a membership type.");
      return;
    }

    const userData = {
      first_name: firstName,
      last_name: lastName,
      phone: phone,
      membership_type: membership,
      
    
    }
    console.log(userData)
    try {
      const response = await axios.patch(`${baseUrl}api/google-user/${userId}/`, {
        
        headers: {
          Authorization: `token ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
       
      if (response.status == 200) {
        setMessage('Your information has been updated successfully!');
        localStorage.setItem('token', token)
        localStorage.setItem('userId',response.data.user_id)
        navigate('/')
        setError("");
      } else {
        setMessage('');
        setError('Failed to update information. Please try again.');
      }
    } catch (error) {
      setMessage('');
      setError('An error occurred. Please check your connection.');
      console.error(error);
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
      <div className={`w-full max-w-lg p-8 mx-4 bg-white/20 backdrop-blur-md rounded-xl shadow-lg transition-all duration-700 ${showForm ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-3xl font-bold text-white text-center mb-4">Welcome to Hansadhwani Theater!</h2>
        <p className="text-center text-neutral-100 mb-8">
          {step === 1 ? "Please provide your name to start." : "Almost there! Just a few more details to complete your registration."}
        </p>

        <form onSubmit={step === 2 ? handleFormSubmit : handleNextStep} className="space-y-6">
          {step === 1 && (
            <>
              <div className="text-left">
                <label className="block text-teal-300 font-semibold mb-2">First Name:</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
                />
              </div>
              <div className="text-left">
                <label className="block text-teal-300 font-semibold mb-2">Last Name:</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
                />
              </div>
              <button
                type="button"
                onClick={handleNextStep}
                className="w-full py-3 bg-teal-500 text-white rounded-lg font-bold hover:bg-teal-600 transform hover:scale-105 transition duration-300"
              >
                Next
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <div className="text-left">
                <label className="block text-teal-300 font-semibold mb-2">Phone Number:</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
                />
              </div>

              <div className="text-left">
                <label className="block text-teal-300 font-semibold mb-2">Membership Type:</label>
                <select
                  value={membership}
                  onChange={(e) => setMembership(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
                >
                  <option value="">Select Membership</option>
                  <option value="general">General</option>
                  <option value="premium">Premium</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-teal-500 text-white rounded-lg font-bold hover:bg-teal-600 transform hover:scale-105 transition duration-300"
              >
                Submit
              </button>
            </>
          )}
        </form>

        {/* Display error or success messages */}
        {error && <p className="mt-4 text-center text-sm text-red-500">{error}</p>}
        {message && <p className="mt-4 text-center text-sm text-white bg-teal-600 p-2 rounded-md">{message}</p>}
      </div>
    </div>
  );
};

export default NewUserLogin;
