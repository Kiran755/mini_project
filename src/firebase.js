import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCtEak5kqgV2CaLfaEE6Vnud9FjcL2Jqqw",
  authDomain: "mini-project-4b433.firebaseapp.com",
  projectId: "mini-project-4b433",
  storageBucket: "mini-project-4b433.appspot.com",
  messagingSenderId: "452521831770",
  appId: "1:452521831770:web:732c9523e038626172d763",
  measurementId: "G-T9F3V7CWV9"
};

const FirebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
