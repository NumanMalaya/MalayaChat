import "./chat.css";
import React, { useEffect, useRef, useState } from "react";
import EmojiPicker from "emoji-picker-react";
import { RingLoader } from "react-spinners";
import {
  arrayUnion,
  doc,
  getDoc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../../lib/firebase";
import { useChatStore } from "../../../lib/chatStore";
import { useUserStore } from "../../../lib/userStore";
import axios from "axios";

export default function Chat() {
  const [pendingStatus, setPendingStatus] = useState(false);
  const [chat, setChat] = useState();
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [chatLoading, setChatLoading] = useState(false);
  const [img, setImg] = useState({
    file: null,
    url: "",
  });

  const { currentUser } = useUserStore();
  const { chatId, user, isCurrentUserBlocked, isReceiverBlocked } =
    useChatStore();

  const endRef = useRef(null);

  useEffect(() => {
    setChatLoading(true);
    const unSub = onSnapshot(doc(db, "chats", chatId), (res) => {
      setChat(res.data());
      setChatLoading(false);
      setTimeout(() => {
        endRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 0);
    });

    return () => {
      unSub();
    };
  }, [chatId]);

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  const handleImg = (e) => {
    e.target.files[0] &&
      setImg({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
  };

  const uploadPic = async () => {
    if (!img.file) return null;
    const formData = new FormData();
    formData.append("file", img.file);
    formData.append("upload_preset", "malayachat");
    formData.append("cloud_name", "ddurazad4");

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/ddurazad4/image/upload",
        formData
      );
      return response.data.secure_url;
    } catch (error) {
      console.error("Image upload failed : " + error);
    }
  };

  const handleSend = async () => {
    if (text === "" && img.file === null) return;
    let imgUrl = null;
    try {
      if (img.file) {
        imgUrl = await uploadPic();
      }

      await updateDoc(doc(db, "chats", chatId), {
        messages: arrayUnion({
          senderId: currentUser.id,
          text,
          createdAt: new Date(),
          ...(imgUrl && { img: imgUrl }),
        }),
      });

      const userIDs = [currentUser.id, user.id];

      userIDs.forEach(async (id) => {
        const userChatsRef = doc(db, "userchats", id);
        const userChatsSnapshot = await getDoc(userChatsRef);

        if (userChatsSnapshot.exists()) {
          const userChatsData = userChatsSnapshot.data();

          const chatIndex = userChatsData.chats.findIndex(
            (c) => c.chatId === chatId
          );

          userChatsData.chats[chatIndex].lastMessage = text ? text : "Photo";
          userChatsData.chats[chatIndex].isSeen =
            id === currentUser.id ? true : false;
          userChatsData.chats[chatIndex].updatedAt = Date.now();

          await updateDoc(userChatsRef, {
            chats: userChatsData.chats,
          });
        }
      });
    } catch (error) {
      console.log(error);
    }
    setImg({
      file: null,
      url: "",
    });
    setText("");
  };

  const handlePendingStatus = () => {
    setPendingStatus(true); 
    setTimeout(() => {
      setPendingStatus(false);
    }, 3000)
  }

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src={user?.avatar || "./data/avatar.webp"} alt="" />
          <div className="texts">
            <b>{isCurrentUserBlocked ? "User" : user?.username}</b>
            <p>{isCurrentUserBlocked ? "" : "Malaya Chat"}</p>
          </div>
        </div>
        <div className="icons">
          <img
            src="./data/phone.svg"
            onClick={handlePendingStatus}
            alt=""
          />
          <img
            src="./data/video.svg"
            onClick={handlePendingStatus}
            alt=""
          />
          <img
            src="./data/info.svg"
            onClick={handlePendingStatus}
            alt=""
          />
        </div>
      </div>
      <div className="center">
        {chatLoading ? (
          <div className="loading">
            <RingLoader color="#3498db" className="m-auto" size={100} />
          </div>
        ) : (
          chat?.messages?.map((message) => (
            <div
              className={
                message.senderId === currentUser.id ? "message own" : "message"
              }
              key={message?.createAt}
            >
              <div className="texts">
                {message.img && <img src={message.img} alt="" />}
                {message.text && <p>{message.text}</p>}
                {(() => {
                  const time = message.createdAt
                    .toDate()
                    .toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    });
                  return <span>{time}</span>;
                })()}
              </div>
            </div>
          ))
        )}
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <label htmlFor="file">
            <img src={img.url || "./data/img.svg"} className="img" alt="" />
          </label>
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            onChange={handleImg}
          />
          <img src="./data/camera.svg" alt="" />
          <img src="./data/mic.svg" alt="" />
        </div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={
            isCurrentUserBlocked || isReceiverBlocked
              ? "You can't send message"
              : "Type a message..."
          }
          disabled={isCurrentUserBlocked || isReceiverBlocked}
        />
        <div className="emoji">
          <img
            src="./data/face.svg"
            onClick={() => {
              setOpen(!open);
            }}
            alt=""
          />
          <div className="picker">
            <EmojiPicker open={open} theme="dark" onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button
          className="sendButton"
          disabled={isCurrentUserBlocked || isReceiverBlocked}
        >
          <img src="./data/send.svg" onClick={handleSend} alt="" />
        </button>
      </div>
      {pendingStatus && (
        <div className="pendingStatus">
          <p>Nothing here yet!</p>
        </div>
      )}
    </div>
  );
}
