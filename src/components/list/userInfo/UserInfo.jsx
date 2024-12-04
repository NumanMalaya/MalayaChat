import React from "react";
import "./userInfo.css";

export default function UserInfo() {
  return (
    <div className="userInfo">
      <div className="user">
        <img src="./bg2.avif" alt="Background" />
        <b>Numan Malaya</b>
      </div>
      <div className="icons">
      <img src="./more.svg" alt="Background" />
      <img src="./video.svg" alt="Background" />
      <img src="./edit.svg" alt="Background" />
      </div>
    </div>
  );
}
