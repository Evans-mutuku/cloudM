import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDgHMTlQssJNL9h7Pp8Ym65cT83r7rZd9A",
  authDomain: "cloudmary-f5cd2.firebaseapp.com",
  projectId: "cloudmary-f5cd2",
  storageBucket: "cloudmary-f5cd2.appspot.com",
  messagingSenderId: "280795180324",
  appId: "1:280795180324:web:20e36dd5e75c09ad1757b1",
  measurementId: "G-SV36VTDEVL"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, storage, auth, provider };
