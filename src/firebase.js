import firebase from 'firebase/app';
import 'firebase/firestore'; // gracias a esta importación podemos conectar con la base de datos

const firebaseConfig = {
  apiKey: "AIzaSyDMH1ijqaUdGhFNRH_TGldFG9zEj942FUs",
  authDomain: "authfirebase-ccb3d.firebaseapp.com",
  projectId: "authfirebase-ccb3d",
  storageBucket: "authfirebase-ccb3d.appspot.com",
  messagingSenderId: "1090723915517",
  appId: "1:1090723915517:web:591b805653ee0d10b48094"
};

// inicializar firebase
firebase.initializeApp(firebaseConfig)

// QUEREMOS TRABAJAR CON LA BASE DE DATOS
const db = firebase.firestore();

export { db }