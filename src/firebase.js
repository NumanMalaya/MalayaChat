import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyB3dYfeU3enMnK7h2tdN97vAR5wrG6Hwbg",
  authDomain: "chat-app-cb846.firebaseapp.com",
  projectId: "chat-app-cb846",
  storageBucket: "chat-app-cb846.firebasestorage.app",
  messagingSenderId: "410914004662",
  appId: "1:410914004662:web:7a5946c5fe0bbffb6d5017",
  measurementId: "G-3GBJP0PP8E"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const analytics = getAnalytics(app);