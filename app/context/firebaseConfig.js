import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB3HBuQIZqtBhO15_uOU2fKdDlk3rEjtHs",
  authDomain: "nextjs-firebase-883d2.firebaseapp.com",
  projectId: "nextjs-firebase-883d2",
  storageBucket: "nextjs-firebase-883d2.firebasestorage.app",
  messagingSenderId: "740501768918",
  appId: "1:740501768918:web:5682bec8ebddcbeaacd777",
  measurementId: "G-RHBMKZKDV6"
};

let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);  
} else {
  app = getApps()[0]; 
}

const db = getFirestore(app);
export const auth = getAuth(app);

export default db;

