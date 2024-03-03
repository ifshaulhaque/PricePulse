// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import dotenv from "dotenv";
dotenv.config();
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "pricepulse-cec23.firebaseapp.com",
  projectId: "pricepulse-cec23",
  storageBucket: "pricepulse-cec23.appspot.com",
  messagingSenderId: "494273891886",
  appId: "1:494273891886:web:9558da302ee5afb2f3d9bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebase = {
    getFirebaseApp: () => {
        return app;
    }
}