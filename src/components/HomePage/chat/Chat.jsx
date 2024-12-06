import "./chat.css";
import React, { useEffect, useRef, useState } from "react";
import EmojiPicker from "emoji-picker-react";

export default function Chat() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const endRef = useRef(null);
  useEffect(()=>{
    endRef.current?.scrollIntoView({behavior: "smooth"})
  },[])

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };
  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./bg.webp" alt="" />
          <div className="texts">
            <b>Numan Malaya</b>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.svg" alt="" />
          <img src="./video.svg" alt="" />
          <img src="./info.svg" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequatur soluta laudantium voluptatum possimus saepe nostrum
              ratione porro voluptate quaerat inventore.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./bg.jpg" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequatur soluta laudantium voluptatum possimus saepe nostrum
              ratione porro voluptate quaerat inventore.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequatur soluta laudantium voluptatum possimus saepe nostrum
              ratione porro voluptate quaerat inventore.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./bg.jpg" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequatur soluta laudantium voluptatum possimus saepe nostrum
              ratione porro voluptate quaerat inventore.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img src="./bg.jpg" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequatur soluta laudantium voluptatum possimus saepe nostrum
              ratione porro voluptate quaerat inventore.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.svg" alt="" />
          <img src="./camera.svg" alt="" />
          <img src="./mic.svg" alt="" />
        </div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a message..."
        />
        <div className="emoji">
          <img
            src="./face.svg"
            onClick={() => {
              setOpen(!open);
            }}
            alt=""
          />
          <div className="picker">
            <EmojiPicker open={open} theme="dark" onEmojiClick={handleEmoji} />
          </div>
        </div>
        <img src="./send.svg" className="sendButton" alt="" />
      </div>
    </div>
  );
}
