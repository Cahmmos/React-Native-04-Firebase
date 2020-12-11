import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB1z2FMkO9mkb_SWe8X9i4Xk1Ei5r0uPYQ",
    authDomain: "projetorn-fb-665d0.firebaseapp.com",
    projectId: "projetorn-fb-665d0",
    storageBucket: "projetorn-fb-665d0.appspot.com",
    messagingSenderId: "904311594423",
    appId: "1:904311594423:web:4fd09302e755363caa1c32",
    measurementId: "G-RXV6FTHP6L"
  };
  
  var app = firebase.initializeApp(firebaseConfig);

  export const conexaoFS = app.firestore();