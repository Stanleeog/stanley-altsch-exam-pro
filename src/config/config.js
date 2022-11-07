// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCahTI6rKz02UvLg1vgnW5aDVTADRHT5Zo",
  authDomain: "altschool-exam-question-3.firebaseapp.com",
  projectId: "altschool-exam-question-3",
  storageBucket: "altschool-exam-question-3.appspot.com",
  messagingSenderId: "398893671681",
  appId: "1:398893671681:web:e02b1df5508005b21ba700",
  measurementId: "G-WXVCNN7841"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);