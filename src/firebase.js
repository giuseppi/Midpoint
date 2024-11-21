// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDQK1vQ9HGY6GF-bPRh_2NtrHWI-iqpStA',
  authDomain: 'midpoint-abaed.firebaseapp.com',
  projectId: 'midpoint-abaed',
  storageBucket: 'midpoint-abaed.firebasestorage.app',
  messagingSenderId: '973807200315',
  appId: '1:973807200315:web:94177dd73e37129741941e',
  measurementId: 'G-VXJFR99SX9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);