import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";


//Configuración de la base de datos en Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBdGZ6YnpynGRpFqwJcUNEG_qq2edwKOOA",
    authDomain: "rhythmmad-67fff.firebaseapp.com",
    projectId: "rhythmmad-67fff",
    storageBucket: "rhythmmad-67fff.appspot.com",
    messagingSenderId: "1084792462717",
    appId: "1:1084792462717:web:80bbf0df653078d61ec014"
  };

// Inicializar Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

export default { db };

