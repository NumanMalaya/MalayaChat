import React from "react";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function Notification() {
  return (
    <div className="notification">
      <ToastContainer position="bottom-right" />
    </div>
  );
}
