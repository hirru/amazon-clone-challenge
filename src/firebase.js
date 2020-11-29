// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB2MmTWBiEArHILadq0CV2MwI5UPhRlWwk",
  authDomain: "challenge-ebccc.firebaseapp.com",
  databaseURL: "https://challenge-ebccc.firebaseio.com",
  projectId: "challenge-ebccc",
  storageBucket: "challenge-ebccc.appspot.com",
  messagingSenderId: "831070349241",
  appId: "1:831070349241:web:1a95120a320bfea42a3868",
  measurementId: "G-DGFZRYHDY9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
