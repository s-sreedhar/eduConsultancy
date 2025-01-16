// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";

// Your Firebase config object (replace with your own Firebase project details)
const firebaseConfig = {
    apiKey: "AIzaSyBV8Vl9E-qSWt_6mxb8KOvFa1mAP4sV_MY",
    authDomain: "cs-overseas.firebaseapp.com",
    projectId: "cs-overseas",
    storageBucket: "cs-overseas.firebasestorage.app",
    messagingSenderId: "597016714445",
    appId: "1:597016714445:web:cc3559187552b05ec41d84",
    measurementId: "G-HYZ3JNL6GV"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

export { db, addDoc, collection, serverTimestamp };
