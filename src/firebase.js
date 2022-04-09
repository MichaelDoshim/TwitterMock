import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDezQBZu1m0AqvWkkkYAwxr0K9R2Y2b6HI",
    authDomain: "twitter-clone-8b946.firebaseapp.com",
    projectId: "twitter-clone-8b946",
    storageBucket: "twitter-clone-8b946.appspot.com",
    messagingSenderId: "678329756747",
    appId: "1:678329756747:web:e14396a62c606736cc71ce",
    measurementId: "G-TLXKJ8DRK2"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;