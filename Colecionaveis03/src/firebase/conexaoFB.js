import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAaBEdqv7bFR8eTEje26IhwdnknB-ntrl4",
    authDomain: "colecionaveisfb-35fcb.firebaseapp.com",
    databaseURL: "https://colecionaveisfb-35fcb.firebaseio.com",
    projectId: "colecionaveisfb-35fcb",
    storageBucket: "colecionaveisfb-35fcb.appspot.com",
    messagingSenderId: "220896254608",
    appId: "1:220896254608:web:d08d90b2e3284cc56bd615",
    measurementId: "G-4CX6SN3TF3"
  };
  
  var app = firebase.initializeApp(firebaseConfig);

  export const conexaoFS = app.firestore();