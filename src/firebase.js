// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyChriDIyUInYziYu8OM7XopCDCWNcdY1qk",
    authDomain: "facebook-clone-556dc.firebaseapp.com",
    databaseURL: "https://facebook-clone-556dc.firebaseio.com",
    projectId: "facebook-clone-556dc",
    storageBucket: "facebook-clone-556dc.appspot.com",
    messagingSenderId: "880847703953",
    appId: "1:880847703953:web:ca76ba4f9eb3fd47be5430",
    measurementId: "G-RV7HT56226"
  }; 

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;