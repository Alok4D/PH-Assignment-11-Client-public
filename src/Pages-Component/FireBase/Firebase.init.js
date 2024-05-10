// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPDFEH-NUrVeWIBUNnywhhJTtfb1Nn4Og",
  authDomain: "restaurant-management-pr-9fde5.firebaseapp.com",
  projectId: "restaurant-management-pr-9fde5",
  storageBucket: "restaurant-management-pr-9fde5.appspot.com",
  messagingSenderId: "428864606724",
  appId: "1:428864606724:web:d212b031cee7db11095b51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);