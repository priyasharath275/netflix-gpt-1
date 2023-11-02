// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcs692Veg9G8qHXQT8q1uTNJR60CmoqTI",
  authDomain: "netflix-gpt-7515b.firebaseapp.com",
  projectId: "netflix-gpt-7515b",
  storageBucket: "netflix-gpt-7515b.appspot.com",
  messagingSenderId: "824262948014",
  appId: "1:824262948014:web:964cc749181e42fa17293f",
  measurementId: "G-SCQ1ZLL70N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();