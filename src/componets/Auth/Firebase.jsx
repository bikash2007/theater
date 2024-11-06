// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // Import Authentication and Google provider

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHHHoN1c5zorHC6-fef8HVWnM3Ib-KL0U",
  authDomain: "theater-c85a6.firebaseapp.com",
  projectId: "theater-c85a6",
  storageBucket: "theater-c85a6.firebasestorage.app",
  messagingSenderId: "107562587308",
  appId: "1:107562587308:web:ad4f59137cc8537763fb09",
  measurementId: "G-T4Z8YVLB6H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and Google provider
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Export the auth and provider for use in your components
export { auth, provider };
