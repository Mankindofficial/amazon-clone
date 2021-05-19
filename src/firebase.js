import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAdFAyJNvpskOOHR335pjg6ccmpBaQ385k",
  authDomain: "app-clone-e71f1.firebaseapp.com",
  projectId: "app-clone-e71f1",
  storageBucket: "app-clone-e71f1.appspot.com",
  messagingSenderId: "89621655346",
  appId: "1:89621655346:web:01053abec7c74f298d312b",
  measurementId: "G-SV82SV3GY5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };