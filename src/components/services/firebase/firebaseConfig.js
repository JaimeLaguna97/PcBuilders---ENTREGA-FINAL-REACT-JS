import { initializeApp } from "firebase/app";
import { collection, getFirestore  } from 'firebase/firestore';

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8_ap63YARitba9-4nVD-ee7LPrKdjJ1Q",
  authDomain: "pcbuilders-ebf3b.firebaseapp.com",
  projectId: "pcbuilders-ebf3b",
  storageBucket: "pcbuilders-ebf3b.appspot.com",
  messagingSenderId: "667294267368",
  appId: "1:667294267368:web:68e22eb26561f3ea5a565d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const productsCollection = collection(db, "products");

export { db, productsCollection };