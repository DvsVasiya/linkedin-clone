import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBAbZrps_8douaRiT8-zcuaz-e0HMMBPPs",
  authDomain: "linkedin-clone-8ca0e.firebaseapp.com",
  projectId: "linkedin-clone-8ca0e",
  storageBucket: "linkedin-clone-8ca0e.appspot.com",
  messagingSenderId: "610605743671",
  appId: "1:610605743671:web:865936441b6db8d7d3c9b2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
