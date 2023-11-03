// Import the functions you need from the SDKs you need
import { deleteApp, getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6x-VNCSrsjK4fMwidFkAgSrrlBW12AU4",
  authDomain: "crce-connect.firebaseapp.com",
  projectId: "crce-connect",
  storageBucket: "crce-connect.appspot.com",
  messagingSenderId: "603997251696",
  appId: "1:603997251696:web:2c3b62d1b335ec69e42cb5",
};

// Initialize Firebase
let firebaseApp;
if (!getApps().length) {
  firebaseApp = initializeApp(firebaseConfig);
} else {
  firebaseApp = getApp();
  deleteApp(firebaseApp);
  firebaseApp = initializeApp(firebaseConfig);
}

export const db = getFirestore(firebaseApp);