import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  // config file here
});

const db = firebaseApp.firestore();

export { db };
