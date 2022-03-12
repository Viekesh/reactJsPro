import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDi_dxlngOB2Sk68BhAkvmeR02vJdUEOGk",
    authDomain: "challenge-f5aa4.firebaseapp.com",
    projectId: "challenge-f5aa4",
    storageBucket: "challenge-f5aa4.appspot.com",
    messagingSenderId: "783897073772",
    appId: "1:783897073772:web:d197bd063c4797ba5c6049",
    measurementId: "G-YTVDK0B1JM"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };