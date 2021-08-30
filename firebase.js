
import * as firebase from "firebase/app"
import  "firebase/storage"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB20lddQKKXgLhnKYU1bKq8WgwecTvSH2I",
    authDomain: "facebook-clone-13d96.firebaseapp.com",
    projectId: "facebook-clone-13d96",
    storageBucket: "facebook-clone-13d96.appspot.com",
    messagingSenderId: "762470571881",
    appId: "1:762470571881:web:20a2594759525cef20a7f8",
    measurementId: "G-9RDT591EEG"
  };

 const app = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const storage = firebase.storage();
  
  export { db, storage };