import { auth } from "./firebase-config.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

export function signupUser(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
        .then(() => { alert("Signup Successful!"); })
        .catch((error) => { alert("Error: " + error.message); });
}

export function loginUser(email, password) {
    signInWithEmailAndPassword(auth, email, password)
        .then(() => { alert("Login Successful!"); window.location.href = "index.html"; })
        .catch((error) => { alert("Error: " + error.message); });
}

export function logoutUser() {
    signOut(auth).then(() => { alert("Logged out!"); window.location.href = "login.html"; });
}
