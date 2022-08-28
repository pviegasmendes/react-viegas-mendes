// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDROYmMFMsSeGmKHbWii2Rl-hAFvaaGuQM",
    authDomain: "ecommerce-4d74f.firebaseapp.com",
    projectId: "ecommerce-4d74f",
    storageBucket: "ecommerce-4d74f.appspot.com",
    messagingSenderId: "543136392336",
    appId: "1:543136392336:web:72cc87502b5888cfefa415",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize DB
export const db = getFirestore(app); 


