
import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDDESA6G7cm9-wg1N-fJlBIfIzsmd9n1p0",
  authDomain: "filmyverse-e6759.firebaseapp.com",
  projectId: "filmyverse-e6759",
  storageBucket: "filmyverse-e6759.appspot.com",
  messagingSenderId: "75762765849",
  appId: "1:75762765849:web:55676503d1428026915a88"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;