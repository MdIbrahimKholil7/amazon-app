// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAbsuqFWXngWN11jeRadsuxMOPz12nSOM",
  authDomain: "app-5ee9c.firebaseapp.com",
  projectId: "app-5ee9c",
  storageBucket: "app-5ee9c.appspot.com",
  messagingSenderId: "990814904782",
  appId: "1:990814904782:web:08fd599fd48e7d72d2cb9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth