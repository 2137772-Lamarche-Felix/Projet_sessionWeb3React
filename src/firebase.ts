// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMf56X8JbFC16LDXmIeR3zzvQdqa9KRgA",
  authDomain: "projetfinalweb-1e4a6.firebaseapp.com",
  projectId: "projetfinalweb-1e4a6",
  storageBucket: "projetfinalweb-1e4a6.appspot.com",
  messagingSenderId: "477936048634",
  appId: "1:477936048634:web:87d9408f31210917cdec43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const logInWithEmailAndPassword = async (
email: string,
password: string
) => {
try {
    await signInWithEmailAndPassword(auth, email, password);
} catch (err: any) {
    console.error(err);
    alert(err.message);
}
};