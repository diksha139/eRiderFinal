import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDDj6lsPr_zmOmzed71L95g3UiL6PadN8E",
  authDomain: "erider-33712.firebaseapp.com",
  projectId: "erider-33712",
  storageBucket: "erider-33712.appspot.com",
  messagingSenderId: "387227078972",
  appId: "1:387227078972:web:e0315c31927a2ab6120e39"
};
firebase.initializeApp(firebaseConfig);



export default firebase.firestore();
