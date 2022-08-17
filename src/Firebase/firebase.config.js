import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Updated the Config
const firebaseConfig = {
  apiKey: "AIzaSyD0XjolsxDFkRWfwUNcBL0vIqfC5dI-EVY",
  authDomain: "local-pharma-70836.firebaseapp.com",
  projectId: "local-pharma-70836",
  storageBucket: "local-pharma-70836.appspot.com",
  messagingSenderId: "913127224920",
  appId: "1:913127224920:web:afdf8a84ef70add38efc2d",
  measurementId: "G-ZGRB1VRR9Z",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
