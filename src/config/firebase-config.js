// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDm1RFh3af9JZQanUdU_ASceCvsaLroVJo",
  authDomain: "expenses-8512a.firebaseapp.com",
  projectId: "expenses-8512a",
  storageBucket: "expenses-8512a.appspot.com",
  messagingSenderId: "416757491699",
  appId: "1:416757491699:web:bb31656230c8abe5729486",
  measurementId: "G-1S6MM9QPC8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)