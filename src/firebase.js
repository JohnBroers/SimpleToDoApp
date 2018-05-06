import { initializeApp } from 'firebase'

const app = initializeApp({
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: process.env.FIREBASE_AUTHDOMAIN,
  databaseURL: 'https://simpletodo-51b84.firebaseio.com',
  projectId: process.env.FIREBASE_PROJECTID,
  storageBucket: process.env.FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGINGSENDER
});

export const db = app.database();
export const tasksRef = db.ref('tasks');