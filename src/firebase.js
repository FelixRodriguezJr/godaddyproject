import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyBsS_2Yk-NAnPm6v0jp1VL8g20W2j5wHf4",
  authDomain: "hackathon-1435f.firebaseapp.com",
  projectId: "hackathon-1435f",
  storageBucket: "hackathon-1435f.appspot.com",
  messagingSenderId: "559154100115",
  appId: "1:559154100115:web:04168bc1d21ca1ce5eda66",
  measurementId: "G-HD4KJQ59ZP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db