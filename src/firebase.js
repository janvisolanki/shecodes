import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBmhAHpwg47DML8qDkacM9z6MjwP3zk-nU",
    authDomain: "shopping-website-e927d.firebaseapp.com",
    projectId: "shopping-website-e927d",
    storageBucket: "shopping-website-e927d.appspot.com",
    messagingSenderId: "226565967755",
    appId: "1:226565967755:web:e3cb782b76ad35d4d9698e",
    measurementId: "G-72G0Y6RQE4"
});


const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };