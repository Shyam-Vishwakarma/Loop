// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDo5pq3aBpNSW5GhD1C6EYN_Q01sfP6xHg",
  authDomain: "netflix-gpt-4.firebaseapp.com",
  projectId: "netflix-gpt-4",
  storageBucket: "netflix-gpt-4.appspot.com",
  messagingSenderId: "673538513039",
  appId: "1:673538513039:web:aec422d4826685fbb138fa",
  measurementId: "G-WF5RDM3P1E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const analytics = getAnalytics(app);
