// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "copy this from your Firebase console",
  authDomain: "copy this from your Firebase console",
  databaseURL: "copy this from your Firebase console",
  projectId: "copy this from your Firebase console",
  storageBucket: "copy this from your Firebase console",
  messagingSenderId: "copy this from your Firebase console",
  appId: "copy this from your Firebase console",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
