import "./detail.css";
import React, { useState } from "react";
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
  const [settingView, setSettingView] = useState(false);
  const [privacyView, setPrivacyView] = useState(false);
  const [mediaView, setMediaView] = useState(null);

  const handleMedia = () => {
    mediaView
      ? setMediaView(null)
      : onSnapshot(doc(db, "chats", chatId), (res) => {
          setMediaView(res.data());
        });
        setSettingView(false);
        setPrivacyView(false);
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
        <p>{isCurrentUserBlocked ? "" : "Malaya Chat"}</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img
              src={settingView ? "./data/down.svg" : "./data/up.svg"}
              onClick={() => {
                setSettingView(!settingView);
                setPrivacyView(false);
                setMediaView(null);
              }}
              alt=""
            />
          </div>
          { settingView && <div className="setting text-warning">
            Nothing here yet!
          </div>}
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img
              src={privacyView ? "./data/down.svg" : "./data/up.svg"}
              onClick={() => {
                setSettingView(false);
                setPrivacyView(!privacyView);
                setMediaView(null);
              }}
              alt=""
            />
          </div>
          { privacyView && <div className="privacy text-warning">
            Nothing here yet!
          </div>}
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
        <div className="banner">
          <span>
            Designed & Developed by{" "}
            <a
              href="https://numanmalaya.online"
              class="text-warning"
              target="_blank"
            >
              <b>Numan_Malaya</b>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
