import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN ,
  projectId: process.env.REACT_APP_PROJECTID ,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET ,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID ,
  appId: process.env.REACT_APP_APPID ,
  measurementId: process.env.REACT_APP_MEASUREMENTID ,
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export async function getIdiomas(){
  const Colidiomas = collection(db, 'Idiomas');
  const idiomasSnapshot = await getDocs(Colidiomas);
  const idiomasList = idiomasSnapshot.docs.map(doc => doc.data());
  return idiomasList;
}

export async function getTraducion(){
  const traducciones = [];
  try {
    const ref = collection(db, 'Traduccion');
    const q = query(ref, where('idioma', '==', 'Mapuche'));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(doc => {
      traducciones.push(doc);
    })

    return traducciones;

  } catch (error) {
    
    console.error(error);
    return traducciones;
  }
}