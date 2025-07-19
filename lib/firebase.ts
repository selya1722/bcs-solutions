// lib/firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkDvK5HmDewIlsDh5c3X0tCWnybhBcefw",
  authDomain: "bcsdbase-32411.firebaseapp.com",
  projectId: "bcsdbase-32411",
  storageBucket: "bcsdbase-32411.firebasestorage.app",
  messagingSenderId: "1005246528830",
  appId: "1:1005246528830:web:caffbb66f55286a726c06f",
  measurementId: "G-MBWBTW15KX"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };
