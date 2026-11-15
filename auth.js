import { auth, db } from "./firebase.js";

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

import {
    doc,
    setDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";


// STUDENT SIGN UP
export async function signUp(username, email, password) {

    const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
    );

    const user = userCredential.user;

    await setDoc(doc(db, "users", user.uid), {
        username: username,
        email: email,
        role: "student",
        createdAt: serverTimestamp()
    });

    return user;
}


// USER SIGN IN
export async function signIn(email, password) {

    const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
    );

    return userCredential.user;
}


// USER LOGOUT
export async function logout() {

    await signOut(auth);

}
