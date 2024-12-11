import "./detail.css";
import React from "react";
import { BsDownload } from "react-icons/bs";
import { useChatStore } from "../../../lib/chatStore";
import { useUserStore } from "../../../lib/userStore";
import { auth, db } from "../../../lib/firebase";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";

export default function Detail() {
  const { user, isCurrentUserBlocked, changeBlock, isReceiverBlocked } =
    useChatStore();
  const { currentUser } = useUserStore();

  const handleBlock = async () => {
    if (!user) return;

    const userDocRef = doc(db, "users", currentUser.id);

    try {
      await updateDoc(userDocRef, {
        blocked: isReceiverBlocked ? arrayRemove(user.id) : arrayUnion(user.id),
      });
      changeBlock();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="detail">
      <div className="user">
        <img src={user?.avatar || "./data/avatar.webp"} alt="" />
        <b>{isCurrentUserBlocked ? "User" : user?.username}</b>
        <p>{isCurrentUserBlocked ? "" : "Lorem ipsum dolor sit amet."}</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./data/up.svg" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img src="./data/up.svg" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./data/down.svg" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img src="./data/bg.jpg" alt="" />
                <span>photo_2024_2.png</span>
              </div>
              <BsDownload className="icon" />
            </div>
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img src="./data/bg.jpg" alt="" />
                <span>photo_2024_2.png</span>
              </div>
              <BsDownload className="icon" />
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./data/up.svg" alt="" />
          </div>
        </div>
        <button onClick={handleBlock}>
          {isCurrentUserBlocked
            ? "You are blocked"
            : isReceiverBlocked
            ? "User Blocked"
            : "Block User"}
        </button>
        <button className="logout" onClick={() => auth.signOut()}>
          Logout
        </button>
      </div>
    </div>
  );
}
