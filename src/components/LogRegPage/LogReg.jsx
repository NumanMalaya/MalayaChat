import React, { useState } from "react";
import "./logReg.css";
import { toast } from "react-toastify";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../../lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import axios from "axios";

export default function LogReg() {
  const [registerLoading, setRegisterLoading] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [avatar, setAvatar] = useState({
    file: null,
    url: "data/avatar.webp",
  });
  const handleAvatar = (e) => {
    e.target.files[0] &&
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
  };
  const uploadPic = async () => {
    if (!avatar.file) return null;
    const formData = new FormData();
    formData.append("file", avatar.file);
    formData.append("upload_preset", "vkhhawxe");
    formData.append("cloud_name", "ddurazad4");

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/ddurazad4/image/upload",
        formData
      );
      return response.data.secure_url;
    } catch (error) {
      toast.error("Image upload failed. " + error);
    }
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginLoading(true);
    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Successfully login!");
    } catch (error) {
      toast.error("Login error : ", error.message);
    } finally {
      setLoginLoading(false);
    }
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    setRegisterLoading(true);
    const formData = new FormData(e.target);
    const { username, email, password } = Object.fromEntries(formData);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const uploadedImgUrl = await uploadPic();
      toast.success("Account created!");
      await setDoc(doc(db, "users", res.user.uid), {
        username,
        email,
        avatar: uploadedImgUrl,
        id: res.user.uid,
        blocked: [],
      });
      await setDoc(doc(db, "userchats", res.user.uid), {
        chats: [],
      });
    } catch (error) {
      toast.error("Register error : ", error.message);
    } finally {
      setRegisterLoading(false);
    }
  };

  return (
    <div className="row logReg-row">
      <div className="col-md-6 col-12 text-center login-col">
        <form onSubmit={handleLogin}>
          <h4>Welcome back,</h4>
          <input
            type="email"
            className="input"
            placeholder="Email"
            name="email"
          />
          <input
            type="text"
            className="input"
            placeholder="Password"
            name="password"
          />
          <button disabled={loginLoading} className="submit mt-4">
            {loginLoading ? "loading" : "Login"}
          </button>
        </form>
      </div>
      <div className="col-md-6 col-12 text-center register-col">
        <form onSubmit={handleRegister}>
          <h4>Create an Account</h4>
          <div className="avatarDiv">
            <img src={avatar.url} alt="" />
            <label htmlFor="avatar">Upload an Image</label>
          </div>
          <input
            type="file"
            className="d-none"
            id="avatar"
            onChange={handleAvatar}
          />
          <input
            type="text"
            className="input"
            placeholder="Username"
            name="username"
          />
          <input
            type="email"
            className="input"
            placeholder="Email"
            name="email"
          />
          <input
            type="text"
            className="input"
            placeholder="Password"
            name="password"
          />
          <button disabled={registerLoading} className="submit mt-4">
            {registerLoading ? "loading" : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
}
