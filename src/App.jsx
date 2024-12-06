import "./App.css";
import LogReg from "./components/LogRegPage/LogReg";
import Home from "./components/HomePage/Home";
import { useEffect, useState } from "react";
import Notification from "./components/HomePage/notification/Notification";
import { useUserStore } from "./lib/userStore";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";

export default function App() {
  const { currentUser, isLoading, fetchUserInfo } = useUserStore();
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      fetchUserInfo(user.uid);
    });

    return () => {
      unsub();
    };
  }, [fetchUserInfo]);
  console.log(currentUser)
  if (isLoading) return <div className="loading">Loading...</div>;
  return (
    <div className="container">
      {currentUser ? <Home /> : <LogReg />}
      <Notification />
    </div>
  );
}
