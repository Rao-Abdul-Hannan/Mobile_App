import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const configuration = {
    apiKey: "AIzaSyDSJde1cW8wKKMGLbGfJ0I_q8wCTtM85iY",
    authDomain: "azeemexpomobileapp.firebaseapp.com",
    projectId: "azeemexpomobileapp",
    storageBucket: "azeemexpomobileapp.appspot.com",
    messagingSenderId: "617268889521",
    appId: "1:617268889521:web:01de18acd2b6f1eb05df90",
    measurementId: "G-0DP8TZ5FXV"
}

const app = initializeApp(configuration);

const db = getFirestore(app);

const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});

export { app, db, auth };

