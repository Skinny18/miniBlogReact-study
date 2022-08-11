// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXRPRBSKOyFZvm4fPPe4iLj-HSbH8od_4",
  authDomain: "miniblog-d05b9.firebaseapp.com",
  projectId: "miniblog-d05b9",
  storageBucket: "miniblog-d05b9.appspot.com",
  messagingSenderId: "762211972359",
  appId: "1:762211972359:web:d7f82b9923517b445701a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db};