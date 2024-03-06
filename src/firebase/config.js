// Import the functions you need from the SDKs you need
import { initializeApp, FirebaseApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_4ju-HHBdjaCRaUD3wh_3XBJq9iXPrfM",
  authDomain: "netflix-b0c01.firebaseapp.com",
  projectId: "netflix-b0c01",
  storageBucket: "netflix-b0c01.appspot.com",
  messagingSenderId: "281593431045",
  appId: "1:281593431045:web:b72acf135b44d35dc5486c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;