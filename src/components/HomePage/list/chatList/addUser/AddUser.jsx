import React from "react";
import "./addUser.css";
export default function AddUser() {
  return (
    <div className="addUser">
      <form>
        <input type="text" placeholder="Username" name="username"/>
        <button>Search</button>
      </form>
      <div className="user">
        <div className="detail">
            <img src="./data/avatar.webp" alt="" />
            <span>Numan Malaya</span>
        </div>
        <button>Add User</button>
      </div>
    </div>
  );
}
