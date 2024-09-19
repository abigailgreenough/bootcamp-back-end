// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqmtznfELmFwM_OsD2Y5-5JV44rRzNkqQ",
  authDomain: "bootcamp-final-ecff6.firebaseapp.com",
  projectId: "bootcamp-final-ecff6",
  storageBucket: "bootcamp-final-ecff6.appspot.com",
  messagingSenderId: "760897058241",
  appId: "1:760897058241:web:02d4e32f8f2fdddf086b40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
