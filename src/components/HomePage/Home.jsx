import React from "react";
import List from "./list/List";
import Chat from "./chat/Chat";
import Detail from "./detail/Detail";
import { useChatStore } from "../../lib/chatStore";

export default function Home() {
  const { chatId } = useChatStore();

  return (
    <>
      <List />
      {chatId && <Chat />}
      {chatId && <Detail />}
    </>
  );
}
