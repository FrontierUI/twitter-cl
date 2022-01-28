// Import the functions you need from the SDKs you need

import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyC_KzOUZ517LL0iCYlM24VARzYhECMJxhI",
  authDomain: "twit-clon.firebaseapp.com",
  projectId: "twit-clon",
  storageBucket: "twit-clon.appspot.com",
  messagingSenderId: "471376054776",
  appId: "1:471376054776:web:91025151c61e8221fa6e0d",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
