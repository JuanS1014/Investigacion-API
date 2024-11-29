import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAk-_d6VebIdzJBt1TxoojpJcHr4h-3pEk",
  authDomain: "sharks-3af00.firebaseapp.com",
  databaseURL: "https://sharks-3af00-default-rtdb.firebaseio.com",
  projectId: "sharks-3af00",
  storageBucket: "sharks-3af00.firebasestorage.app",
  messagingSenderId: "199819872267",
  appId: "1:199819872267:web:47da77c47b4a62f2c91f0e",
  measurementId: "G-9Z51V6CSD7"
};

const app = initializeApp(firebaseConfig);
export default app
;
