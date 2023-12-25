

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBDMEMo8g4wI6LenY88fH9nNAZxPeX6Ed8",
  authDomain: "reactauth-23cbb.firebaseapp.com",
  projectId: "reactauth-23cbb",
  storageBucket: "reactauth-23cbb.appspot.com",
  messagingSenderId: "991151385195",
  appId: "1:991151385195:web:bea4f6696b1f193d1edf2e",
  measurementId: "G-TRW68QLDD2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);

export {auth , provider } ;