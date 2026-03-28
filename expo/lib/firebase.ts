import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBx_cTBrVdYy97Pf0yTSnkUmm2zRhC661k",
  authDomain: "pinepoint-28ca9.firebaseapp.com",
  projectId: "pinepoint-28ca9",
  storageBucket: "pinepoint-28ca9.firebasestorage.app",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);