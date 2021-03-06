// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
// Base de datos
import 'firebase/compat/firestore';
// autenticaciones 
import 'firebase/compat/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLZjm4M4HekjVbOpQ9oBlqOq17tON8rDs",
  authDomain: "crud-react-redux-7b776.firebaseapp.com",
  projectId: "crud-react-redux-7b776",
  storageBucket: "crud-react-redux-7b776.appspot.com",
  messagingSenderId: "1030230428351",
  appId: "1:1030230428351:web:e80e18d3ef0fac660b540a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, db, googleAuthProvider }