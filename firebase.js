import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";

import {
    getAuth
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

import {
    getFirestore
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAZOtbw3g-A8QLYkV2xtN--wDxsHo7BQiM",
    authDomain: "vanguard-software-design-ltd.firebaseapp.com",
    projectId: "vanguard-software-design-ltd",
    storageBucket: "vanguard-software-design-ltd.firebasestorage.app",
    messagingSenderId: "456155587209",
    appId: "1:456155587209:web:ec2af99ed99bdb95ed9c58"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
