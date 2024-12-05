import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB8sLDVXNxdyvm3CtJly9uXHOfUByh3RPw",
  authDomain: "malayachat.firebaseapp.com",
  projectId: "malayachat",
  storageBucket: "malayachat.firebasestorage.app",
  messagingSenderId: "283203426414",
  appId: "1:283203426414:web:8ebb32f15988185c536e7f"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()