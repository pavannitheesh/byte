// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrZrED2AvxGv4i2ZrfwrwmFZ-FSE5wgyo",
  authDomain: "byteauction.firebaseapp.com",
  projectId: "byteauction",
  storageBucket: "byteauction.appspot.com",
  messagingSenderId: "957279062730",
  appId: "1:957279062730:web:142c3463df69a9058a0233",
  measurementId: "G-KNV1K7VYWQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
export const db = getFirestore(app);
export const auth = getAuth(app);
