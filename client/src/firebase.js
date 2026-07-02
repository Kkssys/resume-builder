// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCY73bDgfaCUjkyskVsXrK2azvNFqWtC3k",
  authDomain: "resume-builder-47fc8.firebaseapp.com",
  projectId: "resume-builder-47fc8",
  storageBucket: "resume-builder-47fc8.firebasestorage.app",
  messagingSenderId: "24582036865",
  appId: "1:24582036865:web:bb1e196688a66b39bd9c80",
  measurementId: "G-441GE4NJW6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export { app }; 