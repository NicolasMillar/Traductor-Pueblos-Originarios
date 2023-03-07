import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layaout';
import Home from './components/Home';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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
const analytics = getAnalytics(app);
console.log(analytics);

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>   
    </>
  );
}

export default App;
