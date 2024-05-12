// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-uKvYB7uYjC4CRXVGw-wDIRwP3Qhla_I",
  authDomain: "job-word.firebaseapp.com",
  projectId: "job-word",
  storageBucket: "job-word.appspot.com",
  messagingSenderId: "142515386549",
  appId: "1:142515386549:web:3a3e219d90881447cf66fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);