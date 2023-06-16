// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAr9Z29-I20A9zbdQp2tt0Hy1xv6bS6ipM",
  authDomain: "moviefan-cce45.firebaseapp.com",
  projectId: "moviefan-cce45",
  storageBucket: "moviefan-cce45.appspot.com",
  messagingSenderId: "87145098245",
  appId: "1:87145098245:web:d3f13c8d164953cd78c06c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();