import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore"

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBgqt4QUfygXs9Fmu_oMbXV3A4R669NHR8",
    authDomain: "magazine-e776a.firebaseapp.com",
    projectId: "magazine-e776a",
    storageBucket: "magazine-e776a.appspot.com",
    messagingSenderId: "771480284391",
    appId: "1:771480284391:web:a082c06ff76aee08850642",
    measurementId: "G-RVDFWDW5PN"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app); 
export default app;