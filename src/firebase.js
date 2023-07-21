// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqag3cQQZMylImd6KdhfES-LilzYywbFM",
  authDomain: "splitwise-pro.firebaseapp.com",
  projectId: "splitwise-pro",
  storageBucket: "splitwise-pro.appspot.com",
  messagingSenderId: "819290724918",
  appId: "1:819290724918:web:a56626d0cc101f71c61697",
  measurementId: "G-2CBBVBP034"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);


    
