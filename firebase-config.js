// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyD4I-MIxOH5weoRbUNRZeXorQNKmhLXPW4",
    authDomain: "trip-planner-b943e.firebaseapp.com",
    projectId: "trip-planner-b943e",
    storageBucket: "trip-planner-b943e.firebasestorage.app",
    messagingSenderId: "606442307124",
    appId: "1:606442307124:web:3326e7e953bceb7f6ad461",
    measurementId: "G-0H6E28EBZ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();