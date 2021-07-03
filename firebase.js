import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAx-teEUx0E8mM5BZk3DOhbiw6M_nLwMS4",
  authDomain: "shoppy-3010d.firebaseapp.com",
  projectId: "shoppy-3010d",
  storageBucket: "shoppy-3010d.appspot.com",
  messagingSenderId: "223128386083",
  appId: "1:223128386083:web:845335c15d437063928f96",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
export default db;
