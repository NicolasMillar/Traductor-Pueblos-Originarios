import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyARH34DvQ6IiuQaxGY1YsDiFEPnvcZKOeA",
  authDomain: "traductor-pueblos-originarios.firebaseapp.com",
  projectId: "traductor-pueblos-originarios",
  storageBucket: "traductor-pueblos-originarios.appspot.com",
  messagingSenderId: "743577611086",
  appId: "1:743577611086:web:710e9ffc948f7c47030c1f",
  measurementId: "G-3K1R6JQHZE"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
console.log(db);