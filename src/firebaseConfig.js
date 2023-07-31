// firebaseconfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
 apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "",
 authDomain: "react-coder-9db97.firebaseapp.com",
 projectId: "react-coder-9db97",
 storageBucket: "react-coder-9db97.appspot.com",
 messagingSenderId: "831771173547",
 appId: "1:831771173547:web:2062b58f2f7be20170cdee",
measurementId: process.env.REACT_APP_FIREBASE_MEASURE_ID || ""
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
console.log('db', db); // Imprimir acá
export { db };
