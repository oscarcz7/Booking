// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBjQLcZUpHTLRF7y-qa0hMFIZa22anpS0k",
  authDomain: "booking-code-37a67.firebaseapp.com",
  projectId: "booking-code-37a67",
  storageBucket: "booking-code-37a67.appspot.com",
  messagingSenderId: "275058783582",
  appId: "1:275058783582:web:e88e8eeb87b5dfac128bcf"
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();