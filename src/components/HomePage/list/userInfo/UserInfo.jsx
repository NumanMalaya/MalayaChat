import React from "react";
import "./userInfo.css";
import { useUserStore } from "../../../../lib/userStore";

export default function UserInfo() {
  const { currentUser } = useUserStore();
  return (
    <div className="userInfo">
      <div className="user">
        <img src={currentUser.avatar || "./data/avatar.webp"} alt="Background" />
        <b>{currentUser.username}</b>
      </div>
      <div className="icons">
      <img src="./data/more.svg" alt="Background" />
      <img src="./data/video.svg" alt="Background" />
      <img src="./data/edit.svg" alt="Background" />
      </div>
    </div>
  );
}
