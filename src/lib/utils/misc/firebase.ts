// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCj8n9VEHsoZSREjo0kyd4Otupcte0yBno',
	authDomain: 'todo-17b5d.firebaseapp.com',
	projectId: 'todo-17b5d',
	storageBucket: 'todo-17b5d.appspot.com',
	messagingSenderId: '10407036603',
	appId: '1:10407036603:web:49c0fea0b50cb1f3ca4b9e'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
