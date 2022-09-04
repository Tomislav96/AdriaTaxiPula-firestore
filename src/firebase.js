// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getFirestore} from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjthy18FjK5eMO_qHbsMA-IMLDgFa-TlA",
  authDomain: "adriataxipula.firebaseapp.com",
  databaseURL: "https://adriataxipula-default-rtdb.firebaseio.com",
  projectId: "adriataxipula",
  storageBucket: "adriataxipula.appspot.com",
  messagingSenderId: "254167161857",
  appId: "1:254167161857:web:fe3287f9a32b1fa26ff400",
  measurementId: "G-3C9WL96VY4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig, {  ignoreUndefinedProperties: true
});
const db = getFirestore(app);



export {
  db
}


