import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDF64LJtu80isSeLxoU5E0o7emGQUCUyA8",
    authDomain: "tracle-a5aad.firebaseapp.com",
    projectId: "tracle-a5aad",
    storageBucket: "tracle-a5aad.appspot.com",
    messagingSenderId: "32093854044",
    appId: "1:32093854044:web:0e75b68e808af841f2c999"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };