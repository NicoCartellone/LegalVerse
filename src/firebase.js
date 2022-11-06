import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyB571TgEjCzWSH_ckTIRO5Mrosm9FzVzSI",
    authDomain: "legalverseconti.firebaseapp.com",
    projectId: "legalverseconti",
    storageBucket: "legalverseconti.appspot.com",
    messagingSenderId: "728603560311",
    appId: "1:728603560311:web:5b1f88fc0e16c2d1ccf972"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 
export const db = getFirestore(app);
export const storage = getStorage(app);
