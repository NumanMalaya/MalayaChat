import React from "react";
import "./userInfo.css";

export default function UserInfo() {
  return (
    <div className="userInfo">
      <div className="user">
        <img src="./data/bg2.avif" alt="Background" />
        <b>Numan Malaya</b>
      </div>
      <div className="icons">
      <img src="./data/more.svg" alt="Background" />
      <img src="./data/video.svg" alt="Background" />
      <img src="./data/edit.svg" alt="Background" />
      </div>
    </div>
  );
}
