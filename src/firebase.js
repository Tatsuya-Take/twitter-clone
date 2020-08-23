import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAVgxiLePjwC8T2x2vdfx72439ViMhrjzA",
  authDomain: "twitter-clone-a701e.firebaseapp.com",
  databaseURL: "https://twitter-clone-a701e.firebaseio.com",
  projectId: "twitter-clone-a701e",
  storageBucket: "twitter-clone-a701e.appspot.com",
  messagingSenderId: "767717771547",
  appId: "1:767717771547:web:be11f7498184598dff6bbe"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;