
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyALaWIjqOwUdBxzXUJe7RI15JtssNGPYmo",
  authDomain: "projetofirebase-9184e.firebaseapp.com",
  projectId: "projetofirebase-9184e",
  storageBucket: "projetofirebase-9184e.firebasestorage.app",
  messagingSenderId: "64407136028",
  appId: "1:64407136028:web:3498af471652c0fb00fcd9",
  measurementId: "G-PDKJLT4ZL2"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getFirestore();