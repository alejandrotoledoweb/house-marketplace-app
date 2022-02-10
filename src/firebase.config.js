// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC5Iuu7xpD6gZwp9hiCg3j9QLS_2UHWqKU',
  authDomain: 'house-marketplace-app-bc48c.firebaseapp.com',
  projectId: 'house-marketplace-app-bc48c',
  storageBucket: 'house-marketplace-app-bc48c.appspot.com',
  messagingSenderId: '539128169823',
  appId: '1:539128169823:web:b9a191d9606003d971e2ea',
  measurementId: 'G-Q8X912KGSN',
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
