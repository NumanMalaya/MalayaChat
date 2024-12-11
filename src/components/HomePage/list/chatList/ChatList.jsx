import React, { useEffect, useState } from "react";
import "./chatList.css";
import { FaSearch, FaPlus, FaMinus } from "react-icons/fa";
import AddUser from "./addUser/AddUser";
import { useUserStore } from "../../../../lib/userStore";
import { doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../../../../lib/firebase";
import { useChatStore } from "../../../../lib/chatStore";
import { RingLoader } from "react-spinners";

export default function ChatList() {
  const [chats, setChats] = useState([]);
  const [addMode, setAddmode] = useState(false);
  const [input, setInput] = useState("");
  const [contactLoading, setContactLoading] = useState(false);

  const { currentUser } = useUserStore();
  const { changeChat, chatId, user } = useChatStore();

  useEffect(() => {
    setContactLoading(true);
    const unSub = onSnapshot(
      doc(db, "userchats", currentUser.id),
      async (res) => {
        const items = res.data().chats;
        const promises = items.map(async (item) => {
          const userDocRef = doc(db, "users", item.receiverId);
          const userDocSnap = await getDoc(userDocRef);

          const user = userDocSnap.data();

          return { ...item, user };
        });
        const chatData = await Promise.all(promises);
        setChats(chatData.sort((a, b) => b.updatedAt - a.updatedAt));
        setContactLoading(false);
      }
    );

    return () => {
      unSub();
    };
  }, [currentUser.id]);

  const handleSelect = async (chat) => {
    changeChat(chat?.chatId, chat?.user);

    const userChats = chats.map((item) => {
      const { user, ...rest } = item;
      return rest;
    });

    const chatIndex = userChats.findIndex(
      (item) => item.chatId === chat.chatId
    );
    userChats[chatIndex].isSeen = true;
    const userChatsRef = doc(db, "userchats", currentUser.id);

    try {
      await updateDoc(userChatsRef, {
        chats: userChats,
      });
      changeChat(chat.chatId, chat.user);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredChats = chats.filter((c) =>
    c.user.username.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <div className="chatList">
      <div className="search mb-3">
        <div className="searchBar">
          <FaSearch className="searchIcon" />
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setInput(e.target.value)}
          />
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
      {contactLoading ? (
        <div className="loading">
          <RingLoader color="#3498db" className="m-auto" size={50} />
        </div>
      ) : (
        filteredChats.map((chat) => (
          <div
            className="item"
            key={chat.chatId}
            onClick={() => handleSelect(chat)}
            style={{
              backgroundColor: chat?.isSeen ? "transparent" : "#5183fe",
            }}
          >
            <img
              src={
                chat.user.blocked.includes(currentUser.id)
                  ? "./data/avatar.webp"
                  : chat.user.avatar || "./data/avatar.webp"
              }
              alt=""
            />
            <div className="texts">
              <span>
                {chat.user.blocked.includes(currentUser.id)
                  ? "User"
                  : chat.user.username}
              </span>
              <p>
                {chat.user.blocked.includes(currentUser.id)
                  ? ""
                  : chat.lastMessage}
              </p>
            </div>
          </div>
        ))
      )}

      {addMode && <AddUser />}
    </div>
  );
}
