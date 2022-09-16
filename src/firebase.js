import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCpFYvGEwmuv2i-YbbjWz-9Ow0I0p6xCCo",
    authDomain: "clone-865b5.firebaseapp.com",
    projectId: "clone-865b5",
    storageBucket: "clone-865b5.appspot.com",
    messagingSenderId: "817620093443",
    appId: "1:817620093443:web:db2b11d826f8c74f09dc36",
    measurementId: "G-9ZE0CZ08EN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };