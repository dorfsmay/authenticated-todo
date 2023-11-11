// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaTVNk2mk60d6zWUOez1wsiEzSvOLs7tY",
  authDomain: "dorfsmay-firebase-test-01.firebaseapp.com",
  databaseURL: "https://dorfsmay-firebase-test-01-default-rtdb.firebaseio.com",
  projectId: "dorfsmay-firebase-test-01",
  storageBucket: "dorfsmay-firebase-test-01.appspot.com",
  messagingSenderId: "573416676071",
  appId: "1:573416676071:web:b4c5b75bbbfb9ffc3ae042",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
