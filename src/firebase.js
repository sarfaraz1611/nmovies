import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAg4ios0llbb60E1TqXGhO1zhRYBUHn4Ww",
    authDomain: "nmovies-dfb99.firebaseapp.com",
    projectId: "nmovies-dfb99",
    storageBucket: "nmovies-dfb99.appspot.com",
    messagingSenderId: "940346586034",
    appId: "1:940346586034:web:7865772961b0b372fbeaab",
    measurementId: "G-GSXLSGRE59"
  };
  
 
  const firebaseApp =initializeApp(firebaseConfig);
  const db =   new getFirestore();
  const auth =getAuth(firebaseApp);
  const provider =  new GoogleAuthProvider();
  // const storage = storage();
  
  export { auth, provider};
  export default db;



