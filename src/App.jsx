import "./App.css";
import LogReg from "./components/LogRegPage/LogReg";
import Home from "./components/HomePage/Home";
import { useEffect } from "react";
import Notification from "./notification/Notification";
import { useUserStore } from "./lib/userStore";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";

export default function App() {
  const { currentUser, isLoading, fetchUserInfo } = useUserStore();
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      fetchUserInfo(user?.uid);
    });

    return () => {
      unsub();
    };
  }, [fetchUserInfo]);
  return (
    <div className="container">
      {isLoading && <div className="loading">Loading...</div>} 
      {currentUser ? <Home /> : <LogReg />}
      <Notification />
    </div>
  );
}
