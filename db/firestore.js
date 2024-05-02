import * as firebase from "firebase";

import "firebase/firestore";

const configuration = {
    apiKey: "AIzaSyDSJde1cW8wKKMGLbGfJ0I_q8wCTtM85iY",
    authDomain: "azeemexpomobileapp.firebaseapp.com",
    projectId: "azeemexpomobileapp",
    storageBucket: "azeemexpomobileapp.appspot.com",
    messagingSenderId: "617268889521",
    appId: "1:617268889521:web:01de18acd2b6f1eb05df90",
    measurementId: "G-0DP8TZ5FXV"
}

firebase.initializeApp(configuration);
const db = firebase.firestore();
export default db;