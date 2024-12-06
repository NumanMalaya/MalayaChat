import React, { useState } from "react";
import "./chatList.css";
import { FaSearch, FaPlus, FaMinus } from "react-icons/fa";
import AddUser from "./addUser/AddUser";

export default function ChatList() {
  const [addMode, setAddmode] = useState(false);
  return (
    <div className="chatList">
      <div className="search mb-3">
        <div className="searchBar">
          <FaSearch className="searchIcon" />
          <input type="text" placeholder="Search..." />
        </div>
        {addMode ? (
          <FaMinus
            onClick={() => {
              setAddmode(!addMode);
            }}
            className="minus"
          />
        ) : (
          <FaPlus
            onClick={() => {
              setAddmode(!addMode);
            }}
            className="plus"
          />
        )}
      </div>
      <div className="item">
        <img src="./data/bg2.avif" alt="" />
        <div className="texts">
          <span>Numan Malaya</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./data/bg2.avif" alt="" />
        <div className="texts">
          <span>Numan Malaya</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./data/bg2.avif" alt="" />
        <div className="texts">
          <span>Numan Malaya</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./data/bg2.avif" alt="" />
        <div className="texts">
          <span>Numan Malaya</span>
          <p>Hello</p>
        </div>
      </div>
      {addMode && <AddUser />}
    </div>
  );
}
