import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9iL4fwAMZyCNeDMTWWFsIfHLI5bUoOgE",
  authDomain: "club-ecommerce-5e04b.firebaseapp.com",
  projectId: "club-ecommerce-5e04b",
  storageBucket: "club-ecommerce-5e04b.firebasestorage.app",
  messagingSenderId: "486098566256",
  appId: "1:486098566256:web:a0c01a87d74e79275688b5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export const auth = getAuth();