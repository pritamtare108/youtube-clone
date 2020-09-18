import firebase from "firebase/app";

import "firebase/auth"; //auth
import "firebase/database"; //database
import "firebase/storage"; //storing images

const firebaseConfig = {
    apiKey: "AIzaSyCJas_Ct3IA7nSiLRywQ1Pg7xlx80Ijx0o",
    authDomain: "primevideo-cd9eb.firebaseapp.com",
    databaseURL: "https://primevideo-cd9eb.firebaseio.com",
    projectId: "primevideo-cd9eb",
    storageBucket: "primevideo-cd9eb.appspot.com",
    messagingSenderId: "438276537273",
    appId: "1:438276537273:web:8e22918eaea3e1a2a65468",
    measurementId: "G-839ZTS1CTP"
  };

firebase.initializeApp(firebaseConfig); //firebase init
export default firebase;