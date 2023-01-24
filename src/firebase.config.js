// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFireStore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCypWZqvRaAmBvK1wtIvH7AtZ4F2DnR0vQ",
  authDomain: "alcrroweb.firebaseapp.com",
  projectId: "alcrroweb",
  storageBucket: "alcrroweb.appspot.com",
  messagingSenderId: "387646721337",
  appId: "1:387646721337:web:2574e8bd4505ac06776ce8",
  measurementId: "G-RBTGXCQ5LX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFireStore();
