// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6EDud-Y70ZEXlrVbfH8xVt1qza34NtEs",
  authDomain: "premiere-demo.firebaseapp.com",
  projectId: "premiere-demo",
  storageBucket: "premiere-demo.appspot.com",
  messagingSenderId: "838780061361",
  appId: "1:838780061361:web:abee38779d259d47ad8490"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);