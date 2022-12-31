import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD9w2zqo54UZTPJt6kmHVGiB3sEzDuGJ0s",
  authDomain: "disney-clone-efd33.firebaseapp.com",
  projectId: "disney-clone-efd33",
  storageBucket: "disney-clone-efd33.appspot.com",
  messagingSenderId: "575831016597",
  appId: "1:575831016597:web:e1a6ec4fa54266e0a9079c",
};

initializeApp(firebaseConfig);
const db = getFirestore();
const colRef = collection(db, "movies");
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage();

export { auth, provider, storage, colRef };
export default db;
