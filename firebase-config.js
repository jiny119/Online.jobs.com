import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyAqKbPSwF_INJfGD7ADuo5-YkzO9dpJAL4",
    authDomain: "mytaskapp-e0e42.firebaseapp.com",
    databaseURL: "https://mytaskapp-e0e42-default-rtdb.firebaseio.com",
    projectId: "mytaskapp-e0e42",
    storageBucket: "mytaskapp-e0e42.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };
