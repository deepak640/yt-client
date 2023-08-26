// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDZKAf7Zx0VY6Kue_sVAdWSaNQqr9lXdtk",
    authDomain: "ak-c2bdf.firebaseapp.com",
    projectId: "ak-c2bdf",
    storageBucket: "ak-c2bdf.appspot.com",
    messagingSenderId: "738164863965",
    appId: "1:738164863965:web:b6ab0653836a42099d3c34"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig)
export const storage = getStorage(firebase)
export const db = getFirestore(firebase)
export default firebase