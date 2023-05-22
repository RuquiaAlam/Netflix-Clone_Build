


import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { initializeApp } from "@firebase/app";
import { getAuth, GoogleAuthProvider } from "@firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBN_uyHopYUvJ_IbcPE27vw7ogQWd-ezkA",
    authDomain: "netflix-clone-930b4.firebaseapp.com",
    projectId: "netflix-clone-930b4",
    storageBucket: "netflix-clone-930b4.appspot.com",
    messagingSenderId: "574121753992",
    appId: "1:574121753992:web:2ff214d307d0cebde10e3d"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  // firestore is database
  const db = firebaseApp.firestore();
  const auth= firebase.auth();
  export { auth };
  export default db;
//can have only one default export but many explicit exports