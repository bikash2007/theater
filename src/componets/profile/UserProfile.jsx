import React, { useState, useEffect, useContext } from 'react';
import img from '../../Media/user.jpg';
import axios from 'axios';
import { ApiContext } from '../../contex';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [newProfilePhoto, setNewProfilePhoto] = useState(null);
  const [previewPhoto, setPreviewPhoto] = useState(null);

  const userId = localStorage.getItem('userId');
  const baseUrl = useContext(ApiContext);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${baseUrl}api/users/${userId}/`);
        const data = response.data;

        setUser({
          name: data.first_name || 'N/A',
          lastName: data.last_name || 'N/A',
          email: data.email || 'N/A',
          phone: data.phone || 'N/A',
          membership: data.membership_detail?.membership_type || 'Free',
          membershipStatus: data.membership_detail?.membership_status || 'N/A',
          membershipExpiresAt: data.membership_detail?.expires_at
            ? new Date(data.membership_detail.expires_at).toLocaleDateString()
            : 'N/A',
          profilePhoto: data.photo || img,
        });
      } catch (error) {
        setError(error.response?.data?.message || 'Failed to fetch user data');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [baseUrl, userId]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setNewProfilePhoto(file);
      setPreviewPhoto(URL.createObjectURL(file));
    }
  };

  const handleSave = async () => {
    if (!newProfilePhoto) return;

    const formData = new FormData();
    formData.append('photo', newProfilePhoto);

    try {
      const response = await axios.patch(`${baseUrl}api/users/${userId}/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Update the user profile photo on success
      setUser((prev) => ({
        ...prev,
        profilePhoto: response.data.photo,
      }));

      setIsEditing(false);
      setNewProfilePhoto(null);
      setPreviewPhoto(null);
    } catch (error) {
      console.error('Error updating profile picture:', error);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setNewProfilePhoto(null);
    setPreviewPhoto(null);
  };

  if (loading) {
    return <div className="text-center text-white">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="bg-gray-900 min-h-screen p-6 pt-24 text-gray-100 flex flex-col items-center">
      {/* Profile Picture */}
      <div className="w-32 h-32 mb-4 relative">
        <img
          src={previewPhoto || user.profilePhoto}
          alt="User Profile"
          className="rounded-full w-full h-full object-cover border-4 border-gray-600"
        />
        {isEditing && previewPhoto && (
          <span className="absolute -bottom-2 right-2 px-2 py-1 bg-green-600 text-white text-xs rounded-md">
            Preview
          </span>
        )}
      </div>

      {isEditing ? (
        <div className="flex flex-col items-center w-full">
          {/* File Input */}
          <label
            className="cursor-pointer bg-gray-700 text-white py-2 px-4 rounded mb-4 hover:bg-gray-600"
          >
            Select New Profile Picture
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
          {previewPhoto && (
            <div className="flex gap-4">
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-green-600 rounded text-white hover:bg-green-700 transition disabled:bg-gray-600"
                disabled={!newProfilePhoto}
              >
                Save
              </button>
              <button
                onClick={handleCancel}
                className="px-4 py-2 bg-red-600 rounded text-white hover:bg-red-700 transition"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      ) : (
        <>
          {/* Basic Info */}
          <div className="text-center">
            <h1 className="text-2xl font-semibold mb-1">
              {user.name} {user.lastName}
            </h1>
            <p className="text-gray-400">{user.email}</p>
            <p className="text-gray-400">{user.phone}</p>
          </div>

          {/* Membership Info */}
          <div className="mt-6 text-center">
            <span className="px-4 py-2 rounded-full bg-green-600 text-white text-sm font-medium">
              {user.membership} Membership
            </span>
            <p className="mt-2 text-sm text-gray-400">Status: {user.membershipStatus}</p>
            <p className="mt-2 text-sm text-gray-400">Expires At: {user.membershipExpiresAt}</p>
          </div>
        </>
      )}

      {/* Action Buttons */}
      <div className="flex gap-4 mt-8">
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="px-4 py-2 bg-gray-700 rounded hover:bg-green-600 transition text-white font-medium"
          >
            Edit Profile
          </button>
        )}
        <button className="px-4 py-2 bg-gray-700 rounded hover:bg-green-600 transition text-white font-medium">
          View Bookings
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
