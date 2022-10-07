// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9A3JjQWbCYp5mD6f_qQcDiEyR-Hefews",
  authDomain: "yikes-games.firebaseapp.com",
  projectId: "yikes-games",
  storageBucket: "yikes-games.appspot.com",
  messagingSenderId: "780076976050",
  appId: "1:780076976050:web:d1cc47568c71f34c5346ab",
  measurementId: "G-TT2259RTF5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);