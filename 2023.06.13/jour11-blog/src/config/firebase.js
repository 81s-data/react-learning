// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCf3yPJpSP0tIp9OdyPncQ0Lsoktpvzso",
  authDomain: "blog-73245.firebaseapp.com",
  projectId: "blog-73245",
  storageBucket: "blog-73245.appspot.com",
  messagingSenderId: "339759328992",
  appId: "1:339759328992:web:40ee1458d2492e4c49aa85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();