// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB5DT5THdPIOxWSap7PuzMK4iZUTk6NAEs",
  authDomain: "facebook-clone-ba60e.firebaseapp.com",
  projectId: "facebook-clone-ba60e",
  storageBucket: "facebook-clone-ba60e.appspot.com",
  messagingSenderId: "782051842813",
  appId: "1:782051842813:web:206123ed0b04530a913c94",
  measurementId: "G-1YCT8GZGMC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
