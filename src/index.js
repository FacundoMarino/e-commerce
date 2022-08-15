import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDk_eGZGyyq3qJl0xl9lg8PKtVxR9lbT-E",
  authDomain: "my-app-f3e03.firebaseapp.com",
  projectId: "my-app-f3e03",
  storageBucket: "my-app-f3e03.appspot.com",
  messagingSenderId: "1071624775549",
  appId: "1:1071624775549:web:11173d91883b489b8cce14",
  measurementId: "G-T0KJYP0P35"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
