// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpdMeybTSSdomTOF6G1vk88nyx1FUmaW4",
  authDomain: "react-play-ground-2796f.firebaseapp.com",
  projectId: "react-play-ground-2796f",
  storageBucket: "react-play-ground-2796f.appspot.com",
  messagingSenderId: "45834608879",
  appId: "1:45834608879:web:025497b0d1f3bff5d03b1a",
  measurementId: "G-3HSW2RX3D8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const createNewAccount = (email:string, password:string)=>{
  return createUserWithEmailAndPassword(auth, email, password)
}

export const loginWitEmailPassword = (email:string, password:string)=>{
  return signInWithEmailAndPassword  (auth, email, password)
}