import React from "react";
import List from "./list/List";
import Chat from "./chat/Chat";
import Detail from "./detail/Detail";

export default function Home() {
  return (
    <>
      <List />
      <Chat />
      <Detail />
    </>
  );
}
