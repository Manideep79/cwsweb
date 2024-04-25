// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQ7X-F41FW9H4A5dMUy36UAw3z7PsJFDs",
  authDomain: "cwsco-b3d35.firebaseapp.com",
  projectId: "cwsco-b3d35",
  storageBucket: "cwsco-b3d35.appspot.com",
  messagingSenderId: "134302855928",
  appId: "1:134302855928:web:87c38f0b23e9eda242c10d",
  measurementId: "G-WC63V21SDV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);