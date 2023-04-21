import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYf3Nr3FtDiAzjYBztkYiDItGZaHtBRUQ",
  authDomain: "globalstore-a43de.firebaseapp.com",
  projectId: "globalstore-a43de",
  storageBucket: "globalstore-a43de.appspot.com",
  messagingSenderId: "76583135841",
  appId: "1:76583135841:web:60ff75ad07d83f57145820",
  measurementId: "G-4GXCVD1T27"
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
