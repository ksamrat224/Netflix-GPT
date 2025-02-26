// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNyX95HrGv42WRpI3fAIpDAdtGbwlmVmg",
  authDomain: "netflixgpt-e55f1.firebaseapp.com",
  projectId: "netflixgpt-e55f1",
  storageBucket: "netflixgpt-e55f1.firebasestorage.app",
  messagingSenderId: "436612957357",
  appId: "1:436612957357:web:47b963c7c2f3c26b2fb224",
  measurementId: "G-DTZHH1V2BH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();