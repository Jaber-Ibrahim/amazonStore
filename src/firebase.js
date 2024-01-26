// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQ_YGRZZuLmEwGed_ZMiF0WGrpdq4BDbY",
  authDomain: "fir-eb8fc.firebaseapp.com",
  projectId: "fir-eb8fc",
  storageBucket: "fir-eb8fc.appspot.com",
  messagingSenderId: "206353348298",
  appId: "1:206353348298:web:ca76d0de7e435a0428e633",
  measurementId: "G-BC3EYVMYWZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);