import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD5EQ7nz81rFFZwRxHxdBNCuep8moj6ZRo",
  authDomain: "miniblog-bd305.firebaseapp.com",
  projectId: "miniblog-bd305",
  storageBucket: "miniblog-bd305.appspot.com",
  messagingSenderId: "714154637615",
  appId: "1:714154637615:web:23e714fc5e0d116dc949da"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }