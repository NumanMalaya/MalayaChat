import "./detail.css";
import React from "react";
import { BsDownload } from "react-icons/bs";
import { auth } from "../../../lib/firebase";

export default function Detail() {
  return (
    <div className="detail">
      <div className="user">
        <img src="./data/bg.jpg" alt="" />
        <b>Numan Malaya</b>
        <p>Lorem ipsum dolor sit amet.</p>
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
        <button>Block User</button>
        <button className="logout" onClick={() => auth.signOut()}>
          Logout
        </button>
      </div>
    </div>
  );
}
