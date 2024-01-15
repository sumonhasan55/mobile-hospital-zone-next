// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyD3UU0TzaxjWxhKFqZcdpJ4zdVGnpJptLk",
  authDomain: "hm-pc-builder-889fe.firebaseapp.com",
  projectId: "hm-pc-builder-889fe",
  storageBucket: "hm-pc-builder-889fe.appspot.com",
  messagingSenderId: "572146509245",
  appId: "1:572146509245:web:ba153a6c62b560bad7ded4",
  measurementId: "G-JR2H5GEBMJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;