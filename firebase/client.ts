// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByHUz3BwRq3jSmC94IHPaujXdjyKeqANE",
  authDomain: "vocalcoachai-f4ef7.firebaseapp.com",
  projectId: "vocalcoachai-f4ef7",
  storageBucket: "vocalcoachai-f4ef7.firebasestorage.app",
  messagingSenderId: "513575499764",
  appId: "1:513575499764:web:548eb066870ac400ed6ba1",
  measurementId: "G-N9BQ6KBX4D"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);