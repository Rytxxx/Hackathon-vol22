import React from "react";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBtlzkX47WtXWwaHbrFoK82V5dezMptN7Q",
  authDomain: "fir-login-386c4.firebaseapp.com",
  projectId: "fir-login-386c4",
  storageBucket: "fir-login-386c4.firebasestorage.app",
  messagingSenderId: "1010512049559",
  appId: "1:1010512049559:web:e42ebf51355fd2669480d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { app,auth,provider}