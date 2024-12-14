import "./detail.css";
import React, { useEffect, useState } from "react";
import { BsDownload } from "react-icons/bs";
import { useChatStore } from "../../../lib/chatStore";
import { useUserStore } from "../../../lib/userStore";
import { auth, db } from "../../../lib/firebase";
import {
  arrayRemove,
  arrayUnion,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";

export default function Detail() {
  const { user, chatId, isCurrentUserBlocked, changeBlock, isReceiverBlocked } =
    useChatStore();
  const { currentUser } = useUserStore();
  const [mediaView, setMediaView] = useState(null);

  const handleMedia = () => {
    mediaView
      ? setMediaView(null)
      : onSnapshot(doc(db, "chats", chatId), (res) => {
          setMediaView(res.data());
        });
  };
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
            <span>Shared Media</span>
            <img
              src={mediaView ? "./data/down.svg" : "./data/up.svg"}
              onClick={handleMedia}
              alt=""
            />
          </div>
          {mediaView && (
            <div className="photos">
              {mediaView?.messages?.map(
                (message) =>
                  message.img && (
                    <div className="photoItem">
                      <div className="photoDetail">
                        <img src={message.img} alt="" />
                        <span>
                          {message.createdAt.toDate().toLocaleString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "2-digit",
                            hour: "2-digit",
                            minute: "2-digit",
                            hour12: true,
                          })}
                        </span>
                      </div>
                      <a
                        href=""
                        className="text-light"
                        download="./data/bg.jpg"
                      >
                        <BsDownload className="icon" />
                      </a>
                    </div>
                  )
              )}
            </div>
          )}
        </div>
        <button className="mt-3" onClick={handleBlock}>
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
