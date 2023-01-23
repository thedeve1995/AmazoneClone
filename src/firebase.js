import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDqj14ckizWbu-nzW6PMcGovvE6pYFWmrQ",
    authDomain: "e-clone-web-1e9f6.firebaseapp.com",
    projectId: "e-clone-web-1e9f6",
    storageBucket: "e-clone-web-1e9f6.appspot.com",
    messagingSenderId: "790666872877",
    appId: "1:790666872877:web:761185e0f0704ea46e90a4",
    measurementId: "G-C8RDG7GJJ9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};